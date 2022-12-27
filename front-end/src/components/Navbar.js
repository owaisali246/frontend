import React from 'react'
import { FaDiscord } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './Navbar.css';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar bg-light">
                <div className="mx-7 container-fluid ">
                    <a class="navbar-brand" href="#">
                        <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                        &nbsp;&nbsp; Astria
                    </a>
                    <div className='d-flex justify-content-end'>
                        <a className='px-2 text-decoration-none text-dark fw-bold' href="">Gallery</a>
                        <a className='px-2 text-decoration-none text-dark fw-bold' href="">API</a>
                        <a className='px-2 text-decoration-none text-dark fw-bold' href="">How-to</a>
                        <a className='px-2 text-decoration-none text-dark fw-bold' href="">Examples</a>
                        <a className='px-2 text-decoration-none text-dark fw-bold' href="">Tunes</a>
                        <a className='px-2 text-decoration-none text-dark fw-bold' href="">automaticfiverr11@gmail.com</a>
                        <a className='px-2 text-decoration-none text-dark' href=""><FaTwitter /></a>
                        <a className='px-2 text-decoration-none text-dark' href=""><MdEmail /></a>
                        <a className='px-2 text-decoration-none text-dark' href=""><FaDiscord /></a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
