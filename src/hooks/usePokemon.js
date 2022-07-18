import { gql, useQuery} from "@apollo/client";

//get preselected pokemon
const GET_PREDIFINED_POKEMON = gql`
    query PredefinedPokemon($id: Int!) {
        pokemon(id: $id) {
            id
            name
            sprites {
                front_default
            }
            abilities {
                name
                effect
                description
            }
        }
    }
`;

export const usePokemon = (id) => {
    console.log({ danni: id })
    const integerId = parseInt(id)

    const { loading, error, data } = useQuery(GET_PREDIFINED_POKEMON, {
        variables: {
            id:integerId //should be Int
        }
    })

    return {
        loading,
        error,
        data
    };
};