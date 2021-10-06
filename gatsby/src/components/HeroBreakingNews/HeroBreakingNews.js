import React from 'react';
import { BootsContainer, BootsRow, BootsColumn } from 'src/components/BootsElements/BootsElements';
import { HeroBreakingNewsStyle } from './HeroBreakingNews.style';

const HeroBreakingNews = ({ text }) => (
    <HeroBreakingNewsStyle>
        <BootsContainer>
            <BootsRow>
                <BootsColumn>
                    <div className="card">{text}</div>
                </BootsColumn>
            </BootsRow>
        </BootsContainer>
    </HeroBreakingNewsStyle>
);

export default HeroBreakingNews;
