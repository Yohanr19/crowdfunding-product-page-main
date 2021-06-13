import React, { Component } from 'react'
import Header from './Header'
import Body from './Body'
import Modal from './Modal'
import Success from './Success'
import iconClose from './images/icon-close-menu.svg'
import iconHam from './images/icon-hamburger.svg'
const isNotNumber = new RegExp("[^0-9]", "g")

export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            modalDisplay: false,
            isModalOnHover: false,
            menuDisplay: false,
            menuIcon: iconHam,
            pledge:[1,25,75,200],
            minPledge: [1,25,75,200],
            errorMessage: '',
            sucessDisplay: false,
            totalBackers: 5007,
            amountBacked: 89914,
        } 
        this.selectBtnHandler = this.selectBtnHandler.bind(this);
        this.modalCloseBtnHandler= this.modalCloseBtnHandler.bind(this);
        this.modalMouseHoverHandler=this.modalMouseHoverHandler.bind(this);
        this.modalMouseOutHandler= this.modalMouseOutHandler.bind(this);
        this.modalClickHandler=this.modalClickHandler.bind(this);
        this.closeMenu=this.closeMenu.bind(this);
        this.openMenu=this.openMenu.bind(this);
        this.menuToggle=this.menuToggle.bind(this);
        this.OnChangeHandler= this.OnChangeHandler.bind(this);
        this.inputValidate= this.inputValidate.bind(this);
        this.clearMessage = this.clearMessage.bind(this);
        this.sucessCloseBtn = this.sucessCloseBtn.bind(this);
    }
    selectBtnHandler(e){
        this.setState( {modalDisplay: true} )
        this.closeMenu();
    }
    modalCloseBtnHandler(e) {
        this.setState( {modalDisplay: false} )
    }
    modalMouseHoverHandler(e) {
        this.setState({isModalOnHover: true})
    }
    modalMouseOutHandler(e){
        this.setState({isModalOnHover: false})
    }
    modalClickHandler(e){
        if(!e.target.matches('#modal')) e.stopPropagation();
        else{  
            this.setState({modalDisplay: false})
        }
    }
    closeMenu(e){
        this.setState({menuDisplay: false,menuIcon: iconHam})
    }
    openMenu(e) {
        this.setState({menuDisplay: true, menuIcon: iconClose})
    }
    menuToggle(e){
        if (this.state.menuDisplay) this.closeMenu();
        else {
            this.openMenu();
        }
    }
    OnChangeHandler(num, e){
        let tempArray= [...this.state.pledge];
        tempArray[num] = e.target.value;
        this.setState({pledge:tempArray})
        this.clearMessage(e);
    }
    formSubmit(e){
        e.preventDefault();
    }
    inputValidate(num, e){
        let value = e.target.previousSibling.firstChild.nextSibling.firstChild.value
        if(value ===""){
            this.setState({errorMessage: 'Please fill this field'})
            return; 
        }
        if(isNotNumber.test(value)){
            this.setState({errorMessage: value+'is not a number'})
            return;
        }
        if (value < this.state.minPledge[num]) {
            this.setState({errorMessage:'Pledge must be higher than'+this.state.minPledge[num]+'$'})
            return;
        }
        let newBackers = this.state.totalBackers+1;
        let backedAmount = this.state.amountBacked+(Number(value));
        this.setState({totalBackers:newBackers})
        this.setState({amountBacked:backedAmount})
        this.setState({errorMessage:''})
        this.setState({sucessDisplay:true})
        this.setState({modalDisplay: false})
    }
    clearMessage() {
        this.setState({errorMessage: ''})
    }
    sucessCloseBtn(e) {
        this.setState({sucessDisplay:false})
    }
    addComma(num) {
        if (num === null) return;
        return (
          num
            .toString() 
            .split("") 
            .reverse() 
            .map((digit, index) =>
              index !== 0 && index % 3 === 0 ? `${digit},` : digit
             ) 
            .reverse() 
            .join("")
        );
      }

    render() {
        return (
            <div>
                <Header icon={this.state.menuIcon} display={this.state.menuDisplay} menuToggle={this.menuToggle}/>
                <Body btnClickHandler={this.selectBtnHandler}
                backers = {this.addComma(this.state.totalBackers)}
                amountBacked= {this.addComma(this.state.amountBacked)}
                progress= {(this.state.amountBacked/100000)*100}
                />
                <Modal 
                formSubmit ={this.formSubmit}
                onChange = {this.OnChangeHandler}
                display={this.state.modalDisplay}
                minPledge={this.state.minPledge}
                pledge= {this.state.pledge} 
                closeBtn= {this.modalCloseBtnHandler} 
                mouseOver = {this.modalMouseHoverHandler} 
                mouseOut = {this.modalMouseOutHandler} 
                onClick= {this.modalClickHandler}
                inputClick={this.inputValidate} 
                errorMessage={this.state.errorMessage}
                clearMessage={this.clearMessage}/>
                <Success display={this.state.sucessDisplay}
                closeHandler={this.sucessCloseBtn}
                />
            </div>
        )
    }
}
