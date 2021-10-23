import styled from 'styled-components';

export const FormContactStyles = styled.form`
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

    .policy {
        margin-bottom: 20px;

        input {
            margin-top: 10px;
            margin-right: 15px;
            width: 60px;
            height: 60px;
        }
        display: flex;
        align-items: flex-start;
    }
`;
