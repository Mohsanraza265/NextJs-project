'use client'

import React, { useState } from 'react'

const Page = () => {
    const [ name, setName ] = useState("")
    const [ age, setAge ] = useState("")
    const [ email, setEmail ] = useState("")
    const adduser = async () => {
        
          let res = await fetch("http://localhost:3000/api/users", { 
            method: "Post", 
            body:JSON.stringify({name, age, email})
          })
          res = await res.json();
          if(res.success == true) {
            alert("new user added")
          } else {
            alert("fill all field")
          }
          console.log(res, "response")
    }
  return (
    <>
        <div className='m-4 w-[400px]'>
            <h2 className=' uppercase font-semibold'>Add New User</h2>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} className=' outline-none bg-white text-black py-2 px-5 my-3 border border-solid border-black w-full' placeholder='Enter Name'  /><br />
            <input type='number' value={age} onChange={(e) => setAge(e.target.value)} className=' outline-none bg-white text-black py-2 px-5 my-3 border border-solid border-black w-full' placeholder='Enter Age'  /> <br />
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} className=' outline-none bg-white text-black py-2 px-5 my-3 border border-solid border-black w-full' placeholder='Enter Email'  /><br />
            <button onClick={adduser} className=' bg-blue-400 text-white py-2 px-5 rounded-md w-full'>Add User</button>
        </div>
    </>
  )
}

export default Page