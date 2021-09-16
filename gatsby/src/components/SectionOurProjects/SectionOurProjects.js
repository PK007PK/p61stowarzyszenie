import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { BootsContainer } from 'src/components/BootsElements/BootsElements';
import Heading from 'src/components/Heading/Heading';
import CardSimple from '../CardSimple/CardSimple';
import { SectionOurProjectsStyles } from './SectionOurProjects.styles';

const SectionOurProjects = () => {
    const data = useStaticQuery(graphql`
        {
            allSanityAllProjectsData {
                nodes {
                    projectItems {
                        pageSlug
                        projectName
                        projectSubtitle
                    }
                }
            }
        }
    `);

    const { projectItems } = data.allSanityAllProjectsData.nodes[0];

    return (
        <SectionOurProjectsStyles>
            <BootsContainer>
                <Heading title="Projekty" subtitle="Realizowane działania" />
                <div className="cardContainer">
                    {projectItems.map((item, i) => (
                        <Link key={i} to={item.pageSlug}>
                            <CardSimple title={item.projectName} subtitle={item.projectSubtitle} />
                        </Link>
                    ))}
                </div>
            </BootsContainer>
        </SectionOurProjectsStyles>
    );
};
export default SectionOurProjects;
