import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavList = styled.ul`
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 30vw;
`

const StyledLink = styled.li`
    display: inline-block;
    list-style-type: none;
    padding: 1vh 1vw;
`

export default function Navigate() {

    return (
        <NavList>
            <StyledLink><Link style={{textDecoration: 'none'}} to="/">Home</Link></StyledLink>
            <StyledLink><Link style={{textDecoration: 'none'}} to="/about">About</Link></StyledLink>
            <StyledLink><Link style={{textDecoration: 'none'}} to="/projects">Projects</Link></StyledLink>
        </NavList>
    )      

}