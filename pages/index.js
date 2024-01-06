import React from 'react';
import { Container } from 'react-bootstrap';
import Layout from '@/components/Layout';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';    

export default function Profile() {

    const router = useRouter();


    const handleClick = (e) => { 
        e.preventDefault()
        //temporarily route to /home
        router.push('/home')
    }

    return (
        <>
        <Layout showNav={false}>
            <Container className="welcome-header">
                <h1>Welcome</h1>
                <h1>to</h1>
                <h1>Chronicle</h1>
                <br />
                <br />
            </Container>

            <Container className="welcome-body">
                <Button variant="light" size="md">
                    Register
                </Button>
                <br />
                <br />
                <Button variant="light" size="md" onClick={handleClick}>
                    Login
                </Button>
            </Container>
        </Layout>
        </>
    )
}