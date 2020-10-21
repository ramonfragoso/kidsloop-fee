import React from 'react';
import { Container, Input, Wrapper, ForgotPassword, Button } from './style';
function Form() {

    const submit = () => {
        alert("Logged In!");
    }

    return (
        <Container onSubmit={submit}>
                <Input placeholder="Email or phone *" type="email" required/>
                <Input placeholder="Password *" type="password" required/>
                <Wrapper>
                    <ForgotPassword>
                        Forgot Password?
                    </ForgotPassword>
                    <Button type="submit">Sign In</Button>
                </Wrapper>
        </Container>
    )
}

export default Form;