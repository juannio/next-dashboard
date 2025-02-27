import { PokemonGrid, PokemonResponse, SimplePokemon } from "@/app/pokemons";


const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
        .then(res => res.json());

    const pokemons = data.results.map(pokemon => {
        return {
            id: pokemon.url.split('/').at(-2)!,
            name: pokemon.name
        }
    })

    throw new Error('Pokempn not found!')

    return pokemons;
}

const PokemonsPage = async () => {

    const pokemons = await getPokemons(100);

    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Listado de pokemon <small>estatico</small>.</span>
            <PokemonGrid pokemons={pokemons} />
        </div>
    )
}

export default PokemonsPage;
