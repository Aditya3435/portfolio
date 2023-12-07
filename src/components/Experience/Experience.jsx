import React, { useRef } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import AnchorIcon from '@mui/icons-material/Anchor';
import 'react-vertical-timeline-component/style.min.css'
import { inView, useInView } from 'framer-motion';
import './Experience.scss'
function Experience() {
    const ref = useRef(null);
    const view = useInView(ref);
    return (
        <div className='flex flex-col items-center justify-center gap-8 w-screen h-screen' ref={ref}>
            <h1 className='text-5xl mt-20'>Experience</h1>
            <VerticalTimeline lineColor='var(--foreground-rgb)'>
                <VerticalTimelineElement
                    visible={view}
                    className="vertical-timeline-element--work"
                    lineColor="red"
                    contentStyle={{ background: 'var(--foreground-rgb)', color: 'var(--background-end-rgb' }}
                    contentArrowStyle={{ borderRight: '7px solid  var(--foreground-rgb)' }}
                    date="2011 - present"
                    iconStyle={{ background: 'var(--foreground-rgb)', color: 'var(--background-end-rgb)', borderColor: 'var(--background-end-rgb)', borderWidth: '2px' }}
                    icon={<AnchorIcon />}
                >
                    <h2 className="vertical-timeline-element-title">Coordinator</h2>
                    <h4 className="vertical-timeline-element-subtitle"><a href='https://github.com/pixonoids'>Pixonoids</a></h4>
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
                    icon={<AnchorIcon />}
                >
                    <h2 className="vertical-timeline-element-title">Competitive Programmar</h2>
                    <p>
                        1. Solved 700+ problems on Leetcode
                        <br />
                        2. 3 star coder on Codechef
                        <br />
                        3. Pupil at codeforces (rating 1223)
                    </p>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    )
}

export default Experience