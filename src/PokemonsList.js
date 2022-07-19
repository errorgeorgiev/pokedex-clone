import { VStack, Image, Box, Alert, AlertIcon, Wrap, Container, CircularProgress, Checkbox, Button, background } from '@chakra-ui/react';
import { usePokemons } from './hooks/usePokemons';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { CustomButton } from './CustomButton'


//currently limited to 54 pokemons
export default function PokemonsList() {
    //local storage array
    var selectedPokemons = [];

    const handleArray = (array,pokemon) => {
        
        var i;
        for (i = 0; i < array.length; i++) {
            if(array[i].id === pokemon.id) {
                array.splice(i,1);
                console.log(selectedPokemons);
                return;
            }
        }
        array.push(pokemon);
        console.log(selectedPokemons);
    }
    //console.log(selectedPokemons)
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

    //console.log({loading, error, data});
    

    //console.log(selectedPokemons);

    return (
        <Container padding='0px' maxW='100%' >
            <Wrap bg='orange' spacing='10px' alignItems='center' display='flex'>
            
                <Box bg='tomato' w='100%' p={4} color='white'>Click on Pokemon to see it's abilities. Choose 4 Pokemons and battle them against random enemy:
                    <Link to={{
                        pathname: "/fight",
                        state: selectedPokemons,
                        }}>
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
                                    <Box bg='transparent' hover='transparent' onClick={() => handleArray(selectedPokemons,pokemon)}>
                                        <CustomButton/>
                                    </Box>
                                </VStack>
                            </Box>
                        );
                    })}
                </Wrap>
            </Wrap>
        </Container>
    );
}


