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
    }

    .check {
        width: 20px;
        color: red;
        float: left;
        margin-top: 8px;
    }

    .text {
        font-size: var(--fontSizeSmall);
        text-align: left;
    }
`;
