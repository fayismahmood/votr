import React from "react";
import Icon from "../funcs/Icon"

export default function Side(){
	return(
		<div className="_Side">
			<div className="Heading">
				<Icon ico="wallet"/>
				<div>
					MISBAH<br/>UNION<br/>ELECTION
				</div>
			</div>
			<div className="userInfo">
				<div className="Avath">
					
				</div>
				<div>
					{V_data.name}<br/>
					<span>{V_data.email}</span>
				</div>
			</div>
			
		</div>

		)
}
