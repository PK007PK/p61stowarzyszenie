import React from 'react';
import { ButtonStyle } from '../Button/Button';
import { FormCustomizableStyle } from './FormCustomizable.style';

export default function FormCustomizable({ formName }) {
    const formStructure = [
        { name: 'first-name', title: 'Imię', type: 'text' },
        { name: 'phone', title: 'Telefon', type: 'text' },
        { name: 'email', title: 'Nr telefonu', type: 'text' },
        { name: 'city', title: 'Miejscowość', type: 'text' },
        { name: 'area', title: 'Gmina', type: 'text' },
        { name: 'description', title: 'Opis sytuacji', type: 'textarea' },
    ];

    return (
        <FormCustomizableStyle
            name={formName}
            method="post"
            data-netlify="true"
            onSubmit="submit"
            data-netlify-honeypot="bot-field"
        >
            <input type="hidden" name="form-name" value={formName} />

            <div hidden>
                <input name="bot-field" />
            </div>

            <label htmlFor="first-name">
                Imię:
                <br /> <input type="text" name="first-name" />
            </label>

            <label htmlFor="phone">
                Telefon:
                <br /> <input type="text" name="phone" />
            </label>

            <label htmlFor="email">
                Email:
                <br /> <input type="email" name="email" />
            </label>

            <label htmlFor="message">
                Wiadomość:
                <br /> <textarea type="email" name="message" />
            </label>

            <ButtonStyle full type="submit">
                Wyślij
            </ButtonStyle>
        </FormCustomizableStyle>
    );
}
