import React, { useRef } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';import 'react-vertical-timeline-component/style.min.css'
import { useInView } from 'framer-motion';
function Experience() {
    const ref = useRef(null);
    const view = useInView(ref);
    return (
        <div className='flex flex-col items-center justify-center gap-8 w-screen h-screen max-sm:mt-10' ref={ref}>
            <h1 className='text-5xl font-bold mb-10'>Experience</h1>
            <VerticalTimeline lineColor='var(--foreground-rgb)'>
                <VerticalTimelineElement
                    visible={view}
                    className="vertical-timeline-element--work"
                    lineColor="red"
                    contentStyle={{ background: 'var(--foreground-rgb)', color: 'var(--background-end-rgb' }}
                    contentArrowStyle={{ borderRight: '7px solid  var(--foreground-rgb)' }}
                    date="2011 - present"
                    iconStyle={{ background: 'var(--foreground-rgb)', color: 'var(--background-end-rgb)', borderColor: 'var(--background-end-rgb)', borderWidth: '2px' }}
                    icon={<BusinessCenterIcon/>}
                >
                    <div className="vertical-timeline-element-title font-bold mt-2 mb-2">Coordinator</div>
                    <a href='https://github.com/pixonoids' className='vertical-timeline-element-subtitle ' target='_blank'>Pixonoids</a>
                    <p>
                        Collaborated with the team to develop college fest websites and mentored fellow students in web development.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    visible={view}
                    className="vertical-timeline-element--work"
                    lineColor="red"
                    contentStyle={{ background: 'var(--foreground-rgb)', color: 'var(--background-end-rgb' }}
                    contentArrowStyle={{ borderRight: '7px solid  var(--foreground-rgb)' }}
                    date="2011 - present"
                    iconStyle={{ background: 'var(--foreground-rgb)', color: 'var(--background-end-rgb)', borderColor: 'var(--background-end-rgb)', borderWidth: '2px' }}
                    icon={<BusinessCenterIcon />}
                >
                    <div className="vertical-timeline-element-title font-bold mt-2 mb-2">Competitive Programmar</div>
                    <div className='mt-2'>
                        1. Solved 700+ problems on <a href='https://leetcode.com/aditya3435/' target='_blank'>Leetcode</a>
                        <br />
                        2. 3 star coder on <a href='https://codechef.com/users/aditya3435' target='_blank'>Codechef</a>
                        <br /> 
                        3. Pupil at <a href='https://codeforces.com/profile/aditya3435' target='_blank'>Codeforces</a> (rating 1223)
                    </div>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    )
}

export default Experience