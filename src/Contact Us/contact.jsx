import React, {useRef} from 'react';
import './contact.css';
import emailjs from 'emailjs/browser';

export const contact = () => {

    const refForm=useRef();

    const handleSubmit =(event)=>{
        event.prevenDefault();
        console.log(refForm);
        const serviceId = "service_llotq0o";
        const templeateId = "template_tucd4ut";
        const apiKey = "vGeZTtiaiS3GKFJuR";

        emailjs.senForm(serviceId, templeateId, "pending", apiKey)
        .then(result => console.log(result.text))
        .catch(error => console.error(error))

    }



  return (
    <form ref={refForm} action="" onSubmit={handleSubmit}>
            <button className='btn-send'>Send</button>
    </form>
  )
}
