import React from 'react'
import './Footer.css';

export default function Footer() {
    return (
        <div className='bg-light'>
            <div className='d-flex justify-content-center align-items-center mx-auto h-30 w-80'>
                <hr />
                <div className='w-20 h-30 py-4 px-auto '>
                    <a class="navbar-brand" href="#">
                        <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                        &nbsp;&nbsp; <span className="fw-bold fs-6">Astria</span>
                    </a>
                    <p className='my-5'>Tailor-made AI image generation.</p>
                </div>
                <div className='d-flex flex-column align-items-center w-20 h-30 py-4'>
                    <h4 className='text-black fw-semibold'>Company</h4>
                    <div className='w-auto'>
                        <p style={{ textAlign: 'left', marginLeft: '3rem' }} className=' my-2 text-left'>Terms and conditions</p>
                        <p style={{ textAlign: 'left', marginLeft: '3rem' }} className='my-2 text-left'>Content Policy</p>
                        <p style={{ textAlign: 'left', marginLeft: '3rem' }} className='my-2 text-left'>Privacy</p>
                    </div>

                </div>
                <div className='d-flex flex-column align-items-center w-20 h-30 py-4'>
                    <h4 className='text-black fw-semibold'>Resources</h4>
                    <div style={{ marginRight: '3rem' }} className='w-auto'>
                        <p style={{ textAlign: 'left' }} className='my-2 text-left'>How-To</p>
                        <p style={{ textAlign: 'left' }} className='my-2 text-left'>Examples</p>
                        <p style={{ textAlign: 'left' }} className='my-2 text-left'>FAQ</p>
                    </div>
                </div>
                <div className='d-flex flex-column align-items-center w-20 h-30 py-4'>
                    <h4 className='text-white fw-semibold'>.</h4>
                    <div style={{ marginRight: '3rem' }} className='w-auto'>
                        <p style={{ textAlign: 'left' }} className='my-2 text-left'>PROs corner</p>
                        <p style={{ textAlign: 'left' }} className=' my-2 text-left'>API</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
