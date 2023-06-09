import React from 'react'
import { Navbar } from '../constant/navbar'

export const Header = () => {
  return (
    <header className='min-w-[1280px] max-w-[1920px] w-full  mx-auto my-0 relative overflow-hidden bg-header-bg bg-cover bg-center h-screen'>
        <div className='main'>
            <div className='wrapper'>
                <Navbar />
            </div>
        </div>
    </header>
  )
}
