import styled from 'styled-components';

export const FormMailchimpStyles = styled.div`
    .info {
        margin-bottom: var(--spacingRegular);
        color: white;
    }

    .form {
        input {
            padding: var(--paddingInput);
            width: 100%;
        }

        button {
            padding: var(--paddingButton);
            margin-top: var(--spacingRegular);
            background-color: var(--darkOrange);
            margin-left: auto;
            color: white;
            border: none;
        }
    }
`;
