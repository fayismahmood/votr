import React,{useState} from "react";

import "./content.scss";

import Setting from "./content/setting";
import Voters from "./content/Voters";
import Contest from "./content/contest";
import Result from "./content/result";




export default class Content extends React.Component {
	
	constructor(props:any) {
		super(props)	
		this.state={}

	}
	
	

	render() {
		return(
			<div className="content">

				<Setting/>
				<div className="Add_sec">
					<Voters/>
					<Contest/>
				</div>
				<Result/>

			</div>
			)
	}
}