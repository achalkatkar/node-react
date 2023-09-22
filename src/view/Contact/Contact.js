import './Contact.css';

import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer"

export default function Contact() {
    return(
        <div className='contact-container'>
            <Navbar/>
           <div className='contact-card'>
            <h1 className='contact-heading'>Contact</h1>
            <input type='text' placeholder='Name' className='text-name'/>  <br/>
            <input type='gmail' placeholder='Gmail' className='text-name'/> <br/>
            <button className='contact-btn'>Submit</button>
           </div>
            <Footer/>
        </div>
    )
}