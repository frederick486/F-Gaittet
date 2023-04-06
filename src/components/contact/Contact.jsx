import './contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Adress from '../../img/address.png'
import { useRef } from 'react'

const Contact = () => {
    const formRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
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
                <input type="text" placeholder='Name' name='user_name' />
                <input type="text" placeholder='Subject' name='user_subject' />
                <input type="text" placeholder='Email' name='user_email' />
                <textarea rows="5" placeholder='Message' name='message' />
                <button>Submit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
