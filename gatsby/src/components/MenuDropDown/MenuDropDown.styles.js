import styled from 'styled-components';

export const MenuDropDownStyles = styled.div`
    position: fixed;
    display: none;
    z-index: 5;
    top: -100vh;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    height: 100vh;

    .container {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    li {
        margin-bottom: 40px;
        display: block;
    }

    .linkWrapper {
        position: relative;
    }

    a {
        opacity: 0;
    }

    .colorWrapper1 {
        background-color: red;
        height: 30vh;
    }
`;
