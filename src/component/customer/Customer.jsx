import React from 'react'
import NextButton from './NextButton'


const Customer = () => {
  return (
    <div className='className="bg-dark-green w-full h-screen'>
      <header className="w-full h-[15%] bg-dark-green text-cream flex justify-center items-center">
        <h1 className="text-2xl font-semi-bold">
          Customer Details
        </h1>
      </header>
      <section className="bg-cream w-full h-[70%] flex justify-center items-center px-[50px] text-gray-500">
      </section>
      <footer className="bg-dark-green w-full h-[15%] flex justify-end items-center px-[50px]">
        <NextButton />
      </footer>

    </div>
  )
}

export default Customer