import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import "./Navbar.css";



function Navbar() {
    const [click, setClick]= useState(false);
    const[button, setButton]= useState(true);
    const handleClick=()=> setClick(!click);
    const closeMobileMenu=()=>setClick(false);

    const  showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false)
        }else{
            setButton(true)
        }
    };
    useEffect(()=>{
        showButton();
    },[]);

    


    window.addEventListener('resize',showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    PeDaGoGy
                    <i className="fas fa-book-reader"></i>
                    


                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times':'fas fa-bars'}/>
                    </div>
                    <ui className={click ? 'nav-menu active':'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Lp
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Section-2
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Section-3
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>
                                SignUp
                            </Link>
                        </li>
                    </ui>
                    {button &&<Button buttonStyle='btn--outline'>Sign-Up<i className="fas fa-sign-in-alt"></i></Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
