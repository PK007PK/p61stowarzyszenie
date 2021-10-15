import React, { useState } from 'react';
import { GiLetterBomb } from '@react-icons/all-files/gi/GiLetterBomb';
import { ButtonStyle } from 'src/components/Button/Button';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { NewsletterStyle, CustomFormStyle, OpeningButton } from './NewsletterStyle';

const CustomForm = ({ status, message, onValidated }) => {
    let email;
    let name;
    const submit = () =>
        email &&
        name &&
        email.value.indexOf('@') > -1 &&
        onValidated({
            EMAIL: email.value,
            NAME: name.value,
        });

    return (
        <NewsletterStyle>
            <h3>Newsletter</h3>
            <p>Jeżeli chcesz być powiadamiany o ważnych wydarzeniach zapisz się do newslettera</p>
            {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
            {status === 'error' && <div style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: message }} />}
            {status === 'success' && <div style={{ color: 'green' }} dangerouslySetInnerHTML={{ __html: message }} />}
            <input ref={(node) => (name = node)} type="text" placeholder="Imię..." />
            <br />
            <input ref={(node) => (email = node)} type="email" placeholder="Email..." />
            <br />
            <ButtonStyle full type="button" onClick={submit}>
                Wyślij
            </ButtonStyle>
        </NewsletterStyle>
    );
};

const Newsletter = ({ className, style }) => {
    const [open, setOpen] = useState(false);
    const url = 'https://ekomonterzy.us5.list-manage.com/subscribe/post?u=5443f38031d07f8510839e39d&amp;id=9032a099ae';
    return (
        <div style={style} className={className}>
            {!open && (
                <OpeningButton secondary full className="openBtn" type="button" onClick={() => setOpen(!open)}>
                    <div className="innerWrapper">
                        <GiLetterBomb className="icon" />
                        Newsletter
                    </div>
                </OpeningButton>
            )}
            {open && (
                <CustomFormStyle>
                    <buttom className="closeBtn" type="button" onClick={() => setOpen(!open)}>
                        X
                    </buttom>

                    <MailchimpSubscribe
                        url={url}
                        render={({ subscribe, status, message }) => (
                            <CustomForm
                                status={status}
                                message={message}
                                onValidated={(formData) => subscribe(formData)}
                            />
                        )}
                    />
                </CustomFormStyle>
            )}
        </div>
    );
};

export default Newsletter;
