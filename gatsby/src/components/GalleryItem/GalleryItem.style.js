import styled from 'styled-components';

export const GalleryItemStyle = styled.div`
    display: flex;

    .imageThumb {
        background-size: ${({ testimonials }) => (testimonials ? 'contain' : 'cover')};

        ${({ theme }) => theme.media.smAbove} {
            height: ${({ testimonials }) => (testimonials ? '120vh' : '350px')};
            width: ${({ testimonials }) => (testimonials ? '40vw' : null)};
            margin: 0 auto;
        }
    }
`;
