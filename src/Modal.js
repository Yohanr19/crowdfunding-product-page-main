import React, { Component } from 'react'

import closeBtn from './images/icon-close-modal.svg'
import Reward from './Reward'
import './Body.css'
export default class Modal extends Component {
    constructor(props){
      super(props);
      this.state= {
                 isSelected: [false,false,false,false],
                 pledge: [...this.props.pledge],
                 minPledge: [...this.props.minPledge],
      }
      this.placeFocus= this.placeFocus.bind(this);
    }
  placeFocus(num) {
    if(this.state.isSelected[num] === true) return;
    let selection = this.state.isSelected.map((item)=>{
      return false;
    })
    selection[num] = true;
    this.setState({isSelected: selection})
    this.props.clearMessage();

  }
    render () {
        return (
        <div id='modal' 
        style={!this.props.display?{display:'none'}:{display:'block'}}
        onClick= {this.props.onClick} >
                  <div id='modal-content'>
              <div id='back-project'>
                  <div className='back-project-top'>
                    <h3>
                        Back this project
                     </h3>
                     <img 
                     onClick= {this.props.closeBtn}
                     id='modal-close' src={closeBtn} alt='Close Modal'/> 
                       </div>
                  <p>
                    Want to support us in brinding Mastercraft Bamboo Monitor Riser out in the world?
                   </p>
                </div>
                <Reward 
                key = {0}
                elem = {0}
                isRewarded={false}
                selected={this.state.isSelected[0]}
                onClick = {this.placeFocus}
                onChange = {this.props.onChange}
                formSubmit = {this.props.formSubmit}
                inputClick= {this.props.inputClick}
                type='modal'
                name='Pledge whit no reward' 
                pledge={this.props.pledge[0]} 
                minPledge={this.state.minPledge[0]}
                definition="Choose to support us whitout a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
                amount={1}
                errorMessage={this.props.errorMessage}/>
              <Reward 
                key = {1}
                elem = {1}
                selected={this.state.isSelected[1]}
                onClick = {this.placeFocus}
                onChange = {this.props.onChange}
                inputClick= {this.props.inputClick}
                type='modal'
                name='Bamboo Stand' 
                pledge={this.props.pledge[1]} 
                minPledge={this.props.minPledge[1]}
                formSubmit = {this.props.formSubmit}
                definition="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
                amount={this.props.amount[0]}
                errorMessage={this.props.errorMessage}/>
                 <Reward 
                key = {2}
                elem = {2}
                  selected={this.state.isSelected[2]}
                  onClick = {this.placeFocus}
                  onChange = {this.props.onChange}
                  formSubmit = {this.props.formSubmit}
                  inputClick= {this.props.inputClick}
                 type='modal'
                 name='Black Edition Stand' 
                pledge={this.props.pledge[2]} 
                minPledge={this.props.minPledge[2]}
                definition="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
                member list. Shipping is included."
                amount={this.props.amount[1]}
                errorMessage={this.props.errorMessage}/>
                 <Reward 
               key = {3}
               elem = {3}
                 selected={this.state.isSelected[3]}
                 onClick = {this.placeFocus}
                 onChange = {this.props.onChange}
                 formSubmit = {this.props.formSubmit}
                 inputClick= {this.props.inputClick}
                 type='modal'
                 name='Mahogany Special Edition' 
                pledge={this.props.pledge[3]} 
                minPledge={this.props.minPledge[3]}
                definition="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
                to our Backer member list. Shipping is included."
                amount={this.props.amount[2]}
                errorMessage={this.props.errorMessage}/>
              </div>
              </div> 
        )
      }
}
