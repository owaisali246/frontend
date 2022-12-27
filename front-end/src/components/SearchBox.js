import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import { GiBrain } from 'react-icons/gi';
import './SearchBox.css';



export default function SearchBox() {
    return (
        <div className='w-80 mx-auto'>
            <div className='my-12  d-flex align-items-center '>
                <div className='d-flex justify-content-start align-items-center'>
                    <h3><a className='text-muted' href=""><IoMdArrowRoundBack /></a></h3>
                    <h1 className='text-nowrap'>
                        &nbsp;Letter H - letter
                    </h1>
                </div>
                <div className='w-75 d-flex justify-content-end'>
                    <h3><a className='text-muted' href=""><MdDelete /></a></h3>
                    <button className='border-0 mx-3 px-3 rounded'>tar</button>
                    <button className='border-0 px-3 rounded'>ckpt</button>
                </div>
            </div>
            <div className='mb-5'>
                <div className='d-flex justify-content-start mt-4'>
                    <p className=' py-1 px-2 text-dark'>Training info</p>
                    <p className='ms-2 py-1 px-2 text-dark bg-secondary-subtle rounded'>Branch: <span className='text-dark fw-bold'>sd15</span></p>
                    <p className='ms-2 py-1 px-2 text-dark bg-secondary-subtle rounded'>Token: <span className="text-dark fw-bold">sks</span></p>
                </div>
                <textarea className='w-80 py-2 px-3 rounded' name="Textarea" id="text" rows="2"></textarea>
                <p className='float-start'>Try searching for prompts and inspiration on Lexica.</p>
                <div className='mt-4 d-flex justify-content-end'>
                    <button className='py-2 px-3 border-0 bg-transparent text-primary'>Advanced</button>
                    <button className='ms-2 py-2 px-3 border-0 bg-transparent text-primary'><GiBrain className='me-1' />Augment</button>
                    <button className='ms-2 py-2 px-3 border-0 rounded bg-primary text-white'>Generate Image</button>
                </div>
            </div>
        </div>
    )
}
