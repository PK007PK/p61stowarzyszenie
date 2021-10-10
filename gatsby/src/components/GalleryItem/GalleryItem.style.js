import styled from 'styled-components';

export const GalleryItemStyle = styled.div`
    display: flex;

    .imageThumb {
        background-size: ${({ testimonials }) => (testimonials ? 'contain' : 'cover')};
        height: ${({ testimonials }) => (testimonials ? '120vh' : '277px')};
        width: ${({ testimonials }) => (testimonials ? '40vw' : null)};
        margin: 0 auto;
    }
`;
