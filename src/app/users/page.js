import Link from 'next/link';
import React from 'react'
import DeleteUser from '../util/DeleteUser';
async function getUsers() {
    let data = await fetch("http://localhost:3000/api/users");
    let userData = await data.json();
    return userData;
}

const Page = async () => {
    const user = await getUsers();

  return (
    <>
        <h2>User List</h2>
        { user.map((item, id) => (
            <div key={id} className=' w-[300px] flex justify-between'>
                <Link className='w-[100px]' href={`users/${item.id}`}>{item.name}</Link>
                <Link className='text-red-400 underline ' href={`users/${item.id}/update`}>Edit</Link>
                <DeleteUser id={item.id} />
            </div>
        )) }
        
    </>
  )
}

export default Page;