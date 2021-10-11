import React from 'react';
import { BootsContainer } from 'src/components/BootsElements/BootsElements';
import { useStaticQuery, graphql } from 'gatsby';
import { FooterStyles } from './Footer.style';

export default function Footer() {
    return (
        <FooterStyles>
            <BootsContainer>
                <p className="copyright">&copy; Stowarzyszenie EkoMonterzy {new Date().getFullYear()}</p>
            </BootsContainer>
        </FooterStyles>
    );
}
