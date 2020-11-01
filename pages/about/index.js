import React from 'react'
import Router from 'next/router'
import MainLayout from '../../components/MainLayout'

const About = () => {
  return (
    <MainLayout>
      <h1>About</h1>
      <button onClick={()=> Router.push('/')}>Go home</button>
      <button onClick={()=> Router.push('/post')}>Go posts</button>
    </MainLayout>
  )
}

export default About