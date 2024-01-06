import React from 'react';
import {Container} from 'react-bootstrap';
import Layout from '@/components/Layout'; 

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Layout showNav={true}>
    <Container>
      <h1>Home</h1>
    </Container>
    </Layout>
      
    </>



  )
}
