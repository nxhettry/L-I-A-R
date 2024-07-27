import Image from 'next/image'
import React from 'react'

const Initial = () => {
  return (
    <div className='h-full w-full flex justify-center items-center'>
        <Image src={"/logo.gif"} height={400} width={400} alt="L I A R" className='h-52 w-52' priority={true} draggable={false} />
    </div>
  )
}

export default Initial; 