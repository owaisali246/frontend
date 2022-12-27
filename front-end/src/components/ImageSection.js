import React from 'react'
import { MdDelete } from 'react-icons/md';
import './ImageSection.css';

export default function ImageSection() {
    return (
        <div className='w-80 mx-auto my-5'>
            <div className='d-flex align-items-center'>
                <h3>1</h3>
                <div className='w-80 d-flex justify-content-end'>
                    <button className='py-2 px-3 border-0 bg-transparent text-primary'>Download</button>
                    <button className='ms-2 py-2 px-3 border-0 bg-transparent text-primary'>Share</button>
                    <button className='ms-2 py-2 px-3 border-0 rounded bg-transparent text-muted'><MdDelete className='fs-4' /></button>
                </div>
            </div>
            <div className=''>
                <p className='float-start mb-1'>sks letter argument very realistic studio lighting product, product shot, high quality. 4k, 8k</p><br />
                <div className='w-80 float-start d-flex justify-content-start'>
                    <p className=' py-1 px-2 bg-secondary-subtle rounded'>Branch: <span className='text-dark fw-bold'>sd15</span></p>
                    <p className='ms-2 py-1 px-2 bg-secondary-subtle rounded'>Token: <span className="text-dark fw-bold">sks</span></p><br />
                </div>
            </div>
            <div className=''>
                <div className=' w-80 d-flex flex-row justify-content-evenly'>
                    <div className=''><img className='rounded' src="https://unsplash.it/300/300/" alt="" /></div>
                    <div className=''><img className='rounded' src="https://unsplash.it/300/300/" alt="" /></div>
                    <div className=''><img className='rounded' src="https://unsplash.it/300/300/" alt="" /></div>
                    <div className=''><img className='rounded' src="https://unsplash.it/300/300/" alt="" /></div>
                </div>
                <div className='my-4 w-80 d-flex justify-content-evenly'>
                    <div className=''><img className='rounded' src="https://unsplash.it/300/300/" alt="" /></div>
                    <div className=''><img className='rounded' src="https://unsplash.it/300/300/" alt="" /></div>
                    <div className=''><img className='rounded' src="https://unsplash.it/300/300/" alt="" /></div>
                    <div className=''><img className='rounded' src="https://unsplash.it/300/300/" alt="" /></div>
                </div>
            </div>
        </div>
    )
}
