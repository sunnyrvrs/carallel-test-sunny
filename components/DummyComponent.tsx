import React from 'react'

// Dummy Component to import tailwind classes for use globally in application
function DummyComponent() {
  return (
    <div>
        <div className="rounded-tl-3xl rounded-tr-3xl w-[250px] h-[100px] relative">
        </div>
        <div className="rounded-tl-3xl rounded-tr-3xl w-[100px] h-[100px] relative">
        </div>
        <div className="bg-custom-baby-blue w-[50px] h-[50px] rounded-full">
        </div>
        <div className="bg-custom-baby-pink">
        </div>
        <div className="bg-custom-baby-yellow">
        </div>
        <div className="bg-custom-baby-orange">
        </div>
    </div>
  )
}

export default DummyComponent