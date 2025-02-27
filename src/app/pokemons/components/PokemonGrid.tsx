import { PokemonCard, SimplePokemon } from "..";


interface Props {
    pokemons: SimplePokemon[];
}

export const PokemonGrid = async ({ pokemons }: Props) => {


    return (
        <div className="flex flex-wrap gap items-center justfy-center">
            {
                pokemons.map(pokemon => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))
            }
        </div>
    )
}
