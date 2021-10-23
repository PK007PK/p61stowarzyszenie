import React, { useState } from 'react';
import { IoIosContact } from '@react-icons/all-files/io/IoIosContact';
import { ButtonStyle } from 'src/components/Button/Button';
import { Link } from 'gatsby';
import { CardContactFormStyle } from './CardContactForm.style';

const Form = () => {
    console.log('Form');
    return (
        // <form
        //     name="general-contact-form"
        //     method="post"
        //     data-netlify="true"
        //     onSubmit="submit"
        //     data-netlify-honeypot="bot-field"
        // >
        //     <input type="hidden" name="form-name" value="general-contact-form" />
        //     <div hidden>
        //         <input name="bot-field" />
        //     </div>

        //     <input type="text" name="first-name" placeholder="Imię..." />
        //     <input type="text" name="phone" placeholder="Telefon..." />
        //     <input type="email" name="email" placeholder="Email..." />
        //     <textarea type="email" name="message" placeholder="Wiadomość..." />

        //     <ButtonStyle style={{ backgroundColor: 'rgba(0, 96, 100, 1)' }} full type="submit">
        //         Wyślij
        //     </ButtonStyle>
        // </form>
        <form name="contact v2" method="post" data-netlify="true" onSubmit="submit" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact v1" />

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
            <div className="policy">
                <input type="checkbox" id="policy" name="policy" required />
                <p>
                    Wyrażam zgodę na przetwarzanie Stowarzyszenie moich danych osobowych w celu odpowiedzi na zadane
                    pytanie zgodnie z zasadami ochrony danych osobowych wyrażonymi w{' '}
                    <Link className="decorated" to="/polityka/">
                        <strong>Polityce Prywatności.</strong>
                    </Link>
                </p>
            </div>
            <ButtonStyle full type="submit">
                Wyślij
            </ButtonStyle>
        </form>
    );
};

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
