import React from 'react';
import { Container } from 'react-bootstrap';
import Layout from '@/components/Layout';


export default function Profile() {
    return (
        <>
        <Layout showNav={true}>
        <Container>
            <h1>Profile</h1>
        </Container>
        </Layout>
        </>
    )
}