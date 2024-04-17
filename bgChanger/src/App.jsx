import React, { useState } from 'react'

const App = () => {

  const [color, setColor] = useState("grey");

  return (
    <>
      <div className='flex justify-center w-full h-screen duration-200'
        style={{ backgroundColor: color }}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2'>
          <div className='flex flex-wrap justify-center align-items-center gap-3 shadow-lg bg-white px-3 py-2 rounded'>
            <button
              onClick={() => setColor("red")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "Green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("Blue")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "Blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("olive")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "olive" }}
            >
              Olive
            </button>
            <button
              onClick={() => setColor("black")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
