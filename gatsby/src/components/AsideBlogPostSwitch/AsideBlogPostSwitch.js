import { Link } from 'gatsby';
import React from 'react';
import CardSimple from '../CardSimple/CardSimple';

import { AsideBlogPostSwitchStyle } from './AsideBlogPostSwitch.style';

const AsideBlogPostSwitch = ({ data }) => (
    <AsideBlogPostSwitchStyle>
        {data.map((item, i) => {
            switch (item) {
                case 0:
                    return (
                        <Link key={i} target="blank" as="a" to="https://forms.gle/4QUN4zjsnFQXMLt3A">
                            <CardSimple
                                data={{
                                    projectName: 'Potrzebujesz pomocy? Wypełnij formularz. Oddzwonimy',
                                    backgroundColor: 'orange',
                                }}
                            />
                        </Link>
                    );
                default:
                    break;
            }
        })}
    </AsideBlogPostSwitchStyle>
);

export default AsideBlogPostSwitch;
