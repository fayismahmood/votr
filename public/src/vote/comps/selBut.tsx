import React, { useState } from "react";
import Icon from "../funcs/Icon"
import Cants from "../comps/Cants"


export default class SelBut extends React.Component {
	constructor(props: any) {
		super(props)
		
		

	}
	ft(){
		return ["sdfa","asf"]
	}
	
	render() {
		return (

			<div className="_selBut">
				<div onClick={this.onClicked} className="headSide">
					<Icon ico={this.props.ico} />
					<div>
						{this.props.cont}
					</div>
				</div>
				<div className="Conts_area">
					<Cants sid={this.props.sid} st={this.props.st} cants={this.props.conts} />
					
				</div>
			</div>
		)
	}
}
