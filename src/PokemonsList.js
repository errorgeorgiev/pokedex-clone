import { VStack, Image, Box, Alert, AlertIcon, Wrap, Container, CircularProgress, Checkbox, Button } from '@chakra-ui/react';
import { useNavigate} from "react-router-dom"; //maybe not needed
import { usePokemons } from './hooks/usePokemons';


//currently limited to 54 pokemons
export default function PokemonsList() {
    const { loading, error, data } = usePokemons();

    let navigate = useNavigate(); 
    const routeChange = (id) =>{ 
        let path = `/pokemon/${id}`;
        console.log(id) 
        navigate(path);
    }

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
        <Container padding='0px' maxW='100%' >
            <Wrap bg='orange' spacing='10px' alignItems='center' display='flex'>
            
                <Box bg='tomato' w='100%' p={4} color='white'>Choose 4 Pokemons and battle them against random enemy:
                    <Button marginLeft='10px' colorScheme='yellow'>Fight!</Button>    
                </Box>

                <Wrap paddingLeft='10px'>
                    {data.allPokemon.map(pokemon => {
                        return (
                            <Box onClick={() => routeChange(pokemon.id)} key={pokemon.id} w='200px' h='200px' bg='pink' alignItems='center' display='flex'>
                                <VStack>
                                    <Image src={pokemon.sprites.front_default} />
                                    <Box>{pokemon.name}</Box>
                                    <Checkbox paddingLeft='10px' bg='yellow.100'>Add pokemon to favourites</Checkbox>
                                </VStack>
                            </Box>
                        );
                    })}
                </Wrap>
            </Wrap>
        </Container>
    );
}


