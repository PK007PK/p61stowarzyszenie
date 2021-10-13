import React, { useEffect, useRef } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Logo2 from 'src/components/Logo2/Logo2';
import { CardBlogEntry2Style } from './CardBlogEntry2.style';

gsap.registerPlugin(ScrollTrigger);

const CardBlogEntry2 = React.forwardRef(({ data }) => {
    const { name, lead, date } = data;

    const gatsbyImageData = data?.image?.asset?.gatsbyImageData;

    let wrapper = useRef(null);
    useEffect(() => {
        gsap.set(wrapper, { autoAlpha: 0 });

        const cardAnimation = gsap.timeline({ defaults: { ease: 'power3.inOut' } }).fromTo(
            wrapper,
            { autoAlpha: 0 },
            {
                duration: 0.7,
                autoAlpha: 1,
            }
        );

        ScrollTrigger.create({
            trigger: wrapper,
            animation: cardAnimation,
            start: 'center bottom',
        });
    }, []);

    return (
        <CardBlogEntry2Style ref={(el) => (wrapper = el)}>
            <div className="imgWrapper">
                {gatsbyImageData ? (
                    <GatsbyImage
                        className="picture"
                        image={gatsbyImageData}
                        placeholder="blurred"
                        alt={name}
                        formats={['auto', 'webp']}
                        quality={50}
                    />
                ) : (
                    <Logo2 />
                )}
            </div>
            <div className="textWrapper">
                <h3 className="title">{name}</h3>
                <time className="time" dateTime={date}>
                    {date}
                </time>
            </div>
        </CardBlogEntry2Style>
    );
});

export default CardBlogEntry2;
