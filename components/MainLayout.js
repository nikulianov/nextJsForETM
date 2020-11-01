import React from 'react'
import Link from 'next/link'

const MainLayout = ({children}) => {
  return (
    <>
      <nav>
        <Link href={'/'}>Главная</Link>
        <Link href={'/post'}>Посты</Link>
        <Link href={'/about'}>О нас</Link>
      </nav>
      <main>
        {children}
      </main>
      <style jsx global>{`
        nav{
          position:fixed;
          height:60px;
          left:0;
          right:0;
          top:0;
          background:darkblue;
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:10px 15px;
        }

        nav a{
        color:#fff;
        text-decoration:none;
        }

        main{
          margin-top:100px;
        }
      `}</style>
    </>
  )
}


export default MainLayout