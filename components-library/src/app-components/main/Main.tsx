import React from 'react'
import Content from '../content/Content'
import Navbar from '../navbar/Navbar'


export default function Main() {
    return (
        // TODO: navbar
        <div className='
                main-body-bg-dark min-h-screen p-2 
                flex gap-2 content-around 
                w-11/12 max-w-[82rem] m-auto'>
            <Navbar />
            <Content />
        </div>
    )
}