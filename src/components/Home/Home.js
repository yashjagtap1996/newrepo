import React, { useContext, useEffect } from 'react'
// import './Home.css'
import { sender } from '../../Store'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    let {mode,setMode}=useContext(sender)

    useEffect(() => {
        AOS.init();
      }, [])
    

  return (
    <>
        <div className={`container-fluid text-${mode?'light':'dark'} mt-5 bg-${mode?"dark":"light"}  `} id='Home'>
            <div className="row align-items-center vh-100" >
                <div className="col-md-6">
                    <h1>Hi I'm Yash Jagtap</h1>
                    <h5>FrontEnd Developer</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure obcaecati facilis veniam ipsam magni modi distinctio, accusamus labore deserunt dolor illum consequuntur quos dignissimos mollitia suscipit unde cupiditate id ea.</p>
                </div>
                <div className="col-md-6 Home">
                    <img data-aos="zoom-in-right" className='shadow' src="Images/Home/front-end-developer__1_-removebg-preview.png" alt="" width="100%" height="400px" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Home