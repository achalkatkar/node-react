import './Home.css';
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";


export default function Home() {
    return( 
    <>
    
       
        <div className='home-container'>
        <Navbar/>
           
            <h1 className='heading'>Web Design & <br/> <span className='color-heading'>Development</span><br/>Course</h1>
            
            <p className='text'>Web Design is a specialisation of the design stream . They also use HTML,<br/>
            CSS, WYSIWYG editing softwere, mark up validators etc.,<br/>
            to create design elements</p>
            <button className='btn'> JOIN US</button>
            <Footer/>
        </div>
       </> 
    )
}