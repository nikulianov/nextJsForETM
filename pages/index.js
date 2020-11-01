import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import MainLayout from '../components/MainLayout'
export default function Index() {
  return(
    <MainLayout>
      <Head>
        <title>Тестов</title>
        <meta name='keywords' content='nextJd'/>
        <meta name='description' content='nextJd'/>
        <meta charSet='utf-8'/>
      </Head>
      <h1>Тест</h1>
      <Link href='/post'><a>post</a></Link>
    </MainLayout>
  )
}