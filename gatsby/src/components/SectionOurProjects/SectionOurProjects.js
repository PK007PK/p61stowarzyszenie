import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useContext } from 'react';
import { BootsContainer } from 'src/components/BootsElements/BootsElements';
import SelectGroup from 'src/components/SelectGroup/SelectGroup';
import AppContext from 'src/AppProvider';
import Slider from 'react-slick';
import ARROW_left from 'src/assets/images/arrLeft.svg';
import ARROW_right from 'src/assets/images/arrRight.svg';
import styled from 'styled-components';
import CardSimple from '../CardSimple/CardSimple';
import { SectionOurProjectsStyles } from './SectionOurProjects.styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StyledArrowLeft = styled.div`
    position: absolute;
    z-index: 1;
    left: -25px;
    top: 0;
    cursor: pointer;

    .arrowIco {
        width: 40px;
        height: 400px;
    }
`;

const StyledArrowRight = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    right: -25px;
    cursor: pointer;

    .arrowIco {
        width: 40px;
        height: 400px;
    }
`;

function LeftNavButton(props) {
    const { className, style, onClick } = props;
    return (
        <StyledArrowLeft className="slick-arrow1" style={{ ...style, display: 'block' }} onClick={onClick}>
            <img className="arrowIco" src={ARROW_left} alt="arrow_left" />
        </StyledArrowLeft>
    );
}

function RightNavButton(props) {
    const { className, style, onClick } = props;
    return (
        <StyledArrowRight className="slick-arrow" style={{ ...style, display: 'block' }} onClick={onClick}>
            <img className="arrowIco" src={ARROW_right} alt="arrow_right" />
        </StyledArrowRight>
    );
}

export const SectionOurProjects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <RightNavButton />,
        prevArrow: <LeftNavButton />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const data = useStaticQuery(graphql`
        {
            allSanityAllProjectsData {
                nodes {
                    projectItems {
                        projectName
                        projectSubtitle
                        projectImage {
                            asset {
                                gatsbyImageData(width: 400)
                            }
                        }
                        backgroundColor
                        color
                        pageSlug
                        group
                        tags {
                            name
                        }
                    }
                }
            }
        }
    `);

    const { projectItems } = data.allSanityAllProjectsData.nodes[0];
    const { group } = useContext(AppContext);
    return (
        <SectionOurProjectsStyles>
            <BootsContainer>
                <SelectGroup style={{ marginBottom: '20px' }} title="Projekty stowarzyszenia:" />

                <Slider {...settings}>
                    {projectItems
                        .filter((item) => item.group.includes(group))
                        .map((item, i) => (
                            <Link key={i} to={`/${item.pageSlug}`}>
                                <CardSimple data={item} />
                            </Link>
                        ))}
                </Slider>
            </BootsContainer>
        </SectionOurProjectsStyles>
    );
};

export default SectionOurProjects;
