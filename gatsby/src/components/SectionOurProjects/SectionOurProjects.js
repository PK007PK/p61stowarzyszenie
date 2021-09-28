import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useContext } from 'react';
import { BootsContainer } from 'src/components/BootsElements/BootsElements';
import MainHeading from 'src/components/MainHeading/MainHeading';
import AppContext from 'src/AppProvider';
import Slider from 'react-slick';
import CardSimple from '../CardSimple/CardSimple';
import { SectionOurProjectsStyles } from './SectionOurProjects.styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const SectionOurProjects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
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
                        pageSlug
                        projectName
                        projectSubtitle
                        tags {
                            name
                        }
                        group
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
                <MainHeading style={{ marginBottom: '20px' }} title="Projekty stowarzyszenia:" />

                <Slider {...settings}>
                    {projectItems
                        .filter((item) => item.group.includes(group))
                        .map((item, i) => (
                            <Link key={i} to={item.pageSlug}>
                                <CardSimple title={item.projectName} subtitle={item.projectSubtitle} />
                            </Link>
                        ))}
                </Slider>
            </BootsContainer>
        </SectionOurProjectsStyles>
    );
};

// const SectionOurProjectsxc = () => {
//     const data = useStaticQuery(graphql`
//         {
//             allSanityAllProjectsData {
//                 nodes {
//                     projectItems {
//                         pageSlug
//                         projectName
//                         projectSubtitle
//                         tags {
//                             name
//                         }
//                         group
//                     }
//                 }
//             }
//         }
//     `);

//     const { projectItems } = data.allSanityAllProjectsData.nodes[0];
//     const { group } = useContext(AppContext);
//     const settings = {
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         initialSlide: 0,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                     infinite: true,
//                     dots: true,
//                 },
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                     initialSlide: 2,
//                 },
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//     };
//     return (
//         <SectionOurProjectsStyles>
//             <BootsContainer>
//                 <MainHeading title="Projekty stowarzyszenia:" />
//                 <div className="cardContainer">
//                     {/* <Slider {...settings}> */}
//                     {projectItems
//                         .filter((item) => item.group.includes(group))
//                         .map((item, i) => (
//                             <Link key={i} to={item.pageSlug}>
//                                 <CardSimple title={item.projectName} subtitle={item.projectSubtitle} />
//                             </Link>
//                         ))}
//                     {/* </Slider> */}
//                 </div>
//                 <SimpleSlider />
//             </BootsContainer>
//         </SectionOurProjectsStyles>
//     );
// };

export default SectionOurProjects;
