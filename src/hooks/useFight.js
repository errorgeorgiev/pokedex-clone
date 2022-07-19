import { gql, useQuery } from "@apollo/client";

//random pokemon and ID should be generated randomly between 1-54
const GET_RANDOM_POKEMON = gql`
    query RandomPokemon($id: Int!) {
        pokemon(id: $id) {
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
//accepts random generated id
export const useFight = (id) => {
    
    const { loading, error, data } = useQuery(GET_RANDOM_POKEMON, {
        variables: {
            id,
        }
    })
    
    return {
        loading,
        error,
        data
    };
}