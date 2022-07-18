import { gql, useQuery } from "@apollo/client";
import { CircularProgress, Alert, AlertIcon, Container, Wrap, VStack, Image, List, ListItem } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

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

export default function Pokemon() {

    const {id} = useParams(); //should be dynamic return undefined
    //console.log( {answer : postId} )

    const { loading, error, data } = useQuery(GET_PREDIFINED_POKEMON, {
        variables: {
            id: id //should be Int, not Number
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
    console.log(error)

    //console.log({loading, error, data});
    
    //console.log({ data: data.pokemon.sprites.front_default})
    //add pokemon is unclicklable, onClick cshouldnt be in box
    return(
        <Container>
            <Wrap>
                <VStack>
                    <Image src={data.pokemon.sprites.front_default}/>
                    <List>
                        {data.pokemon.abilities.map(ability => {
                            console.log(ability)
                            return (
                                //create card component that holds abilities + picture + maybe pokemon name
                                <ListItem key={ability.id} alignItems='center' display='flex'>
                                    {ability.name}
                                    {ability.effect}
                                    {ability.description}
                                </ListItem>
                            )
                        })}
                    </List>
                </VStack>
            </Wrap>
        </Container>
    )
}