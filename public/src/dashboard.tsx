import React from "react";
import ReactDom from "react-dom";

import Header from "./dashboard/header"
import Content from "./dashboard/content"




export default function App(){
	return(
		<div>
			<Header/>
			<Content/>
		</div>
		)
}



ReactDom.render(<App />, document.querySelector("#Dahsboard"))
