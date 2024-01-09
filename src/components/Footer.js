import React from 'react'
import styled from 'styled-components';
import Banner from './Banner';
import Logo from './Logo'
import Facebook from '../Icons/Facebook';
import Instagram from '../Icons/Instagram';
import LinkedIn from '../Icons/LinkedIn';
import Twitter from '../Icons/Twitter';

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.body};
  position: relative;
  color: ${(props) => props.theme.text};
  
  display: flex;
 
  flex-direction: column;
`
const Container = styled.div`
width: 98%;
position: relative;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;

border-bottom: 1px solid ${props => props.theme.text};

`
const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const IconList = styled.div`
display: flex;
align-items: center;
margin: 0 auto;

&>*{
  padding-right: 0.5rem;
  transform: all 0.2s ease;

  &:hover{
    transform: scale(1.2);
  }
}
`
const MenuItems = styled.ul`
list-style:none;
width: 70%;
align-items: center;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-columns: repeat(3, 1fr);
grid-gap: 1rem;
`
const Item = styled.li`
width: fit-content;
cursor: pointer;

&::after {
  content: ' ';
  display: block;
  width: 0%;
  height: 2px;
  background: ${(props) => props.theme.text};
  transition: width 0.3s ease;
}

&:hover::after {
  width: 100%;
}
`
const Bottom = styled.div`
width: 97%;
margin: 0 auto;
display: flex;
position: relative;
justify-content: space-between;
align-items: center;

`
const Footer = () => {
  return (
    <Section>
      <Banner/>
      <Container>
      <Left>
        <Logo />
        <IconList>
          <a href="http://facebook.com" target='blank'
          >
          <Facebook/>
          </a>
          <a href="http://instagram.com" target='blank'
          >
          <Instagram/>
          </a>
          <a href="http://twitter.com" target='blank'
          >
          <Twitter/>
          </a>
          <a href="http://Linkedin.com" target='blank'
         rel="noopener noreferrer"
         >
          <LinkedIn/>
          </a>
        

        </IconList>
      </Left>
      <MenuItems>
      <Item>Home</Item>
      <Item>About</Item>
      <Item>Roadmap</Item>

      <Item>Showcase</Item>
      <Item>Team</Item>
      <Item>Faq</Item>
      </MenuItems>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Nfts Club. All rights reserved.
        </span>
        <span>
          Made with &#10084; by Prince<a href="https://www.linkedin.com/in/prince-gupta-a5a778229/" target="blank" rel="noopener noreferrer">
          
          </a>
          
        </span>
      </Bottom>
    </Section>
  )
}

export default Footer
