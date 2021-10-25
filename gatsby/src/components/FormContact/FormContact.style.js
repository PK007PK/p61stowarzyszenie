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
        display: flex;
        align-items: flex-start;

        .check {
            display: block;
            margin-top: 20px;
            margin-right: 15px;
            width: 20px;
            height: 20px;
            flex-shrink: 0;
        }
    }
`;
