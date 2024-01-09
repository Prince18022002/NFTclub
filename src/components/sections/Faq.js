import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger
import Accordion from '../Accordion';

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.text};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: ${props => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${props => props.theme.body};
  margin: 1rem auto;
  border-bottom: 2px solid ${props => props.theme.carouselColor};
  width: fit-content;
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Box = styled.div`
  width: 45%;
`;

const Faq = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: 'top top',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
      scrub: true,
    });

    return () => {
      ScrollTrigger.kill();
};
  }, []);

  return (
    <Section ref={ref}>
      <Title>Faq</Title>
      <Container>
        <Box>
          <Accordion title="WHERE CAN I VIEW MY NFTS?">
          Once minted or bought simply connect to your OpenSea account to view your NFTs.
          </Accordion>
          <Accordion title="WHAT IS THE METAVERSE?">
          A metaverse is a network of 3D virtual worlds focused on social connection. In futurism and science fiction, it is often described as a hypothetical iteration of the Internet as a single, universal virtual world that is facilitated by the use of virtual and augmented reality headsets. 
          </Accordion>
          <Accordion title="WHY DO WE NEED ROYALTIES?">
          The amount of royalties was fixed at 5% to finance the Weirdos Club's projects. We have the ambition to organize multiple events around the world in order to strengthen the community and build a network of entrepreneurs and investors with the same mindset and common interests.
          </Accordion>
          
        </Box>
        <Box>
        <Accordion title="HOW CAN I USE MY NFT?">
        You will be able to use your NFT as an avatar in the Metaverse and our future video game. Holding also means that you are part of an exclusive network of investors and entrepreneurs.
          </Accordion>
          <Accordion title="WHAT ARE THE NFT WEBPAGE ?">
          NFT (Non-Fungible Token) webpage likely refers to a website or web page dedicated to the creation, trading, or showcasing of NFTs. NFTs are unique digital assets stored on blockchain technology, often associated with digital art, collectibles, and other digital content. A dedicated NFT webpage could provide a platform for users to mint, buy, sell, and explore various NFTs within the blockchain ecosystem.
          </Accordion>
          <Accordion title="WHAT IS THE FUSION PROCESS?">
          In the context of NFTs, the term "fusion" could refer to a process where multiple NFTs or digital assets are combined or merged in some way. This might be related to creating bundled or composite NFTs that include elements from different sources. However, without specific details or updates on industry terminology after my last knowledge update, I recommend checking the latest resources, documentation, or discussions related to NFTs for the most accurate and current information on any "fusion process" in the context of NFT webpages.
          </Accordion>
        </Box>
      </Container>
    </Section>
  );
};

export default Faq;
