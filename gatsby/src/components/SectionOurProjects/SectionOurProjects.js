import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useContext } from 'react';
import { BootsContainer } from 'src/components/BootsElements/BootsElements';
import MainHeading from 'src/components/MainHeading/MainHeading';
import AppContext from 'src/AppProvider';
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
                <MainHeading title="Projekty stowarzyszenia:" />
                <div className="cardContainer">
                    {projectItems
                        .filter((item) => item.group.includes(group))
                        .map((item, i) => (
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
