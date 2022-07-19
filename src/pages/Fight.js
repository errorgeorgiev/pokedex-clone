import { Wrap, VStack, Image, Box, Container, CircularProgress, Alert, AlertIcon } from "@chakra-ui/react";
import { useFight } from "../hooks/useFight";
import { useLocation } from "react-router-dom";


export default function Fight() {

    //to get selectedPokemons from PokemonsList.js
    const {state} = useLocation();
    const selectedPokemons = state; 

    //generate random integer 1-54 to generate random Pokemon
    const randomId = Math.random() * (54 - 1) + 1;


    const { loading, error, data } = useFight(parseInt(randomId)); 

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

    //initialize randomly generated pokemon
    const randomEnemyPokemon = data;
    
    
    //-- main logic --

    //very simple sum algorithm
    const calculateScoreRandom = (randomEnemyPokemon) => {
        let sum = 0;
        sum = randomEnemyPokemon.pokemon.base_stats.hp + randomEnemyPokemon.pokemon.base_stats.attack + 
        randomEnemyPokemon.pokemon.base_stats.defense + randomEnemyPokemon.pokemon.base_stats.speed;

        return sum;
    }

    const calculateScorePredefined = (predefinedPokemon) => {
        const sum = predefinedPokemon.base_stats.hp + predefinedPokemon.base_stats.attack + 
        predefinedPokemon.base_stats.defense + predefinedPokemon.base_stats.speed;

        return sum;
    }

    const alg = (selectedPokemons, randomEnemyPokemon) => {
        var i;
        var max = 0;
        for(i=0; i<selectedPokemons.length; i++){
            let current = calculateScorePredefined(selectedPokemons[i]);
            if (current > max) {
                max = current;
            }
        }
        let selectedMax = max;
        let randomMax = calculateScoreRandom(randomEnemyPokemon);
        if(selectedMax >= randomMax) {
            return selectedMax;
        }
        return randomMax;
    }   

    const creteWinnerObject = (maxSum,selectedPokemons) => {
        var i;
        for(i=0; i < selectedPokemons.length; i++){
            if(calculateScorePredefined(selectedPokemons[i]) === maxSum) {
                return selectedPokemons[i];
            }
        }
    }

    const winner = creteWinnerObject(alg(selectedPokemons, randomEnemyPokemon), selectedPokemons);

    

    return (
        <Container paddingTop='100px' h='1000px' maxW='100%' maxH='100%' bg='orange' centerContent verticalAlign='middle'> 
            <Wrap alignContent='center' display='flex' verticalAlign='middle' borderWidth='1px' borderColor='black' borderRadius='40px'bg='tomato' w='500px'>
                <VStack paddingLeft='75px' alignSelf='center'>
                    <Box>{winner.name} from selected Pokemons is the best pick</Box>
                    <Image w='250px' h='250px' src={winner.sprites.front_default}/>
                    <Box> Against... </Box>
                    <Image w='250px' h='250px' src={randomEnemyPokemon.pokemon.sprites.front_default}/>
                    <Box>{randomEnemyPokemon.pokemon.name} who got randomly generated</Box>
                </VStack>
            </Wrap>
        </Container>
    )
}
