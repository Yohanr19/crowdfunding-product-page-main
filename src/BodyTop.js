import React from 'react'
import mastercraft from './images/logo-mastercraft.svg'
import bookmark from'./images/icon-bookmark.svg'
import './BodyTop.css'

const BodyTop = (props) => {
    return (
        <div id='body-top'> 
        <img className='mastercraft' src={mastercraft} alt='mastercraft icon'/>
         <h1>Mastercraft Bamboo Monitor Riser</h1>   
         <p> A beautifully handcrafted monitor stand to reduce neck and eye strain.</p>
         <div>
         <button
         onClick= {props.btnClickHandler}
          id='top-btn'>Back this project</button> 
        <img src={bookmark} className='selected' alt='bookmark-img'></img>
         </div>
        </div>
    )
}

export default BodyTop
