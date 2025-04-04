import { GetPokemonResponse, PokemonTypes, PokemonSimpleData, typesColors } from "@/pokemons";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<PokemonSimpleData>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params
    const { name } = await getPokemon(id)
    return {
        title: name,
        description: 'Pagina del pokemon'
    }
}

const getPokemon = async (id: string): Promise<GetPokemonResponse> => {
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await resp.json();
        return data;
    } catch (error) {
        console.log('here');
        notFound();
    }
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
                    pokemon.types.map((elem: PokemonTypes) => {
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



