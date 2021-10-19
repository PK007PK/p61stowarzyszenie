import { Link } from 'gatsby';
import React from 'react';
import CardSimple from '../CardSimple/CardSimple';
import SocialShare from '../SocialShare/SocialShare';

import { AsideBlogPostSwitchStyle } from './AsideBlogPostSwitch.style';

const AsideBlogPostSwitch = ({ data, name, excerpt }) => (
    <AsideBlogPostSwitchStyle>
        {data.map((item, i) => {
            switch (item) {
                case 0:
                    return (
                        <Link key={i} target="blank" as="a" to="https://forms.gle/4QUN4zjsnFQXMLt3A">
                            <CardSimple
                                className="item"
                                data={{
                                    projectName:
                                        'Potrzebujesz pomocy z uzyskaniem dotacji, realizacją inwestycji? Wypełnij formularz. Oddzwonimy',
                                    backgroundColor: 'orange',
                                }}
                            />
                        </Link>
                    );
                case 1:
                    return <SocialShare className="item" title={name} excerpt={excerpt} messengerID={1234} />;
                case 2:
                    return (
                        <a key={i} target="blank" href="/EkoMonterzy-Czyste-Powietrze.pdf">
                            <CardSimple
                                className="item"
                                data={{
                                    projectName: 'Program "Czyste Powietrze". Najważniejsze informacje. Pobierz PDF',
                                    backgroundColor: 'var(--colorActiveSecondary)',
                                }}
                            />
                        </a>
                    );
                default:
                    break;
            }
        })}
    </AsideBlogPostSwitchStyle>
);

export default AsideBlogPostSwitch;
