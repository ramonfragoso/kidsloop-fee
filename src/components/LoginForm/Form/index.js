import React from 'react';
import { Container, Input, Wrapper, ForgotPassword, Button } from './style';
function Form() {
    return (
        <Container>
                <Input placeholder="Email or phone *"/>
                <Input placeholder="Password *"/>
                <Wrapper>
                    <ForgotPassword>
                        Forgot Password?
                    </ForgotPassword>
                    <Button>Sign In</Button>
                </Wrapper>
        </Container>
    )
}

export default Form;