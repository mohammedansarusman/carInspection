import React from 'react'
import { VscPreview } from "react-icons/vsc";


const Preview = () => {
  return (
    <div className="w-[100px] h-[100px] bg-cream rounded-lg border transition-all duration-300 hover:outline-1">
          <header className="w-[100%] h-[70%] flex justify-center items-end rounded-t-lg">
            <VscPreview className="w-[70%] h-[70%]" />
          </header>
          <section className="flex justify-center items-center">Preview</section>
        </div>
  )
}

export default Preview