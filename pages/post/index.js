import {useEffect,useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import MainLayout from '../../components/MainLayout'
export default function Index({posts}) {

  return(
    <MainLayout>
      <Head>
        <title>Посты</title>
      </Head>
      <h1>Посты</h1>
      <Link href='/'><a>Главная</a></Link>
      <ul>
        {posts.map(post =>{
          return(
            <li>
              <Link href={'post/[id]'} as={`post/${post.id}`}><a>{post.title}</a></Link>
            </li>
          )
        })}
      </ul>
    </MainLayout>
  )
}

Index.getInitialProps = async()=>{
  let response = await fetch('http://localhost:4200/posts')
  let posts = await response.json()
  return {
    posts
  }
}