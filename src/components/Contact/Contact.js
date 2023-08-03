import React from 'react'
import Form from './Form'
import { AiFillInstagram,AiFillFacebook,AiFillGithub } from "react-icons/ai";
import Header from '../Header';
import './Contact.css'



const Contact = () => {
  return (
    <>
        <div className="container-fluid py-2" id='Contact'>
            <Header title="Contact Me" />
            <div className="row">
                <div className="col-6">
                    <h1>Let's Get In Touch</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et similique reprehenderit distinctio quod quaerat ipsum hic modi sunt necessitatibus vel!</p>
                    <h5>Living In:</h5>
                    <p>Nagpur</p>
                    <h5>Call:</h5>
                    <p>+91 705735942</p>
                    <AiFillFacebook />
                    <AiFillGithub/>
                    <AiFillInstagram /> 
                </div>
                <div className="col-6">
                    <Form />
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact