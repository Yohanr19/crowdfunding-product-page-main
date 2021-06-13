import React from 'react'
import './Stats.css'
const Stats = (props) => {
let progress = props.progress
if(progress> 100) progress=100;
let progressString = progress+'%';
    return (
        <div id='stats'>
            <div className='stat-container'>
            <div className='stat'>
                <h4> 
                    ${props.amountBacked}
                </h4>
                <p>
                    of $100,000 backed
                </p>
            </div>
         <div className='stat'>
                <h4>
                    {props.totalBackers}
                </h4>
                <p>
                    total backers
                </p>
            </div >
            <div className='stat'>
                <h4>
                        {props.daysLeft}
                </h4>
                <p>
                    days left
                </p>
            </div>
            </div>
            <div id='progress-container'> 
                <div className='bar'> 
                <div className='bar-progress' style={{width:progressString}}></div>
                </div>
            </div>
        </div>
    )
}
export default Stats