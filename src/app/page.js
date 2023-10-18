

import React from 'react'

const Page = () => {
  return (
    <>
      <h2>Hello World</h2>
      {
        process.env.NODE_ENV=="development" ? <h1> You are on development . </h1> : <h1> You are on Productions Mode .</h1>
      }
    </>
  )
}

export default Page
