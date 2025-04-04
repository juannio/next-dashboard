export interface PokemonSimpleData {
    id: string;
    name: string;
}

export interface PokemonsServiceResponse {
    count: number;
    next: string;
    previous: null;
    results: Result[];
}

export interface Result {
    name: string;
    url: string;
}

export interface GetPokemonResponse {
    id: string;
    name: string;
    base_experience: string;
    types: PokemonTypes[];
}

export type PokemonTypes = {
    slot: string;
    type: {
        name: string;
    };
};