import React, { useContext, useEffect, useState } from 'react'
import Header from '../Header'
import { GrSettingsOption } from 'react-icons/gr';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { sender } from '../../Store';

const About = () => {

    let [show, setShow] = useState(false)

    let Data = [
        {
            id: 1,
            title: "Name",
            info: "Yash Jagtap"
        },
        {
            id: 2,
            title: "Email",
            info: "yashjagtap@gmail.com"
        },
        {
            id: 3,
            title: "DOB",
            info: "25/12/1996"
        },
        {
            id: 4,
            title: "From",
            info: "Nagpur"
        }
    ]

    useEffect(() => {
        AOS.init();
      }, [])

    let [colorpick, setColorPick] = useState("primary")

    let {mode,setMode}=useContext(sender)

    return (
        <>
            <div className={`container-fluid position-relative bg-${mode?"dark":"light"} text-${mode?"light":"dark"}`} id='About'>
                <Header title="About Me" />
                <div className="row align-items-center  ">
                    <div className="col About">
                        <img data-aos="flip-left" className='shadow' src="Images/About/2211.w026.n002.2759B.p1.2759-removebg-preview.png" width="100%" height="300px" alt="" />
                    </div>
                    <div className="col">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa vitae quas quos numquam. Ad dolor consequuntur, nobis blanditiis quaerat debitis cupiditate ut ratione animi similique eaque, obcaecati, voluptatibus esse facilis.</p>
                    </div>
                </div>
                <div className="row mt-4 ">
                    {
                        Data.map((e) => {
                            return (
                                <div className="col-3">
                                    <div className={`card text-bg-${colorpick} mb-3`} style={{ maxWidth: '18rem' }}>
                                        <div className="card-header">{e.title}</div>
                                        <div className="card-body">
                                            <p className="card-text">{e.info}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='mx-auto position-absolute top-0 end-0 text-center p-2 shadow border border-1' style={{width:'75px'}}>

                    <GrSettingsOption className='spinner-border border-0 bg-light' onClick={()=>setShow(!show)} style={{fontSize:"25px"}} />

                    {
                        show &&
                        <div>
                            <button onClick={() => setColorPick("danger")} className='mt-2 rounded-circle bg-danger text-danger'>d</button>
                            <button onClick={() => setColorPick("success")} className='rounded-circle my-2 bg-success text-success mx-2'>d</button>
                            <button onClick={() => setColorPick("warning")} className='rounded-circle bg-warning text-warning'>d</button>
                        </div>
                    }
                </div>

            </div >
        </>
    )
}

export default About