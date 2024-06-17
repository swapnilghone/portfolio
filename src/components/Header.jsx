import React, { useState } from 'react'
import profileImage from '../assets/profile.png';

const Header = ({ activeSection }) => {

    const switchSection = (e) => {
        e.preventDefault();
        let target = e.currentTarget.getAttribute('href');
        let section = document.querySelector('section' + target);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            })
        }
    }

    const [toggleMenu,setToggleMenu] = useState('fa-bars');

    const toggleMobileMenu = () => {
        document.body.classList.toggle('mobile-nav-active');
        setToggleMenu((toggleMenu == 'fa-bars')?'fa-xmark':'fa-bars');
    }

    return (
        <>
            <i className={`fa-solid ${toggleMenu} mobile-nav-toggle d-xl-none`} onClick={toggleMobileMenu}></i>
            <header id="header">
                <div className="d-flex flex-column">

                    <div className="profile">
                        <img src={profileImage} alt="" className="img-fluid rounded-circle" />
                        <h1 className="text-light"><a href="index.html">Swapnil Ghone</a></h1>
                        <div className="social-links mt-3 text-center">
                            <a href="https://www.linkedin.com/in/swapnil-ghone/" target="_blank" className="linkedin"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="https://github.com/swapnilghone" target="_blank" className="github"><i className="fa-brands fa-github"></i></a>
                            <a href="https://stackoverflow.com/users/2029094/swapnil-ghone" target="_blank" className="stackoverflow"><i className="fa-brands fa-stack-overflow"></i></a>
                            <a href="https://profiles.wordpress.org/swapnilghone9/" target="_blank" className="wordpress"><i className="fa-brands fa-wordpress"></i></a>
                            <a href="https://www.instagram.com/swaptastic9/" target="_blank" className="instagram"><i className="fa-brands fa-instagram"></i></a>

                        </div>
                    </div>

                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <li><a href="#about" className={`nav-link scrollto ${activeSection == 'about' ? 'active' : ''}`} onClick={switchSection}><i className="fa-regular fa-address-card"></i> <span>About</span></a></li>
                            <li><a href="#skills" className={`nav-link scrollto ${activeSection == 'skills' ? 'active' : ''}`} onClick={switchSection}><i className="fa-solid fa-code"></i> <span>Skills</span></a></li>
                            <li><a href="#experience" className={`nav-link scrollto ${activeSection == 'experience' ? 'active' : ''}`} onClick={switchSection}><i className="fa-solid fa-laptop-code"></i> <span>Experience</span></a></li>
                            <li><a href="#portfolio" className={`nav-link scrollto ${activeSection == 'portfolio' ? 'active' : ''}`} onClick={switchSection}><i className="fa-solid fa-code-branch"></i> <span>Portfolio</span></a></li>
                            <li><a href="#resume" className={`nav-link scrollto ${activeSection == 'resume' ? 'active' : ''}`} onClick={switchSection}><i className="fa-regular fa-file"></i> <span>Resume</span></a></li>
                            <li><a href="#contact" className={`nav-link scrollto ${activeSection == 'contact' ? 'active' : ''}`} onClick={switchSection}><i className="fa-regular fa-envelope"></i> <span>Contact</span></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
