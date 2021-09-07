import React, { useContext } from 'react';
import { Link } from 'gatsby';
import AppContext from 'src/AppProvider';
import styled from 'styled-components';
import { BootsContainer } from 'src/components/BootsElements/BootsElements';
import { Sling as Hamburger } from 'hamburger-react';
import MenuDropDown from 'src/components/MenuDropDown/MenuDropDown';
import { WiSunset } from '@react-icons/all-files/wi/WiSunset';
import Logo from 'src/components/Logo/Logo';

const NavStyle = styled.nav`
    ul {
        display: flex;
    }

    li {
        list-style: none;
        margin-right: 20px;
        z-index: 10;
    }
`;

export default function Navbar() {
    const { toogleIsMenuActive, isMenuActive } = useContext(AppContext);
    return (
        <NavStyle>
            <BootsContainer>
                <ul>
                    <Logo />
                    <li>
                        <Link to="/">Index</Link>
                    </li>
                    <li>
                        <Link to="/test">Test 1</Link>
                    </li>
                    <li>
                        <Link to="/blog/1">Blog</Link>{' '}
                    </li>
                    <li>
                        <Hamburger toggled={isMenuActive} toggle={toogleIsMenuActive} />
                    </li>
                </ul>
                {isMenuActive && <MenuDropDown />}
            </BootsContainer>
        </NavStyle>
    );
}
