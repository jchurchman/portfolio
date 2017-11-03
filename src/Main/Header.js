import React from 'react';
import Navigate from '../Navigate/Navigate';
import styled from 'styled-components';

const Flag = styled.div`
background-color: white;
height: 15vh;
position: fixed;
top: 0;
left: 0;
right: 0;
width: 100vw;
`

const Heading = styled.h1`
position: absolute;
left: 0;
top: 0;
padding: 1vh 1vw;
`
export default function Header() {
    return (
        <Flag>
            <Heading>Joe Churchman</Heading>
            <Navigate />
        </Flag>
    )
}