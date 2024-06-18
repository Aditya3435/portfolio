import React, { useRef } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';import 'react-vertical-timeline-component/style.min.css'
import StarIcon from '@mui/icons-material/Star';
import { useInView } from 'framer-motion';
function Experience() {
    const ref = useRef(null); // 1263 x 563
    const view = useInView(ref);
    return (
        <div className='flex flex-col items-center justify-center gap-8 md:w-full w-11/12 max-sm:mt-10' ref={ref}>
            <h1 className='text-5xl font-bold mb-10'>Experience</h1>
            <VerticalTimeline lineColor='var(--foreground-rgb)'>
                <VerticalTimelineElement
                    visible={view}
                    className="vertical-timeline-element--work"
                    lineColor="red"
                    contentStyle={{ background: 'var(--foreground-rgb)', color: 'var(--background-end-rgb' }}
                    contentArrowStyle={{ borderRight: '7px solid  var(--foreground-rgb)' }}
                    date="2021 - present"
                    iconStyle={{ background: 'var(--foreground-rgb)', color: 'var(--background-end-rgb)', borderColor: 'var(--background-end-rgb)', borderWidth: '2px' }}
                    icon={<BusinessCenterIcon/>}
                >
                    <div className="vertical-timeline-element-title font-bold mt-2 mb-2  text-teal">Web Developer</div>
                    <a href='https://github.com/pixonoids' className='vertical-timeline-element-subtitle' target='_blank'>Pixonoids</a>
                    <p className=''>
                        1. Collaborated with the team to develop college fest websites using the MERN stack.
                    </p>
                    <p>
                        2. Developed farewell website using HTML, CSS and VanillaJS, for passing seniors. <a href='https://pixonoids.github.io/farewell-2022/' className='text-teal' target='_blank'>(Farewell 2k22 site) </a>
                    </p>
                    <p>
                        3. Led cross-functional teams of two departments, Graphics Design and Animation, to integrate visually
                        appealing elements on the website.
                    </p>
                    
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    visible={view}
                    className="vertical-timeline-element--work"
                    lineColor="red"
                    contentStyle={{ background: 'var(--foreground-rgb)', color: 'var(--background-end-rgb' }}
                    contentArrowStyle={{ borderRight: '7px solid  var(--foreground-rgb)' }}
                    date="2022 - present"
                    iconStyle={{ background: 'var(--foreground-rgb)', color: 'var(--background-end-rgb)', borderColor: 'var(--background-end-rgb)', borderWidth: '2px' }}
                    icon={<BusinessCenterIcon />}
                >
                    <div className="vertical-timeline-element-title font-bold mt-2 mb-2">Competitive Programmar</div>
                    <div className='mt-2'>
                        1. Solved 900+ problems on and having Knight Level <a href='https://leetcode.com/aditya3435/' target='_blank' className='text-teal'>Leetcode</a>
                        <br />
                        3. Specialist at <a href='https://codeforces.com/profile/aditya3435' target='_blank' className='text-teal'>Codeforces</a> (max. rating 1401)
                        <br /> 
                        2. 3 star coder on <a href='https://codechef.com/users/aditya3435' target='_blank' className='text-teal'>Codechef</a> (max. rating 1701)
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    visible={view}
                    iconStyle={{ background: 'var(--foreground-rgb)', color: 'var(--background-end-rgb)', borderColor: 'var(--background-end-rgb)', borderWidth: '2px' }}

                    icon={<StarIcon />}
                />
            </VerticalTimeline>
        </div>
    )
}

export default Experience