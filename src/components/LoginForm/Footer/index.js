import React from 'react';
import { Container,Config, Info, Sun, Link, Select } from './style';
import theme from '../../../theme';

function Footer() {
    return (
        <Container>
            <Config>
                <Sun fill={theme.colors.navyBlue}/>
                <div>
                    <Select>
                        <option value="" disabled selected>Select language</option>
                        <option value="en">English</option>
                        <option value="pt">Português</option>
                        <option value="es">Español</option>
                        <option value="ch">Chinese</option>
                    </Select>
                </div>
            </Config>
            <Info>
                <Link>Help</Link>
                <Link>Privacy</Link>
                <Link>Terms</Link>
            </Info>
        </Container>
    )
}

export default Footer;