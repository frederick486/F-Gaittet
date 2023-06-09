import './contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Adress from '../../img/address.png'
import { useContext, useRef, useState } from 'react'
import { ThemeContext } from '../../context'
// import emailjs from 'emailjs'


const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();

        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
        // .then((result) => {
        //     console.log(result.text);
                setDone(true)
        // }, (error) => {
        //     console.log(error.text);
        // });        
    }

  return (
    <div className='c'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
            <h1 className="c-title">Let's discuss your project</h1>
            <div className="c-info">
                <div className="c-info-item">
                    <img src={Phone} alt="" className="c-icon" />
                    +06 12 34 56 78
                </div>
                <div className="c-info-item">
                    <img src={Email} alt="" className="c-icon" />
                    contact@gmail.com
                </div>
                <div className="c-info-item">
                    <img src={Adress} alt="" className="c-icon" />
                    12 King Street, Touterie Victoria 8520 Australia
                </div>
            </div>
        </div>
        <div className="c-right">
            <p className="c-desc">
                <b>What's your story?</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Officia, at? Pariatur, sed sequi. Ea ducimus error sapiente at, sequi hic, voluptas 
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
                <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Name' name='user_name' />
                <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Subject' name='user_subject' />
                <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Email' name='user_email' />
                <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder='Message' name='message' />
                <button>Submit</button>
                {done && "Thank for your message ..."}
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
