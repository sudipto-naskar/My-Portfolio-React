import React from 'react'
import './Skills.css'

import { themeContext } from '../../Context';
import { useContext } from "react";

function Skills() {

    const theme = useContext(themeContext);

    const darkMode = theme.state.darkMode;


    return (
        <div className='skills' id='Skills'>
            
            <div className='heading'>
            <span style={{ color: darkMode ? 'white' : '' }}>My Dev</span>
            <span>Skills</span>
            </div>

            <div>
                
            </div>

        </div>
    )
}

export default Skills
