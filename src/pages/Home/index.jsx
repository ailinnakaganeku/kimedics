import React from 'react';
import LogoImage from '/assets/images/h-logo.svg';
import { Container, Logo } from './styles';


const Home = () => {
    return (
        <Container>
            <Logo src={LogoImage} alt="Home Image" />
        </Container>
    );
};

export default Home;
