import React, { useState } from 'react';
import { BootsContainer } from 'src/components/BootsElements/BootsElements';

import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { SectionStatisticsStyle } from './SectionStatistics.style';
import Statistics from './Statistics';
import GalleryCarousel from '../GalleryCarousel/GalleryCarousel';

const SectionStatistics = () => {
    const data = useStaticQuery(graphql`
        {
            sanityPageDataHome {
                statisticsBackground {
                    asset {
                        gatsbyImageData
                    }
                }
            }
        }
    `);

    const {
        sanityPageDataHome: {
            statisticsBackground: {
                asset: { gatsbyImageData },
            },
        },
    } = data;

    const [selected, setSelected] = useState('stats');

    return (
        <SectionStatisticsStyle>
            <GatsbyImage
                className="backgroundImage"
                image={gatsbyImageData}
                placeholder="blurred"
                alt=""
                formats={['auto', 'webp']}
                quality={50}
            />
            <BootsContainer>
                <div className="titleBar">
                    <h2 className="title">Stowarzyszenie</h2>
                    <button onClick={() => setSelected('stats')} className="btn" type="button">
                        Statystyki
                    </button>
                    <button onClick={() => setSelected('gallery')} className="btn" type="button">
                        Galeria
                    </button>
                    <button onClick={() => setSelected('testimonial')} className="btn" type="button">
                        Referencje
                    </button>
                </div>
            </BootsContainer>
            {selected === 'stats' && <Statistics />}
            {selected === 'testimonial' && <GalleryCarousel testimonials />}
            {selected === 'gallery' && <GalleryCarousel gallery />}
        </SectionStatisticsStyle>
    );
};

export default SectionStatistics;
