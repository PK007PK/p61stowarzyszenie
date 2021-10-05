import React, { useContext } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import AppContext from 'src/AppProvider';

import { BootsContainer } from 'src/components/BootsElements/BootsElements';
import { Sling as Hamburger } from 'hamburger-react';
import MenuDropDown from 'src/components/MenuDropDown/MenuDropDown';

import Logo2 from 'src/components/Logo2/Logo2';
import Search from 'src/components/search';

const searchIndices = [{ name: `Pages`, title: `Pages` }];

const NavStyle = styled.nav`
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    .innerWrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .logoWrapper {
        display: flex;
        align-items: center;
    }

    .menuList {
        display: none;
        ${({ theme }) => theme.media.mdAbove} {
            align-items: center;
            display: flex;
            margin-left: auto;
        }
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
                <div className="innerWrapper">
                    <Link style={{ textDecoration: 'none' }} className="logoWrapper" to="/">
                        <Logo2 />
                    </Link>

                    <ul className="menuList">
                        <li>
                            <Link to="/test">Home</Link>
                        </li>
                        <li>
                            <Link to="/test">O nas</Link>
                        </li>
                        <li>
                            <Link to="/test">Terminarz</Link>
                        </li>
                        <Search indices={searchIndices} />
                    </ul>
                    {/* <Hamburger toggled={isMenuActive} toggle={toogleIsMenuActive} /> */}
                    {isMenuActive && <MenuDropDown />}
                </div>
            </BootsContainer>
        </NavStyle>
    );
}
