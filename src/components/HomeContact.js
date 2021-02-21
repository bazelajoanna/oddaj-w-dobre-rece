import React, {useState} from 'react';
import '../scss/homeContact.scss';
import decoration from '../assets/Decoration.svg';

const HomeContact = () => {

    const API = 'https://fer-api.coderslab.pl/v1/portfolio/contact';

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [errors, setErrors] = useState({nameError: false, emailError: false, messageError: false});

    const handleNameChange = (e) => {
        setName(e.target.value);
        isNameValid(name);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        isEmailValid(email);
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
        isMessageValid(message);
    }

    const isNameValid = (name) => {
        if(name.length !== 0 && (/\s/.test(name)) === false) {
            setErrors({nameError: false})
        } else {
            setErrors({nameError: true})
        }
    }

    const isEmailValid = (email) => {
        const re = /\S+@\S+\.\S+/;
        if(email.length !== 0 && re.test(email) === true) {
            setErrors({emailError: false})
        } else {
            setErrors({emailError: true})
        }
    }

    const isMessageValid = (message) => {
        if (message.length >= 120) {
            setErrors({messageError: false})
        } else {
            setErrors({messageError: true})
        }
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const formData = {
            'name': name,
            'email': email,
            'message': message
        };

        fetch(`${API}`, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log(error));
    }

    return (
        <div className='home-contact__content' id='contact'>
            <div className='home-contact__background'></div>
            <div className='home-contact__form-socialmedia'>
                <div className='home-contact__form-content'>
                    <h1 className='home-contact__header'>Skontaktuj się z nami</h1>
                    <img src={decoration} alt='decoration' className='home-contact__decoration'/>
                    <form className='home-contact__form' onSubmit={e => handleSubmitForm(e)}>
                        <div className='home-contact__inputs'>
                            <div className='home-contact__name'>
                                <h2 className='home-contact__title'>Wpisz swoje imię</h2>
                                <input type="text" value={name} placeholder='Krzysztof' className='home-contact__input' onChange={e => handleNameChange(e)}></input>
                                {errors.nameError === true && <h2 className='home-contact__error'>Podane imię jest nieprawidłowe!</h2>}
                            </div>
                            <div>
                                <h2 className='home-contact__title'>Wpisz swój email</h2>
                                <input type="email" value={email} placeholder='abc@xyz.pl' className='home-contact__input' onChange={e => handleEmailChange(e)}></input>
                                {errors.emailError === true && <h2 className='home-contact__error'>Podany email jest nieprawidłowy!</h2>}
                            </div>
                        </div>
                        <div className='home-contact__message'>
                            <h2 className='home-contact__title'>Wpisz swoją wiadomość</h2>
                            <input type='text' value={message} className='home-contact__input home-contact__input-message' onChange={e => handleMessageChange(e)} placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'></input>
                            {errors.messageError && <h2 className='home-contact__error'>Wiadomość musi mieć co najmniej 120 znaków!</h2>}
                        </div>
                        <button className='home-contact__button' type='submit'>Wyślij</button>
                    </form>
                </div>
                <div className='home-contact__socialmedia'>
                    <a className='home-contact__icon icon-facebook' href='#'></a>
                    <a className='home-contact__icon icon-instagram' href='#'></a>
                </div>
            </div>
        </div>
    )
}

export default HomeContact
