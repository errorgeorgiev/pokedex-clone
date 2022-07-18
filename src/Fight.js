import { Container, CircularProgress, Alert, AlertIcon } from "@chakra-ui/react";
import { useFight } from "./hooks/useFight";


export default function Fight({ savedPokemons }) {

    //generate random integer 1-54
    const randomId = Math.random() * (54 - 1) + 1;
    //console.log(parseInt(randomId))

    const { loading, error, data } = useFight(parseInt(randomId)); //should be dynamic

    //TODO: center circularprogress
    if(loading) return (
        <Container textAlign='center' verticalAlign='middle'>
            <CircularProgress size='100px' isIndeterminate color='green.300'/> 
        </Container>
        )
    
    if(error) return (
        <Alert status='error'>
            <AlertIcon />
            There was an error processing your request!
        </Alert>
        )

    console.log({loading, error, data});


    //logic
    function determineBestPokemon(data) {
        let sum = data.pokemon.base_stats.hp + data.pokemon.base_stats.attack + data.pokemon.base_stats.defense + data.pokemon.base_stats.speed;
        
    }




    return (
        <div>
            Pokemon vs other pokemon based on algorithm
        </div>
    )
}