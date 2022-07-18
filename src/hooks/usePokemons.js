import { gql, useQuery } from "@apollo/client"

//all pokemons
const GET_POKEMONS = gql`
    query allPokemons($limit: Int!) {
        allPokemon(limit: $limit) {
            id
            name
            sprites {
                front_default
            }
        }
    }
`;

export const usePokemons = () => {
    const { loading, error, data } = useQuery(GET_POKEMONS, {
        variables: {
            limit:54
        }
    });

    return {
        loading,
        error,
        data
    };
};