import React from 'react'

async function getUsers(id) {
    let data = await fetch(`http://localhost:3000/api/users/${id}`);
    let userData = await data.json();
    return userData.result;
}

const Page = async ({params}) => {
    // console.log(params.id)
    const user = await getUsers(params.id);
    
    console.log(user)
  return (
    <>
        <h2>User Details</h2>
        {user.name}
    </>
  )
  
}

export default Page;
