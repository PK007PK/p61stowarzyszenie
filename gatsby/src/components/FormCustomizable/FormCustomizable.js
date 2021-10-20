import React, { useState } from 'react';
import { GiLetterBomb } from '@react-icons/all-files/gi/GiLetterBomb';
import { ButtonStyle } from 'src/components/Button/Button';
import { FormCustomizableStyle } from './FormCustomizable.style';

const Form = ({ formName }) => (
    <form name={formName} method="post" data-netlify="true" onSubmit="submit" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value={formName} />
        <div hidden>
            <input name="bot-field" />
        </div>
        <div className="wrapper">
            <label htmlFor="first-name">
                Imię:
                <br /> <input type="text" name="first-name" />
            </label>
        </div>
        <div className="wrapper">
            <label htmlFor="phone">
                Telefon:
                <br /> <input type="text" name="phone" />
            </label>
        </div>
        <div className="wrapper">
            <label htmlFor="email">
                Email:
                <br /> <input type="email" name="email" />
            </label>
        </div>
        <div className="wrapper">
            <label htmlFor="message">
                Wiadomość:
                <br /> <textarea type="email" name="message" />
            </label>
        </div>
        <ButtonStyle full type="submit">
            Wyślij
        </ButtonStyle>
    </form>
);

const FormCustomizable = ({ className, style, formName, buttonDesc, backgroundColor, color }) => {
    const [open, setOpen] = useState(false);
    return (
        <FormCustomizableStyle style={style} className={className} backgroundColor={backgroundColor} color={color}>
            {!open && (
                <button className="openingButton" type="button" onClick={() => setOpen(!open)}>
                    <div className="innerWrapper">{buttonDesc}</div>
                </button>
            )}
            {open && (
                <div className="openedCard">
                    <buttom className="closeBtn" type="button" onClick={() => setOpen(!open)}>
                        X
                    </buttom>
                    <Form formName={formName} />
                </div>
            )}
        </FormCustomizableStyle>
    );
};

export default FormCustomizable;
