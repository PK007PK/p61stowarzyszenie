import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from 'src/AppProvider';

const StyledButton = styled.button`
    color: var(--red);
    ${({ theme }) => theme.media.lgAbove} {
        color: red;
    }
`;

const Button = (props) => {
    const { toogleIsActive, isActive } = useContext(AppContext);

    return (
        <StyledButton {...props} className="zx" onClick={toogleIsActive}>
            {isActive ? 'Active' : 'Inactive'}
        </StyledButton>
    );
};

export default Button;
