import React, { useState } from "react";
import Icon from "../funcs/Icon"



export default class Cants extends React.Component {
	constructor(props: any) {
		super(props)
		
		this.state = {
			Elm:null,
		}

	}
	onClickCantBut(e) {
		if(this.state.Elm==null){
			var el = e.currentTarget;
			//el.classList.add("ed")
			var _key = Number(el.getAttribute("contkey"));
			//const { Elm } = this.state;
			this.setState({
				Elm: _key
			})
			this.props.st(this.props.sid,_key)
		}
		
		
	}
	
	classing(e){
		if(e==this.state.Elm){
			return "ed";
		}else{
			return ""
		}
	}
	ShowCant(){
		
				return this.props.cants.map((i, e) => {
				return(

					<div onClick={this.onClickCantBut.bind(this)} contkey={e} className={"E_Cants "+this.classing(e)} key={i.name}>
						{i.img==""?<Icon ico="user" />:<img src={i.img}/>}
						
						<span>{i.name}</span>

					</div>
					)

				}
			)
	}

	
	render() {
		return (
			<div className="Cants">
				{this.ShowCant()}
			</div>
		)
	}
}
