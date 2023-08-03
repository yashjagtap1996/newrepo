import React, { useContext, useState } from 'react'
import Header from '../Header'
import {  FaReact,FaBootstrap } from 'react-icons/fa';
import { BiLogoJavascript  } from 'react-icons/bi';
import { SiCss3   } from 'react-icons/si';
import { AiFillHtml5   } from 'react-icons/ai';
import './Skills.css'
import { sender } from '../../Store';



const Skills = () => {

    let Data=[
        {
            id:1,
            icon:<AiFillHtml5/>,
            title:"HTML",
            colour:'blue'
        },
        {
            id:2,
            icon:<SiCss3 />,
            title:"CSS",
            colour:'orange'
        },
        {
            id:3,
            icon:<FaBootstrap />,
            title:"BOOTSTRAP",
            colour:'violet'
        },
        {
            id:4,
            icon:<BiLogoJavascript />,
            title:"JAVASCRIPT",
            colour:'yellow'
        },
        {
            id:5,
            icon:<FaReact />,
            title:"REACT",
            colour:'indigo'
        }
    ]

    let [picker,setPicker]=useState(Data[0])

    let {mode,setMode}=useContext(sender)

  return (
    <>
        <div className={`container-fluid bg-${mode?"dark":"light"} text-${mode?"light":"dark"}`} id='Skills'>
            <Header title="My Skills" />
            <div className="row align-items-center justify-content-center">
                <div className="col-md-2">
                    {
                        Data.map((e)=>{
                            return (
                                <div className='border border-dark text-center mb-2 rounded shadow'>
                                    <span className='icon_card' onMouseEnter={()=>setPicker(e)} style={{fontSize:'60px',color:e.colour}}>{e.icon}</span> 
                                </div>    
                            )
                        })
                    }
                </div>
                <div className={`col-md-5 text-center border border-light shadow rounded`}>
                    <span style={{fontSize:'200px',color:picker.colour}}>
                        {picker.icon}
                    </span>
                    <h1>{picker.title}</h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default Skills