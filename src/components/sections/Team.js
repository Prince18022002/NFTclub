import React from 'react'
import styled from 'styled-components';
import img1 from '../../assets/Nfts/bighead.svg';
import img2 from '../../assets/Nfts/bighead-1.svg';
import img3 from '../../assets/Nfts/bighead-2.svg';
import img4 from '../../assets/Nfts/bighead-3.svg';
import img5 from '../../assets/Nfts/bighead-4.svg';
import img6 from '../../assets/Nfts/bighead-5.svg';
import img7 from '../../assets/Nfts/bighead-6.svg';
import img8 from '../../assets/Nfts/bighead-7.svg';
import img9 from '../../assets/Nfts/bighead-8.svg';
import ConfettiComponent from '../Confetti';


const Section= styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative
`
const Title = styled.h1`
  font-size: ${props => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${props => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${props => props.theme.text};
  width: fit-content;
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
`
const Item = styled.div`
width: calc(20rem -4vm);
padding: 1rem 0;
color: ${props => props.theme.body};
margin: 2rem 1rem;
position: relative;
z-index:5;

backdrop-filter: blur(4px);

border: 2px solid ${props => props.theme.text};
border-radius: 20px;



&:hover{
  img{
    transform: translateY(-2rem) scale(1.2);
  }
}

`
const ImgContainer = styled.div`
width: 15rem;
margin: 0 1rem;
background-color:${props => props.theme.carouselColor};
padding: 1rem;

border-radius: 20px;
cursor: pointer;

img{
  width: 100%;
  height: auto;
  transition: all 0.3s ease;

}
`

const Name = styled.h2`
font-size: ${props => props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props => props.theme.text};
margin-top: 1rem;

`
const Position = styled.h2`
font-size: ${props => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba},0.9)`};
font-weight:400;

`

const MemberComponent = ({img, name=" ", position=" "}) => {

  return(
    <Item>
      <ImgContainer>
        <img src={img} alt={name} />
      </ImgContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  )
}
const Team = () => {
  return (
    <Section>
      <ConfettiComponent/>
      <Title>Team</Title>
      <Container>
      <MemberComponent img={img1} name="Prince" position="founder" />
      <MemberComponent img={img2} name="Prince" position="Co-founder" />
      <MemberComponent img={img3} name="Prince" position="Director" />
      <MemberComponent img={img4} name="Prince" position="Manager" />
      <MemberComponent img={img5} name="Prince" position="Artist" />
      <MemberComponent img={img6} name="Prince" position="Social Media Manager" />
      <MemberComponent img={img7} name="Prince" position="Blockchain Specialist" />
      <MemberComponent img={img8} name="Prince" position="Web3 Developer" />
      <MemberComponent img={img9} name="Prince" position="Graphic Designer" />
      </Container>
    </Section>
  )
}

export default Team
