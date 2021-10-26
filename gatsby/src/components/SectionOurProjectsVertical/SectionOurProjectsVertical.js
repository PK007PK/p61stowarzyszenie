import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import CardProduct from '../CardProduct/CardProduct';
import { SectionOurProjectsVerticalStyles } from './SectionOurProjectsVertical.styles';

export const SectionOurProjectsVertical = () => {
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

    return (
        <SectionOurProjectsVerticalStyles>
            <h2 className="title">Nasze projekty</h2>
            {projectItems.map((item, i) => (
                <Link key={i} to={item.pageSlug ? `/${item.pageSlug}` : '/'}>
                    <CardProduct small className="item" data={item} />
                </Link>
            ))}
        </SectionOurProjectsVerticalStyles>
    );
};

export default SectionOurProjectsVertical;
