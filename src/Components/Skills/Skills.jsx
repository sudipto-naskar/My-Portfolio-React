import React from 'react'
import './Skills.css'

import CardSkills from '../Skills-Card/skillcard'

import HTMLLOGO from '../../img/png_logos/html.png'
import CSSLOGO from '../../img/png_logos/css.png'
import JSLOGO from '../../img/png_logos/js.png'
import NODEJSLOGO from '../../img/png_logos/nodejs 3.png'
import EXPRESSLOGO from '../../img/png_logos/express.png'
import MONGODBLOGO from '../../img/png_logos/mongodb.png'
import REACTLOGO from '../../img/png_logos/react.png'
import GITLOGO from '../../img/png_logos/git.png'
import TAILWINDLOGO from '../../img/png_logos/tailwind.png'
import BOOTSTRAPLOGO from '../../img/png_logos/bootstrap.png'
import NEXTJSLOGO from '../../img/png_logos/nextjs.png'
import PYTHONLOGO from '../../img/png_logos/python.png'


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
            <div className='cs'>
                <div className='hovred'>
                    <CardSkills
                        image={HTMLLOGO}
                        hovertitle={'HTML'}
                        hoverdetail={'loremipsumnjkdhkbvkjsvljnljsdvnjsvbkhkbhklkdrgakencbsdjkmcuoylkdtjnsvlsvhksdv svlknvj  nekchbeckeclkcn vnwjkv'} />
                </div>

                <div className='hovblue'>
                    <CardSkills
                        image={CSSLOGO}
                        hovertitle={'CSS'}
                        hoverdetail={'loremipsumnjkdhkbvkjsvljnljsdvnjsvbkhkbhklkdrgakencbsdjkmcuoylkdtjnsvlsvhksdv svlknvj  nekchbeckeclkcn vnwjkv'}
                    />
                </div>

                <div className='hovyellow'>
                    <CardSkills
                        image={JSLOGO}
                        hovertitle={'JAVASCRIPT'}
                        hoverdetail={'loremipsumnjkdhkbvkjsvljnljsdvnjsvbkhkbhklkdrgakencbsdjkmcuoylkdtjnsvlsvhksdv svlknvj  nekchbeckeclkcn vnwjkv'}
                    />
                </div>

                <div className='hovsky'>
                    <CardSkills
                        image={REACTLOGO}
                        hovertitle={'REACT JS'}
                        hoverdetail={'loremipsumnjkdhkbvkjsvljnljsdvnjsvbkhkbhklkdrgakencbsdjkmcuoylkdtjnsvlsvhksdv svlknvj  nekchbeckeclkcn vnwjkv'}
                    />
                </div>

                <div className="blur s-blur4" style={{ background: "rgb(125 162 169 / 58%)" }}></div>

                <div className='hovblack'>
                    <CardSkills
                        image={NEXTJSLOGO}
                        hovertitle={'NEXT JS'}
                        hoverdetail={'loremipsumnjkdhkbvkjsvljnljsdvnjsvbkhkbhklkdrgakencbsdjkmcuoylkdtjnsvlsvhksdv svlknvj  nekchbeckeclkcn vnwjkv'}
                    />
                </div>

                <div className='hovlitegreen'>
                    <CardSkills
                        image={NODEJSLOGO}
                        hovertitle={'NODE JS'}
                        hoverdetail={'loremipsumnjkdhkbvkjsvljnljsdvnjsvbkhkbhklkdrgakencbsdjkmcuoylkdtjnsvlsvhksdv svlknvj  nekchbeckeclkcn vnwjkv'}
                    />
                </div>

                <div className='hovgrey'>
                    <CardSkills
                        image={EXPRESSLOGO}
                        hovertitle={'EXPRESS JS'}
                        hoverdetail={'LOREM'}
                    />
                </div>

                <div className='hovgreen'>
                    <CardSkills
                        image={MONGODBLOGO}
                        hovertitle={'MONGODB'}
                        hoverdetail={'loremipsumnjkdhkbvkjsvljnljsdvnjsvbkhkbhklkdrgakencbsdjkmcuoylkdtjnsvlsvhksdv svlknvj  nekchbeckeclkcn vnwjkv'}
                    />
                </div>

                <div className="blur s-blur3" style={{ background: "rgb(161 100 198 / 46%)" }}></div>

                <div className='hovlitered'>
                    <CardSkills
                        image={GITLOGO}
                        hovertitle={'GIT/GITHUB'}
                        hoverdetail={'loremipsumnjkdhkbvkjsvljnljsdvnjsvbkhkbhklkdrgakencbsdjkmcuoylkdtjnsvlsvhksdv svlknvj  nekchbeckeclkcn vnwjkv'}
                    />
                </div>

                <div className='hovlitesky'>
                    <CardSkills
                        image={TAILWINDLOGO}
                        hovertitle={'TAILWIND'}
                        hoverdetail={'loremipsumnjkdhkbvkjsvljnljsdvnjsvbkhkbhklkdrgakencbsdjkmcuoylkdtjnsvlsvhksdv svlknvj  nekchbeckeclkcn vnwjkv'}
                    />
                </div>

                <div className='hovviolet'>
                    <CardSkills
                        image={BOOTSTRAPLOGO}
                        hovertitle={'BOOTSTRAP'}
                        hoverdetail={'loremipsumnjkdhkbvkjsvljnljsdvnjsvbkhkbhklkdrgakencbsdjkmcuoylkdtjnsvlsvhksdv svlknvj  nekchbeckeclkcn vnwjkv'}
                    />
                </div>

                <div className='hovblueyellow'>
                    <CardSkills
                        image={PYTHONLOGO}
                        hovertitle={'PYTHON'}
                        hoverdetail={'loremipsumnjkdhkbvkjsvljnljsdvnjsvbkhkbhklksdv svlknvj  nekchbeckeclkcn vnwjkv'}
                    />
                </div>
            </div>

            </div>

    )
}

export default Skills
