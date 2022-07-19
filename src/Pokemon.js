import { CircularProgress, Box, Alert, AlertIcon, Container, Wrap, VStack, Image, List, ListItem } from "@chakra-ui/react";
import { usePokemon } from "./hooks/usePokemon";
import { useParams } from "react-router-dom";

export default function Pokemon() {
    const {id} = useParams(); 

    const { loading, error, data } = usePokemon(id);

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

    return(
        <Container paddingTop='100px' h='1000px' maxW='100%' maxH='100%' bg='orange' centerContent verticalAlign='middle'> 
            <Wrap verticalAlign='middle' borderWidth='1px' borderColor='black' borderRadius='40px'bg='tomato' w='500px'>
                <VStack>
                    <Image w='250px' h='250px' src={data.pokemon.sprites.front_default}/>
                    <Box><b>Abilities:</b></Box>
                    <List>
                        {data.pokemon.abilities.map(ability => {
                            return (
                                <Container key={ability.id} centerContent>
                                    <Box><b>{ability.name}:</b></Box>
                                    <ListItem alignItems='center' display='flex'>
                                        <Box alignContent='center' textAlign='center'> 
                                            {ability.effect}
                                            {ability.description}
                                        </Box>
                                    </ListItem>
                                </Container>
                            )
                        })}
                    </List>
                </VStack>
            </Wrap>
        </Container>
    )
}