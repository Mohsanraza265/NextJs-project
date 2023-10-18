"use client"
import React from 'react'


const DeleteUser = (props) => {
    let userId = props.id
    console.log(userId, "userId")
    const deleteUser = async () => {
        let res = await fetch(`http://localhost:3000/api/users/${userId}`, {
            method: "delete"
        });
        res = await res.json();
        if(res.success) {
            alert("Delete one user.")
        } else {
            alert("Try Again");
        }
    }

  return (
    <>
        <button onClick={deleteUser} className='text-red-400 underline'>Delete</button>
    </>
  )
}

export default DeleteUser;