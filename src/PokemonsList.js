import { VStack, Image, Box, Alert, AlertIcon, Wrap, Container, CircularProgress, Button } from '@chakra-ui/react';
import { usePokemons } from './hooks/usePokemons';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { CustomButton } from './CustomButton';


//currently limited to 54 pokemons, can change that in usePokemons.js
export default function PokemonsList(props) {
    
    //local storage array
    var selectedPokemons = [];

    //pass selectedPokemons to Fight.js
    const [array,setArray]=useState(selectedPokemons);
    const navigate = useNavigate();
    const confirm = () => {
        navigate("/fight", {state : selectedPokemons});
    }


    const handleArray = (array,pokemon) => {
        
        var i;
        for (i = 0; i < array.length; i++) {
            if(array[i].id === pokemon.id) {
                array.splice(i,1);
                return;
            }
        }
        array.push(pokemon);
    }
    
    const { loading, error, data } = usePokemons();

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

    return (
        <Container padding='0px' maxW='100%' >
            <Wrap bg='orange' spacing='10px' alignItems='center' display='flex'>
            
                <Box bg='tomato' w='100%' p={4} color='white'>Click on Pokemon to see it's abilities. Choose 4 Pokemons and battle them against random enemy:
                    <Button onClick={() => {confirm()}} marginLeft='10px' colorScheme='yellow'>Fight!</Button>
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


