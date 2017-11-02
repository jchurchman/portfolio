import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigate extends Component {

    render () {
        return (
            <ul className="NavList">
                <li className="Link"><NavLink to="/">Home</NavLink></li>
                <li className="Link"><NavLink to="/about">About</NavLink></li>
                {/* <li className="Link"><NavLink to="/experience">Experience</NavLink></li> */}
                <li className="Link"><NavLink to="/projects">Projects</NavLink></li>
            </ul>
        )      
    }
}