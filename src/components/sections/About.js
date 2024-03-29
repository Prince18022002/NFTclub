import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Carousel from '../Carousel'
import Button from '../Buttons'
import {dark} from '../../styles/Themes';
const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};

display: flex;
justify-content: center;
align-items: center;
position: relative;
`
const Container = styled.div`
width: 75%;
margin: 0 auto;
/* background-color: lightblue;  */

display: flex;
justify-content: center;
align-items: center;
`
const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Title =styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;

color: ${props => props.theme.body};
align-self: flex-start;
width: 80%;
margin: 0 auto;
`
const Subtext =styled.h1`
font-size: ${props => props.theme.fontlg};

color: ${props => props.theme.body};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight:400;
`
const SubTextLight =styled.h1`
font-size: ${props => props.theme.fontmd};

color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight:200;
cursor: pointer;
`
const ButtonContainer= styled.div`
width: 80%;
margin: 1rem auto;
cursor: pointer;
align-self: flex-start;
 
`
const About = () => {
  return (
    <Section>
      <Container>
        <Box><Carousel/></Box>
        <Box>
          <Title>
          Welcome to NYR0 NFT Club.
          </Title>
          <Subtext>
          The NYRO CLUB is a private collection of NFTs—unique digital collectibles. The Weirdos are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
          </Subtext>
          <SubTextLight>
          With more than 200+ hand drawn traits, each NFT is unique and comes with a membership to an exclusive group of successful investors. Join an ambitious ever-growing community with multiple benefits and utilities.
          </SubTextLight>
          <ButtonContainer>
          <ThemeProvider theme={dark}>
            
          <Button text="Join Our Discord" link="https://discord.gg/jtHtgQn6"/>
          </ThemeProvider>
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  )
}

export default About
