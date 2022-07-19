import { Button } from "@chakra-ui/react";
import { useState } from "react";
import React from 'react';

export function CustomButton() {

    const [text, setText] = useState('Select Pokemon');
    const [color, setColor] = useState('red.400');

    const handleClick = () => {
        setText((text) => (text === "Selected" ? "Select Pokemon" : "Selected"));
        setColor((color) => (color === "green.400" ? "red.400" : "green.400"));
    }

  return (
    <Button onClick={() => {handleClick()}} textAlign='center' borderRadius='10px' w='180px' paddingLeft='10px' bg={color}>
        {text}
    </Button>
  )
}

export default CustomButton