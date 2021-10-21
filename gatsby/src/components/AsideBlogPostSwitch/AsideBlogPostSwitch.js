import { Link } from 'gatsby';
import React from 'react';
import CardSimple from '../CardSimple/CardSimple';
import SocialShare from '../SocialShare/SocialShare';
import CardContactForm from '../CardContactForm/CardConstacForm';
import { AsideBlogPostSwitchStyle } from './AsideBlogPostSwitch.style';

const AsideBlogPostSwitch = ({ data, name, excerpt }) => (
    <AsideBlogPostSwitchStyle>
        {data.map((item, i) => {
            switch (item) {
                case 0:
                    return <CardContactForm className="item" />;
                case 1:
                    return <SocialShare key={i} className="item" title={name} excerpt={excerpt} messengerID={1234} />;
                case 2:
                    return (
                        <a key={i} target="blank" href="/EkoMonterzy-Czyste-Powietrze.pdf">
                            <CardSimple
                                key={i}
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
