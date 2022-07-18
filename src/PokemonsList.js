import { VStack, Image, Box, Alert, AlertIcon, Wrap, Container, CircularProgress, Checkbox, Button } from '@chakra-ui/react';
import { usePokemons } from './hooks/usePokemons';
import { Link } from "react-router-dom";


//currently limited to 54 pokemons
export default function PokemonsList() {
    const { loading, error, data } = usePokemons();

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

    return (
        <Container padding='0px' maxW='100%' >
            <Wrap bg='orange' spacing='10px' alignItems='center' display='flex'>
            
                <Box bg='tomato' w='100%' p={4} color='white'>Click on Pokemon to see it's abilities. Choose 4 Pokemons and battle them against random enemy:
                    <Link to={`/fight`}>
                        <Button marginLeft='10px' colorScheme='yellow'>Fight!</Button>
                    </Link>
                </Box>

                <Wrap paddingLeft='10px'>
                    {data.allPokemon.map(pokemon => {
                        return (
                            <Box borderRadius='10px' key={pokemon.id} w='200px' h='200px' bg='pink' alignItems='center'>
                                <VStack marginTop='30px'>
                                    <Link to={`/${pokemon.id}`}>
                                        <Image src={pokemon.sprites.front_default} />
                                        <Box alignContent='center' textAlign='center'>{pokemon.name}</Box>
                                    </Link>
                                    <Checkbox borderRadius='10px' w='180px' paddingLeft='10px' bg='yellow.100'>Choose pokemon</Checkbox>
                                </VStack>
                            </Box>
                        );
                    })}
                </Wrap>
            </Wrap>
        </Container>
    );
}


