import React, { useState } from 'react';
import { IoIosContact } from '@react-icons/all-files/io/IoIosContact';
import { ButtonStyle } from 'src/components/Button/Button';
import { CardContactFormStyle } from './CardContactForm.style';

const Form = () => (
    <form name="general form" method="post" data-netlify="true" onSubmit="submit" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="general form" />
        <div hidden>
            <input name="bot-field" />
        </div>

        <input type="text" name="first-name" placeholder="Imię..." />
        <input type="text" name="phone" placeholder="Telefon..." />
        <input type="email" name="email" placeholder="Email..." />
        <textarea type="email" name="message" placeholder="Wiadomość..." />

        <ButtonStyle style={{ backgroundColor: 'rgba(0, 96, 100, 1)' }} full type="submit">
            Wyślij
        </ButtonStyle>
    </form>
);

const CardContactForm = ({ className, style }) => {
    const [open, setOpen] = useState(false);
    return (
        <CardContactFormStyle style={style} className={className}>
            {!open && (
                <button className="openingButton" type="button" onClick={() => setOpen(!open)}>
                    <IoIosContact className="icon" />
                    <div className="innerWrapper">
                        <p>Potrzebujesz pomocy w realizacji inwestycji proekologicznej?</p>
                        <span>#porady #dotacje #oferty partnerów</span>
                        <p>Wypełnij formularz, pomożemy!</p>
                    </div>
                </button>
            )}
            {open && (
                <div className="openedCard">
                    <buttom className="closeBtn" type="button" onClick={() => setOpen(!open)}>
                        X
                    </buttom>
                    <h3 className="title">Formularz kontaktowy</h3>
                    <Form />
                </div>
            )}
        </CardContactFormStyle>
    );
};

export default CardContactForm;
