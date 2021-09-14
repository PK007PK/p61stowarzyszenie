import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`

  p, li {
    letter-spacing: 0.5px;
    font-weight: 300;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: 400;
    margin: 0;
  }

  h1 {
    font-size: 40px;
  }

  a {
    color: var(--black);
    text-decoration-color: var(--red);
    text-decoration-skip-ink: none;
  }

  ul {
    padding: 0;
  }
`;

export default Typography;
