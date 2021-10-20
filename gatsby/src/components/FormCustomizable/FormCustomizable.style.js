import styled from 'styled-components';

export const FormCustomizableStyle = styled.form`
    input,
    textarea {
        width: 100%;
        padding: var(--paddingInput);
    }

    label {
        padding-top: 35px;
    }

    button {
        padding: var(--paddingButton);
        margin: var(--spacingRegular) 0 var(--spacingMedium) 0;
    }

    .wrapper {
        margin-top: 15px;
    }
`;
