import React from 'react'
import styled from 'styled-components'

const Btn=styled.button`
display: inline-block;
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
outline: none;
border: none;
cursor: pointer;


font-size: ${props => props.theme.fontsm};
padding: 0.5rem 1.3rem ;
cursor: pointer;
transition: all 0.2s ease;
position: relative;
border-radius: 20px;

&:hover{
  transform: scale(0.9);
}
&::after{
  content:' ';
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate(-50%, -50%) scale(0);
  
  width: 100%;
  height: 100%;
  transition: all 0.2s ease;
}
&:hover::after{
  transform: translate(-50%, -50%) scale(1);
  padding: 0.3rem;
}
`
const Buttons = ({text, link}) => {
  return (
    <Btn>
    <a href= {link} aria-label={text} target="_blank" rel="noreferrer">
        {text}
    </a>
    </Btn>
  )
}

export default Buttons
