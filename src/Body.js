import React, { Component } from 'react'
import BodyTop from './BodyTop'
import './Body.css'
import Stats from './Stats'
import About from './About'
import Reward from './Reward'


export default class Body extends Component {
    constructor(props){
        super(props);
        this.state= {
        }
    }
    rewardClickHandler(num){
        if (num===undefined){
            return false;
        }
        return
    }
    render() {
        return (
            <div id='pageBody'>
                <BodyTop btnClickHandler={this.props.btnClickHandler}/>
                <Stats amountBacked={this.props.amountBacked} totalBackers={this.props.backers} daysLeft={56} progress={this.props.progress}/>
                <About/>
                <div className='reward-container'>
                <Reward 
                btnClickHandler = {this.props.btnClickHandler}
                type='front'
                onClick= {this.rewardClickHandler}
                name='Bamboo Stand' 
                minPledge={this.props.minPledge[1]}
                definition="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
                amount={this.props.amountLeft[0]}
                />
                 <Reward 
                   onClick= {this.rewardClickHandler}
                 btnClickHandler = {this.props.btnClickHandler}
                 type='front'
                 name='Black Edition Stand' 
                 minPledge={this.props.minPledge[2]}
                definition="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
                member list. Shipping is included."
                amount={this.props.amountLeft[1]}/>
                 <Reward 
                   onClick= {this.rewardClickHandler}
                 btnClickHandler = {this.props.btnClickHandler}
                 type='front'
                 name='Mahogany Special Edition' 
                 minPledge={this.props.minPledge[3]}
                definition="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
                to our Backer member list. Shipping is included."
                amount={this.props.amountLeft[2]}/>
                </div>
            </div>
        )
    }
}
