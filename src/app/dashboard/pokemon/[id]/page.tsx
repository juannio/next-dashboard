import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {
    params: {
        id: string;
        name: string;
    }
}

const typesColors: any = {
    'fire': 'bg-[#c43d25]',
    'water': 'bg-[#6890F0]',
    'electric': 'bg-[#F8D030]',
    'grass': 'bg-[#78C850]',
    'ice': 'bg-[#98D8D8]',
    'fighting': 'bg-[#C03028]',
    'poison': 'bg-[#A040A0]',
    'ground': 'bg-[#E0C068]',
    'flying': 'bg-[#A890F0]',
    'psychic': 'bg-[#F85888]',
    'bug': 'bg-[#A8B820]',
    'rock': 'bg-[#B8A038]',
    'ghost': 'bg-[#705898]',
    'dragon': 'bg-[#7038F8]',
    'dark': 'bg-[#705848]',
    'steel': 'bg-[#B8B8D0]',
    'fairy': 'bg-[#F0B6BC]',
    'stellar': 'bg-[#35ACE7]',
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params
    const { name } = await getPokemon(id)
    return {
        title: name,
        description: 'Pagina del pokemon'
    }
}

const getPokemon = async (id: string): Promise<any> => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await resp.json();
    console.log(data.name);
    return data;
}

const SinglePokemonPage = async ({ params }: Props) => {
    const { id } = await params
    const pokemon = await getPokemon(id)
    return (
        <div className="w-80 bg-[#D0A8D6] border-4 border-[#91519D] rounded-lg p-2 shadow-lg font-mono">
            <div className="flex justify-between items-center bg-[#91519D] text-white px-2 py-1 rounded-t-md">
                <h2 className="text-sm">POKÉMON INFO</h2>
                <Link href="/dashboard/pokemons" className="text-white text-sm border border-white-600 px-2">
                    Go back
                </Link>
            </div>
            <div className="flex bg-white p-2 rounded-lg mt-1 relative">
                <Image
                    src={
                        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
                    }
                    width={100}
                    height={100}
                    priority={false}
                    alt={pokemon.name}
                />
                {/*  <img
                    src="/path-to-mudkip-image.png"
                    alt="Mudkip"
                    className="w-16 h-16 border border-black"
                /> */}
                <div className="ml-4 text-sm">
                    <h3 className="font-bold">No.{pokemon.id}</h3>
                    <p className="text-blue-600 font-bold capitalize">{pokemon.name}</p>
                    <p className="text-xs">Base experience {pokemon.base_experience}</p>
                </div>
            </div>
            <div className="mt-2 text-xs text-black bg-[#E7E7E7] p-2 rounded-md">
                <p className="font-bold">PROFILE</p>
                <p><strong>OT:</strong> MAY</p>
                <p><strong>ID No:</strong> 61394</p>
                <p><strong>TYPE:</strong> {
                    pokemon.types.map((elem: any) => {
                        return <span key={elem.slot} className={`${typesColors[elem.type.name]} text-white px-1 rounded`}>{elem.type.name}</span>
                    })
                }</p>
                <p><strong>ABILITY:</strong> TORRENT</p>
                <p className="italic">Ups WATER moves in a pinch.</p>
                <p className="mt-2 text-red-600 font-bold">TRAINER MEMO</p>
                <p><span className="text-orange-600 font-bold">NAIVE</span> nature,</p>
                <p>met at <strong>Lv. 5</strong>,</p>
                <p className="text-red-600 font-bold">ROUTE 101.</p>
            </div>
        </div>
    )
}

export default SinglePokemonPage;



