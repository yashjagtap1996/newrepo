import React, { useContext } from 'react'
import { sender } from '../Store'
import { BsFillMoonFill,BsFillSunFill } from "react-icons/bs";
import List from './List';

const Navbar = () => {

    let {mode,setMode}=useContext(sender)

    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-${mode?"dark":"light"}  fixed-top`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav text- mx-auto mb-2 mb-lg-0">
                            <List ID="#Home" name="Home" />
                            <List ID="#About" name="About" />
                            <List ID="#Skills" name="Skills" />
                            <List ID="#Contact" name="Contact" />
                        </ul>
                        <div className="d-flex" role="search">
                            <button className='border-0 bg-light' onClick={()=>setMode(!mode)}>{mode?<BsFillSunFill />:<BsFillMoonFill />}</button>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar