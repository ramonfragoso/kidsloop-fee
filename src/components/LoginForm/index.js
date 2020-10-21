import React from 'react';
import { Container, Box, Logo, Title, LinkWrapper, Link } from './style';
import Header from './Header';
import Form from './Form';

function LoginForm() {
    return (
        <Container>
            <Box>
                <Logo/>
                <Title>Sign In</Title>
                <Form/>
                <LinkWrapper>
                    <Link>Create an account</Link>
                </LinkWrapper>
            </Box>
            <Header/>
        </Container>
    )
}

export default LoginForm;