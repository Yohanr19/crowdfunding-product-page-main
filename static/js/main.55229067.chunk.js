(this["webpackJsonpcrowdfunding-product-page"]=this["webpackJsonpcrowdfunding-product-page"]||[]).push([[0],[,,,,,,,,,function(e,t,s){},,,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(1),i=s(10),n=s.n(i),o=s(7),l=s(3),c=s(4),r=s(2),d=s(6),p=s(5),u=s.p+"static/media/logo.e6f12bc6.svg",h=(s(15),s(16),s(0)),m=function(e){return Object(h.jsxs)("div",{id:"menu",className:e.display?"show":"hide",children:[Object(h.jsx)("a",{href:"#about",children:"About"}),Object(h.jsx)("a",{href:"#body-top",children:"Discover"}),Object(h.jsx)("a",{onClick:e.modalOn,href:"#modal",children:"Get Started"})]})},b=function(e){Object(d.a)(s,e);var t=Object(p.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(h.jsxs)("div",{id:"header",children:[Object(h.jsxs)("div",{className:"header-section",children:[Object(h.jsx)("img",{id:"logo",src:u,alt:"logo"}),Object(h.jsx)("img",{onClick:this.props.menuToggle,id:"iconHam-Close",src:this.props.icon,alt:""})]}),Object(h.jsx)(m,{display:this.props.display,modalOn:this.props.modalOn})]})}}]),s}(a.Component),j=s.p+"static/media/logo-mastercraft.dca2a831.svg",g=s.p+"static/media/icon-bookmark.7777f8ec.svg",f=(s(18),function(e){return Object(h.jsxs)("div",{id:"body-top",children:[Object(h.jsx)("img",{className:"mastercraft",src:j,alt:"mastercraft icon"}),Object(h.jsx)("h1",{children:"Mastercraft Bamboo Monitor Riser"}),Object(h.jsx)("p",{children:" A beautifully handcrafted monitor stand to reduce neck and eye strain."}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{onClick:e.btnClickHandler,id:"top-btn",children:"Back this project"}),Object(h.jsx)("img",{src:g,className:"selected",alt:"bookmark-img"})]})]})}),k=(s(9),s(19),function(e){var t=e.progress;t>100&&(t=100);var s=t+"%";return Object(h.jsxs)("div",{id:"stats",children:[Object(h.jsxs)("div",{className:"stat-container",children:[Object(h.jsxs)("div",{className:"stat",children:[Object(h.jsxs)("h4",{children:["$",e.amountBacked]}),Object(h.jsx)("p",{children:"of $100,000 backed"})]}),Object(h.jsxs)("div",{className:"stat",children:[Object(h.jsx)("h4",{children:e.totalBackers}),Object(h.jsx)("p",{children:"total backers"})]}),Object(h.jsxs)("div",{className:"stat",children:[Object(h.jsx)("h4",{children:e.daysLeft}),Object(h.jsx)("p",{children:"days left"})]})]}),Object(h.jsx)("div",{id:"progress-container",children:Object(h.jsx)("div",{className:"bar",children:Object(h.jsx)("div",{className:"bar-progress",style:{width:s}})})})]})}),O=(s(20),function(){return Object(h.jsxs)("div",{id:"about",children:[Object(h.jsx)("h3",{children:"About this project"}),Object(h.jsx)("p",{children:"The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand."}),Object(h.jsx)("p",{children:"Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand."})]})}),y=(s(21),function(e){var t=function(e){e.preventDefault()},s=function(){},a=function(){};return e.amount>0&&(a=e.btnClickHandler),"modal"===e.type&&e.amount>0&&(t=e.formSubmit,s=e.inputClick),Object(h.jsxs)("div",{className:"reward "+(e.amount>0?"normal ":"grey-filter ")+(!0===e.selected?"selected":"no-selected"),onClick:function(){return e.onClick(e.elem)},children:[Object(h.jsxs)("div",{className:"pledge-header",children:[Object(h.jsx)("div",{className:"choise outro",style:"front"===e.type?{display:"none"}:{display:"block"},children:Object(h.jsx)("div",{className:"choise inner",style:!0===e.selected?{backgroundColor:"var(--DarkCyan)"}:{backgroundColor:"white"}})}),Object(h.jsxs)("div",{className:"name-pledge",children:[Object(h.jsx)("h3",{children:e.name}),Object(h.jsxs)("h4",{style:!1===e.isRewarded?{display:"none"}:{display:"block"},children:["Pledge $",e.minPledge," or more"]})]})]}),Object(h.jsx)("p",{children:e.definition}),Object(h.jsxs)("div",{className:"amount-btn",children:[Object(h.jsxs)("p",{style:!1===e.isRewarded?{display:"none"}:{display:"block"},children:[Object(h.jsx)("strong",{children:e.amount}),"left"]}),Object(h.jsx)("button",{className:e.amount>0?"stock":"no-stock",style:"modal"===e.type?{display:"none"}:{display:"block"},onClick:a,children:e.amount>0?"Select Reward":"Out of Stock"})]}),Object(h.jsxs)("form",{onSubmit:t,style:!0===e.selected?{display:"block"}:{display:"none"},className:"pledge-form",children:[Object(h.jsx)("p",{children:"Enter your pledge"}),Object(h.jsxs)("div",{className:"container-input-btn",style:{display:"flex",placeItems:"center"},children:[Object(h.jsxs)("div",{className:"pledge-input-container",children:["$",Object(h.jsx)("label",{children:Object(h.jsx)("input",{onChange:function(t){return e.onChange(e.elem,t)},className:"pledge-input",type:"text",value:e.pledge})}),Object(h.jsx)("div",{className:"error-message",children:e.errorMessage})]}),Object(h.jsx)("button",{onClick:function(t){return s(e.elem,t)},type:"submit",className:"submit-btn",children:"Continue"})]})]})]})}),v=function(e){Object(d.a)(s,e);var t=Object(p.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={},a}return Object(c.a)(s,[{key:"rewardClickHandler",value:function(e){if(void 0===e)return!1}},{key:"render",value:function(){return Object(h.jsxs)("div",{id:"pageBody",children:[Object(h.jsx)(f,{btnClickHandler:this.props.btnClickHandler}),Object(h.jsx)(k,{amountBacked:this.props.amountBacked,totalBackers:this.props.backers,daysLeft:56,progress:this.props.progress}),Object(h.jsx)(O,{}),Object(h.jsxs)("div",{className:"reward-container",children:[Object(h.jsx)(y,{btnClickHandler:this.props.btnClickHandler,type:"front",onClick:this.rewardClickHandler,name:"Bamboo Stand",minPledge:this.props.minPledge[1],definition:"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you\u2019ll be added to a special Backer member list.",amount:this.props.amountLeft[0]}),Object(h.jsx)(y,{onClick:this.rewardClickHandler,btnClickHandler:this.props.btnClickHandler,type:"front",name:"Black Edition Stand",minPledge:this.props.minPledge[2],definition:"You get a Black Special Edition computer stand and a personal thank you. You\u2019ll be added to our Backer \r member list. Shipping is included.",amount:this.props.amountLeft[1]}),Object(h.jsx)(y,{onClick:this.rewardClickHandler,btnClickHandler:this.props.btnClickHandler,type:"front",name:"Mahogany Special Edition",minPledge:this.props.minPledge[3],definition:"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You\u2019ll be added \r to our Backer member list. Shipping is included.",amount:this.props.amountLeft[2]})]})]})}}]),s}(a.Component),x=s.p+"static/media/icon-close-modal.732388df.svg",C=function(e){Object(d.a)(s,e);var t=Object(p.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={isSelected:[!1,!1,!1,!1],pledge:Object(o.a)(a.props.pledge),minPledge:Object(o.a)(a.props.minPledge)},a.placeFocus=a.placeFocus.bind(Object(r.a)(a)),a}return Object(c.a)(s,[{key:"placeFocus",value:function(e){if(!0!==this.state.isSelected[e]){var t=this.state.isSelected.map((function(e){return!1}));t[e]=!0,this.setState({isSelected:t}),this.props.clearMessage()}}},{key:"render",value:function(){return Object(h.jsx)("div",{id:"modal",style:this.props.display?{display:"block"}:{display:"none"},onClick:this.props.onClick,children:Object(h.jsxs)("div",{id:"modal-content",children:[Object(h.jsxs)("div",{id:"back-project",children:[Object(h.jsxs)("div",{className:"back-project-top",children:[Object(h.jsx)("h3",{children:"Back this project"}),Object(h.jsx)("img",{onClick:this.props.closeBtn,id:"modal-close",src:x,alt:"Close Modal"})]}),Object(h.jsx)("p",{children:"Want to support us in brinding Mastercraft Bamboo Monitor Riser out in the world?"})]}),Object(h.jsx)(y,{elem:0,isRewarded:!1,selected:this.state.isSelected[0],onClick:this.placeFocus,onChange:this.props.onChange,formSubmit:this.props.formSubmit,inputClick:this.props.inputClick,type:"modal",name:"Pledge whit no reward",pledge:this.props.pledge[0],minPledge:this.state.minPledge[0],definition:"Choose to support us whitout a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",amount:1,errorMessage:this.props.errorMessage},0),Object(h.jsx)(y,{elem:1,selected:this.state.isSelected[1],onClick:this.placeFocus,onChange:this.props.onChange,inputClick:this.props.inputClick,type:"modal",name:"Bamboo Stand",pledge:this.props.pledge[1],minPledge:this.props.minPledge[1],formSubmit:this.props.formSubmit,definition:"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you\u2019ll be added to a special Backer member list.",amount:this.props.amount[0],errorMessage:this.props.errorMessage},1),Object(h.jsx)(y,{elem:2,selected:this.state.isSelected[2],onClick:this.placeFocus,onChange:this.props.onChange,formSubmit:this.props.formSubmit,inputClick:this.props.inputClick,type:"modal",name:"Black Edition Stand",pledge:this.props.pledge[2],minPledge:this.props.minPledge[2],definition:"You get a Black Special Edition computer stand and a personal thank you. You\u2019ll be added to our Backer \r member list. Shipping is included.",amount:this.props.amount[1],errorMessage:this.props.errorMessage},2),Object(h.jsx)(y,{elem:3,selected:this.state.isSelected[3],onClick:this.placeFocus,onChange:this.props.onChange,formSubmit:this.props.formSubmit,inputClick:this.props.inputClick,type:"modal",name:"Mahogany Special Edition",pledge:this.props.pledge[3],minPledge:this.props.minPledge[3],definition:"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You\u2019ll be added \r to our Backer member list. Shipping is included.",amount:this.props.amount[2],errorMessage:this.props.errorMessage},3)]})})}}]),s}(a.Component),S=s.p+"static/media/icon-check.bdee5269.svg",B=function(e){return Object(h.jsx)("div",{id:"modal-success",style:e.display?{display:"block"}:{display:"none"},children:Object(h.jsxs)("div",{id:"modal-success-content",children:[Object(h.jsx)("img",{src:S,alt:"DONE!"}),Object(h.jsx)("h2",{children:"Thanks for your support!"}),Object(h.jsx)("p",{children:"Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed. Got it!"}),Object(h.jsx)("button",{onClick:e.closeHandler,children:"Got it!"})]})})},M=s.p+"static/media/icon-close-menu.32169d31.svg",w=s.p+"static/media/icon-hamburger.f8a9f0cf.svg",H=new RegExp("[^0-9]","g"),P=function(e){Object(d.a)(s,e);var t=Object(p.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={modalDisplay:!1,isModalOnHover:!1,menuDisplay:!1,menuIcon:w,pledge:[1,25,75,200],minPledge:[1,25,75,200],errorMessage:"",sucessDisplay:!1,totalBackers:5007,amountBacked:89914,amountLeft:[101,64,0]},a.selectBtnHandler=a.selectBtnHandler.bind(Object(r.a)(a)),a.modalCloseBtnHandler=a.modalCloseBtnHandler.bind(Object(r.a)(a)),a.modalClickHandler=a.modalClickHandler.bind(Object(r.a)(a)),a.closeMenu=a.closeMenu.bind(Object(r.a)(a)),a.openMenu=a.openMenu.bind(Object(r.a)(a)),a.menuToggle=a.menuToggle.bind(Object(r.a)(a)),a.OnChangeHandler=a.OnChangeHandler.bind(Object(r.a)(a)),a.inputValidate=a.inputValidate.bind(Object(r.a)(a)),a.clearMessage=a.clearMessage.bind(Object(r.a)(a)),a.sucessCloseBtn=a.sucessCloseBtn.bind(Object(r.a)(a)),a}return Object(c.a)(s,[{key:"selectBtnHandler",value:function(e){this.setState({modalDisplay:!0}),window.scroll(0,0),this.closeMenu()}},{key:"modalCloseBtnHandler",value:function(e){this.setState({modalDisplay:!1})}},{key:"modalClickHandler",value:function(e){e.target.matches("#modal")?this.setState({modalDisplay:!1}):e.stopPropagation()}},{key:"closeMenu",value:function(e){this.setState({menuDisplay:!1,menuIcon:w})}},{key:"openMenu",value:function(e){this.setState({menuDisplay:!0,menuIcon:M})}},{key:"menuToggle",value:function(e){this.state.menuDisplay?this.closeMenu():this.openMenu()}},{key:"OnChangeHandler",value:function(e,t){var s=Object(o.a)(this.state.pledge);s[e]=t.target.value,this.setState({pledge:s}),this.clearMessage(t)}},{key:"formSubmit",value:function(e){e.preventDefault()}},{key:"inputValidate",value:function(e,t){var s=t.target.previousSibling.firstChild.nextSibling.firstChild.value;if(""!==s)if(H.test(s))this.setState({errorMessage:s+"is not a number"});else if(s<this.state.minPledge[e])this.setState({errorMessage:"Pledge must be higher than"+this.state.minPledge[e]+"$"});else{var a=this.state.totalBackers+1,i=this.state.amountBacked+Number(s),n=this.state.amountLeft.slice();n[e-1]--,this.setState({amountLeft:n}),this.setState({totalBackers:a}),this.setState({amountBacked:i}),this.setState({errorMessage:""}),this.setState({sucessDisplay:!0}),this.setState({modalDisplay:!1})}else this.setState({errorMessage:"Please fill this field"})}},{key:"clearMessage",value:function(){this.setState({errorMessage:""})}},{key:"sucessCloseBtn",value:function(e){this.setState({sucessDisplay:!1})}},{key:"addComma",value:function(e){if(null!==e)return e.toString().split("").reverse().map((function(e,t){return 0!==t&&t%3===0?"".concat(e,","):e})).reverse().join("")}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(b,{icon:this.state.menuIcon,display:this.state.menuDisplay,modalOn:this.selectBtnHandler,menuToggle:this.menuToggle}),Object(h.jsx)(v,{btnClickHandler:this.selectBtnHandler,backers:this.addComma(this.state.totalBackers),amountBacked:this.addComma(this.state.amountBacked),amountLeft:this.state.amountLeft,minPledge:this.state.minPledge,progress:this.state.amountBacked/1e5*100}),Object(h.jsx)(C,{formSubmit:this.formSubmit,onChange:this.OnChangeHandler,display:this.state.modalDisplay,minPledge:this.state.minPledge,pledge:this.state.pledge,closeBtn:this.modalCloseBtnHandler,onClick:this.modalClickHandler,inputClick:this.inputValidate,amount:this.state.amountLeft,errorMessage:this.state.errorMessage,clearMessage:this.clearMessage}),Object(h.jsx)(B,{display:this.state.sucessDisplay,closeHandler:this.sucessCloseBtn})]})}}]),s}(a.Component);s(22);n.a.render(Object(h.jsx)(P,{}),document.getElementById("app"))}],[[23,1,2]]]);
//# sourceMappingURL=main.55229067.chunk.js.map