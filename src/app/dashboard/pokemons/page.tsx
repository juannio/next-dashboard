import { PokemonGrid, PokemonResponse, SimplePokemon } from "@/pokemons";


const getPokemons = async (): Promise<SimplePokemon[]> => {
    const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=300`)
        .then(res => res.json());

    const pokemons = data.results.map(pokemon => {
        return {
            id: pokemon.url.split('/').at(-2)!,
            name: pokemon.name
        }
    })

    return pokemons;
}


const PokemonsPage = async () => {

    /* const pokemons = pokemonss.map(pokemon => {
        return {
            id: pokemon.url.split('/').at(-2)!,
            name: pokemon.name
        }
    }) */
    const pokemons = await getPokemons();

    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Listado de pokemon <small>estatico</small>.</span>
            <PokemonGrid pokemons={pokemons} />
        </div>
    )
}

export default PokemonsPage;



