import React from 'react';
import { Container,Config, Info, Sun, Link, Select } from './style';
import {light} from '../../../theme';

function Footer({theme,setTheme}) {

    return (
        <Container>
            <Config>
                <Sun fill={theme==='light' ? "#043c7c" : "#C5E9FB" } onClick={() => theme==='light' ? setTheme("dark") : setTheme("light")}/>
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