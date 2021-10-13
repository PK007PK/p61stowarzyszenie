import React, { useState } from 'react';
import { FaMailchimp } from '@react-icons/all-files/fa/FaMailchimp';
import { ButtonStyle } from 'src/components/Button/Button';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { NewsletterStyle, CustomFormStyle } from './NewsletterStyle';

// const url = '//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn';
const url = 'https://ekomonterzy.us5.list-manage.com/subscribe/post?u=5443f38031d07f8510839e39d&amp;id=9032a099ae';

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
        <CustomFormStyle>
            {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
            {status === 'error' && <div style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: message }} />}
            {status === 'success' && <div style={{ color: 'green' }} dangerouslySetInnerHTML={{ __html: message }} />}
            <input ref={(node) => (name = node)} type="text" placeholder="Your name" />
            <br />
            <input ref={(node) => (email = node)} type="email" placeholder="Your email" />
            <br />
            <ButtonStyle full type="button" onClick={submit}>
                Submit
            </ButtonStyle>
        </CustomFormStyle>
    );
};

const Back = () => (
    <>
        <div className="topBar">
            <h3 className="heading1">Newsletter</h3>
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                    <div>
                        <CustomForm onSubmitted={(formData) => subscribe(formData)} />
                        {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
                        {status === 'error' && (
                            <div style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: message }} />
                        )}
                        {status === 'success' && <div style={{ color: 'green' }}>Subscribed !</div>}
                    </div>
                )}
            />
        </div>
    </>
);

const Newsletter = ({ style, className }) => {
    const [open, setOpen] = useState(false);
    return (
        <div style={style} className={className}>
            {!open && (
                <ButtonStyle
                    onClick={() => setOpen(!open)}
                    secondary
                    full
                    style={style}
                    className={`${className} newsletter`}
                    type="button"
                >
                    <div className="innerWrapper">
                        <FaMailchimp className="icon" /> Newsletter
                    </div>
                </ButtonStyle>
            )}
            {open && (
                <NewsletterStyle>
                    <buttom className="closeBtn" type="button" onClick={() => setOpen(!open)}>
                        X
                    </buttom>
                    <Back />
                </NewsletterStyle>
            )}
        </div>
    );
};
export default Newsletter;
