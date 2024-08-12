// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Home() {
  return (
    <HeroSection>
      <Content>
        <Title>Welcome to PokéSearch!</Title>
        <Subtitle>Find your favorite Pokémon cards quickly and easily</Subtitle>
        <StyledLink to="/search">Start Searching</StyledLink>
      </Content>
    </HeroSection>
  );
}

const HeroSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('/path-to-your-background-image.jpg');
  background-size: cover;
  background-position: center;
  color: white;
`;

const Content = styled.div`
  text-align: center;
  background: rgba(0, 0, 0, 0.6);
  padding: 2rem;
  border-radius: 1rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  background-color: #ffcb05;
  color: #3b4cca;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3b4cca;
    color: #ffcb05;
  }
`;

export default Home;
