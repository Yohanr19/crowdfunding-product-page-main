import React from 'react'
import './Body.css'
import check from './images/icon-check.svg'

const Success = (props) => {
    return (
        <div id='modal-success' style={props.display?{display: 'block'}: {display:'none'}} >
            <div id='modal-success-content'>
                <img src={check} alt='DONE!'/>
                <h2>Thanks for your support!</h2>
                <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
  an email once our campaign is completed.
  Got it!</p>
            <button onClick={props.closeHandler}>
                Got it!
            </button>

                
              </div>
        </div>
    )
}

export default Success
