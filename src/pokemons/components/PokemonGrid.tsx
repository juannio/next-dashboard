import { PokemonSimpleData } from "../interfaces/pokemons.interface";
import { PokemonCard } from "./PokemonCard";

interface Props {
    pokemons: PokemonSimpleData[];
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