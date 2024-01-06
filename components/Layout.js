import React from 'react';
import {Container} from 'react-bootstrap';
import MainNav from '@/components/MainNav';

export default function Layout( {children, showNav = true }) {
    return (
        <>
            {showNav && <MainNav/>}
            <Container>
                <br/>
                {children}
                <br/>
            </Container>
            <br/>
        </>
    )   
} 