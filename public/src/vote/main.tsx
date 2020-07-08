import React from "react";
import ReactDom from "react-dom";


import Conts from "./comps/conts";
import Side from "./comps/Side";

import "./scss/main.scss";


export default function App(){
	return(

		<div className="_Main">
			<Side/>
			<Conts/>
		</div>
		)
}




