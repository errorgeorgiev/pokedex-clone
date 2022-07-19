import { Container, CircularProgress, Alert, AlertIcon } from "@chakra-ui/react";
import { useFight } from "./hooks/useFight";
import { useLocation } from "react-router-dom";


export default function Fight() {

    //generate random integer 1-54
    const randomId = Math.random() * (54 - 1) + 1;
    //console.log(parseInt(randomId))

    const { loading, error, data } = useFight(parseInt(randomId)); //should be dynamic
    const location = useLocation();

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

    //get selected pokemons
    //console.log(this.props)
    const randomEnemyPokemon = data;
    
    const catchArray= location.state;
    console.log({random: randomEnemyPokemon});
    console.log({selected: catchArray });



    

    return (
        <div>
            Pokemon vs other pokemon based on algorithm
        </div>
    )
}