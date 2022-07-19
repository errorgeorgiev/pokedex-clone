import { gql, useQuery } from "@apollo/client"

//query all pokemons with default information
const GET_POKEMONS = gql`
    query allPokemons($limit: Int!) {
        allPokemon(limit: $limit) {
            id
            name
            sprites {
                front_default
            }
            base_stats {
                hp
                attack
                defense
                special_attack
                special_defense
                speed
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