import React from 'react';
import Main from '../Main/Main';
import styled from 'styled-components';


const Avatar = styled.img`
    grid-column-start: 1;
    grid-column-end: 1;
`

const Welcome = styled.div`
    grid-column-start: 2;
    grid-column-end: span 3;
`

export default function Home() {

    return (
        <Main>
            <Avatar alt="Joe Churchman" src=""/>
            <Welcome>
                <div className="greeting">
                    "Hi there!"
                </div>
                <h1>I'm Joe Churchman</h1>
                <div className="intro">
                    <p>I'm six months new to development with a background ranging from construction to fine art.</p>
                </div>
            </Welcome>
        </Main>
    )
}