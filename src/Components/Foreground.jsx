import React, { useRef } from 'react'
import Card from './Card'
import Bottom from './Bottom';


function Foreground() {
  const ref = useRef(null)
    const data = [
      {
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing",
    filesize:".9mb",
    close:false,
    tag:{ isopen: true,tagtitle:"download now",tagcolor:"green"}, 
  },
      {
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing",
    filesize:".9mb",
    close:false,
    tag:{ isopen: true,tagtitle:"download now",tagcolor:"green"}, 
  },
      {
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing",
    filesize:".9mb",
    close:false,
    tag:{ isopen: true,tagtitle:"download now",tagcolor:"green"}, 
  },
];
  return (
    <>
    <div ref={ref} className='fixed w-full h-screen left-0 top-0 flex gap-6 p-6'>
    {data.map((items,index)=>(
      <Card data={items} reference={ref}/>
    ))}

    </div>
    <footer className='w-full h-2 bg-blue-600 absolute bottom-0 '>
    </footer>
    <footer className='w-full h-2 bg-blue-600  '>
    </footer>
    <Bottom/>
    
    </>


  )
}

export default Foreground