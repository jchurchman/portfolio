import React from 'react';

import styled from 'styled-components';

const Anchor = styled.div`
    background-color: #2B4848;
    color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 10vh;
    display: grid;
    grid-template-columns: 23vw 23vw 23vw 23vw;
    grid-column-gap: 2vw;
    justify-items: center;
    padding: 1vh 1vw;
`

const Goodbye = styled.div`
    height: 90%;
    grid-column-start: 1;
    grid-column-end: span 2;
`

const Info = styled.address`
    height: 90%;
    grid-column-start: 3;
    grid-column-end: span 4;

`

export default function Footer () {
    return (
        <Anchor>
            <Goodbye>
                <h2>Get in Touch</h2>
                <p>I'm always looking for fun projects or to talk about the ones I've made. Drop me a line & let's talk!</p>
            </Goodbye>
            <Info>
                <h4>CONTACT INFORMATION</h4>
                <hr/>
                <hr/>
                <p>360-261-3897</p>
                <a href="mailto:churchman.joe@gmail.com">churchman.joe@gmail.com</a>
            </Info>
        </Anchor>
    )
}