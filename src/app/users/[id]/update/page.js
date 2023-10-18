"use client"
import React, { useEffect, useState } from 'react'


const Page = ({params}) => {
    let id = params.id
    
    const [ name, setName ] = useState("")
    const [ age, setAge ] = useState("")
    const [ email, setEmail ] = useState("")
    useEffect(() => {
        getUserDetails();
    }, [])

    const getUserDetails = async () => {
        let data = await fetch(`http://localhost:3000/api/users/${id}`);
        let userData = await data.json();
        setName(userData.result.name);
        setAge(userData.result.age);
        setEmail(userData.result.email)
    }

    const update = async () => {
        let res = await fetch(`http://localhost:3000/api/users/${id}`,{
            method: "PUT",
            body:JSON.stringify({name,age,email})
        })
        res = await res.json();
        if(res.success == true) {
            alert("User Updated Successfully");
        } else {
            alert("Try Again")
        }
    }

  return (
    <>
        <h2>Update User Details</h2>
        <div className='m-4 w-[400px]'>
            <h2 className=' uppercase font-semibold'>Add New User</h2>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}  className=' outline-none bg-white text-black py-2 px-5 my-3 border border-solid border-black w-full' placeholder='Enter Name'  /><br />
            <input type='number' value={age} onChange={(e) => setAge(e.target.value)} className=' outline-none bg-white text-black py-2 px-5 my-3 border border-solid border-black w-full' placeholder='Enter Age'  /> <br />
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} className=' outline-none bg-white text-black py-2 px-5 my-3 border border-solid border-black w-full' placeholder='Enter Email'  /><br />
            <button onClick={update} className=' bg-blue-400 text-white py-2 px-5 rounded-md w-full'>Update User</button>
        </div>
    </>
  )
  
}

export default Page;
