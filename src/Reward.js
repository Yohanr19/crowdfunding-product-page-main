import React from 'react'
import './Reward.css'

const Reward = (props) => {
    let formSubmit = ()=> {}
    let inputClick = ()=> {}
    if (props.type==='modal') {
    formSubmit = props.formSubmit;
    inputClick = props.inputClick;
    }    
            return (
                <div className={'reward '+
                (props.amount>0?'normal ':'grey-filter ')+(props.selected===true?'selected':'no-selected') }
                
                  onClick={()=> props.onClick(props.elem)}>
                    <div className='pledge-header' style={props.type==='front'?{display:'none'}:{display:'flex'}}>
                        <div className='choise outro'>
                                <div className= 'choise inner'
                                style={props.selected===true?{backgroundColor: 'var(--DarkCyan)'}:{backgroundColor:'white'}}>
                                </div>
                        </div>
                        <div>
                     <h3>{props.name}</h3>
                    <h4 style={props.isRewarded===false?{display:'none'}:{display:'block'}}>Pledge ${props.minPledge} or more</h4>
                        </div>
                    </div>
                    <p>{props.definition}</p>
                    <p style={props.isRewarded===false?{display:'none'}:{display:'block'}}>
                        <strong>{props.amount}</strong>left</p>
                    <button className={props.amount>0?'stock':'no-stock'} 
                    style={props.type==='modal'?{display:'none'}:{display:'block'}}
                    onClick= {props.btnClickHandler}
                    >
                    {props.amount>0?'Select Reward':'Out of Stock'}
                    </button>
                    <form onSubmit={formSubmit} style={props.selected===true?{display:'block'}:{display:'none'}} className='pledge-form'>
                         <p>Enter your pledge</p>
                         <div style={{display: 'flex', placeItems:'center'}}>
                             <div className='pledge-input-container'>
                                $<label><input 
                                onChange={(e)=> props.onChange(props.elem,e)}
                                className='pledge-input' type='text' value={props.pledge}></input></label> 
                                <h7 className='error-message'>{props.errorMessage}</h7>
                             </div>
                             <button onClick={(e)=>inputClick(props.elem, e)} type='submit' className='submit-btn'>
                                    Continue
                             </button>
                         </div>
                    </form>
                </div>
                )    
        
         
    
}

export default Reward
