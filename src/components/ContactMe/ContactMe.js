import React, { useState, useEffect } from 'react';
// import { Scroll_Link } from '../Navigation/NavBarItem';
import classes from './contactMe.module.css';
import emailjs from 'emailjs-com';
import { useDispatch } from 'react-redux';
import { hideMenu, hideMenuBtn, minimize } from '../../Redux/btnChngSlice';
 

const ContactMe = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(hideMenuBtn())
        dispatch(hideMenu())
        dispatch(minimize())
    })

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [message, setmessage] = useState('');

    let templateParams = {
        Sender: name,
        EMail: email,
        Message: message
  };


    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.send('service_xno9g3w','template_gofchys', templateParams ,'user_dGnaXsqFMvOFUcZf6o5qG')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            setmessage('');
            setname('');
            setemail('');
         }, function(error) {
            console.log('FAILED...', error);
         });
    };

    return (
        <div className={classes.contact} id="contact">
            <form className={classes.box} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" 
                   className={classes.inputElement} 
                   placeholder="Your Name"
                   value={name}
                   onChange={(event) => setname(event.target.value)}/>

            <label>E-Mail</label>
            <input type="email" 
                   className={classes.inputElement}  
                   placeholder="Your E-mail"
                   value={email}
                   onChange={(event) => setemail(event.target.value)}/>

            <label>Message</label>
            <textarea type="text" 
                      className={classes.inputMsg} 
                      placeholder="Message"
                      value={message}
                      onChange={(event) => setmessage(event.target.value)}/>
            <button>
                Send
            </button>
            </form>
        </div>
    )
}


export default ContactMe;
