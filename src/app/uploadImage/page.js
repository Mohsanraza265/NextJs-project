"use client"
import React, { useState } from 'react'


const page = () => {
    const [file, setfiles] = useState();
    const onSubmit = async (e) => {
        e.preventDefault();
        
        const data = new FormData();
        data.set('file', file)
        const result = await fetch("api/upload", {
            method: "POST",
            body: data
        });
        console.log(result);
    }


  return (
    <>
        <h2>Upload Image</h2>
        <form onSubmit={onSubmit}>
            <input type="file" name="file" onChange={(e) => setfiles(e.target.files?.[0])} />
            <button type="submit">Upload Image</button>
        </form>
    </>
  )
}

export default page