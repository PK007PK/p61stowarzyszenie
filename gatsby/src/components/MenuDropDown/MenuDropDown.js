import React, { useEffect, useRef, useContext } from 'react';
import { Link } from 'gatsby';
import { gsap } from 'gsap';
import AppContext from 'src/AppProvider';
import { menuShow, menuHide, staggerLinks, textIntro, hoverLink, hoverExit } from 'src/utils/animate';
import { BootsContainer } from 'src/components/BootsElements/BootsElements';
import { MenuDropDownStyles } from './MenuDropDown.styles';

const Menu = () => {
    const { toogleIsMenuActive, isMenuActive } = useContext(AppContext);

    // create refs for our DOM elements
    let menuWrapper = useRef(null);
    let link1 = useRef(null);
    let link2 = useRef(null);
    let link3 = useRef(null);

    useEffect(() => {
        gsap.to(menuWrapper, { duration: 0.3, css: { display: 'block', top: 0 } });
        gsap.to(link1, { duration: 0.2, delay: 0.3, css: { opacity: 1, bottom: 0 } });
        gsap.to(link2, { duration: 0.2, delay: 0.4, css: { opacity: 1, bottom: 0 } });
        gsap.to(link3, { duration: 0.2, delay: 0.5, css: { opacity: 1, bottom: 0 } });
    }, [isMenuActive]);

    return (
        <MenuDropDownStyles ref={(el) => (menuWrapper = el)}>
            <BootsContainer className="container">
                <nav>
                    <ul>
                        <li>
                            <div className="linkWrapper">
                                <Link
                                    ref={(el) => (link1 = el)}
                                    onMouseEnter={(e) => hoverLink(e)}
                                    onMouseOut={(e) => hoverExit(e)}
                                    onClick={() => toogleIsMenuActive(false)}
                                    to="/"
                                >
                                    Home
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="linkWrapper">
                                <Link
                                    ref={(el) => (link2 = el)}
                                    onMouseEnter={(e) => hoverLink(e)}
                                    onMouseOut={(e) => hoverExit(e)}
                                    onClick={() => toogleIsMenuActive(false)}
                                    to="/blog/1"
                                >
                                    Blog
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="linkWrapper">
                                <Link
                                    onMouseEnter={(e) => hoverLink(e)}
                                    onMouseOut={(e) => hoverExit(e)}
                                    to="/kontakt"
                                    onClick={() => toogleIsMenuActive(false)}
                                    ref={(el) => (link3 = el)}
                                >
                                    Kontakt
                                </Link>
                            </div>
                        </li>
                    </ul>
                </nav>
            </BootsContainer>
            <div className="colorWrapper1" />
            <div className="colorWrapper2" />
        </MenuDropDownStyles>
    );
};

export default Menu;
