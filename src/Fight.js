import { gql, useQuery } from "@apollo/client";
import { CircularProgress, Alert, AlertIcon } from "@chakra-ui/react";

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

export default function Fight() {

    //generate random integer 1-54
    const randomId = Math.random() * (54 - 1) + 1;

    const { loading, error, data } = new useQuery(GET_RANDOM_POKEMON, {
        variables: {
            id: randomId
        }
    })

    //TODO: center circularprogress
    if(loading) return (
        <CircularProgress size='100px' isIndeterminate color='green.300'/>
        ) 
    
    if(error) return (
        <Alert status='error'>
            <AlertIcon />
            There was an error processing your request!
        </Alert>
        )

    console.log({loading, error, data});

    return (
        <div>
            random text
        </div>
    )
}