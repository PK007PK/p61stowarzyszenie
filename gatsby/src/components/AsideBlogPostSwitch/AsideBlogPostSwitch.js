import { Link } from 'gatsby';
import React from 'react';
import CardSimple from '../CardSimple/CardSimple';
import SocialShare from '../SocialShare/SocialShare';

import { AsideBlogPostSwitchStyle } from './AsideBlogPostSwitch.style';

const AsideBlogPostSwitch = ({ data, name, lead }) => (
    <AsideBlogPostSwitchStyle>
        {data.map((item, i) => {
            switch (item) {
                case 0:
                    return (
                        <Link key={i} className="item" target="blank" as="a" to="https://forms.gle/4QUN4zjsnFQXMLt3A">
                            <CardSimple
                                data={{
                                    projectName: 'Potrzebujesz pomocy? Wypełnij formularz. Oddzwonimy',
                                    backgroundColor: 'orange',
                                }}
                            />
                        </Link>
                    );
                case 1:
                    return <SocialShare className="item" title={name} excerpt={lead} messengerID={1234} />;
                default:
                    break;
            }
        })}
    </AsideBlogPostSwitchStyle>
);

export default AsideBlogPostSwitch;
