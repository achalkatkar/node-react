import './About.css';
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer"
import ImgAchal from "../../achal.jpg";

export default function About() {
    return(
        <div className='about-container'>
            <Navbar/>
            <div className='about-card'>
                <div className='img-card'><img src={ImgAchal} alt='Achal' className='user-img'/></div>
                <div className='img-info'>
                    <h1 className='about-user'>About Us </h1>
                    <h2 > Front-end Developer & <span className='sub-heading'>Designer</span></h2>
                    <p>Hello..! I'm Achal Katkar </p>
                    <button className='about-btn'>Hire Me</button>
                </div>
                
            </div>
             <Footer/>
        </div>
    )
}