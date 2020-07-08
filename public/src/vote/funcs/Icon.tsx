import React from "react";

 export default function Icon(prop:any){
 	var obj={
 		wallet:()=>{
 			return(
					<svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" d="M2 4v8.5A1.5 1.5 0 0 0 3.5 14h10a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 1 1 0v8a1.5 1.5 0 0 1-1.5 1.5h-10A2.5 2.5 0 0 1 1 12.5V4h1z" />
						<path fillRule="evenodd" d="M1 4a2 2 0 0 1 2-2h11.5a.5.5 0 0 1 0 1H3a1 1 0 0 0 0 2h11.5v1H3a2 2 0 0 1-2-2z" />
						<path fillRule="evenodd" d="M13 5V3h1v2h-1z" />
					</svg>
 				)
 		},
 		tick:()=>{
 			return(
					<svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
						<path fillRule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z" />
					</svg>
 				)
 		},
 		code:()=>{
 			return(
					<svg  width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" d="M5.854 4.146a.5.5 0 0 1 0 .708L2.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm4.292 0a.5.5 0 0 0 0 .708L13.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
					</svg>
 				)
 		},
 		user:()=>{
 			return(
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -10 48 48" width="80px" height="100px"><path d="M38.999,25H38v9h1.333c0.975,0,1.808-0.703,1.972-1.664l0.653-3.832	C42.269,26.672,40.857,25,38.999,25z" fill="#f1dcdc"></path><path d="M9.001,25H10v9H8.667c-0.975,0-1.808-0.703-1.972-1.664l-0.653-3.832	C5.731,26.672,7.143,25,9.001,25z" fill="#f1dcdc"></path><path d="M24,6C16.598,6,9,9,9,25c0,1.281,0,5.92,0,7.288C9,38,18,45,24,45s15-7,15-12.712	c0-1.368,0-6.007,0-7.288C39,9,31.402,6,24,6z" fill="#f1dcdc"></path><path d="M24,4c-7.982,0-10,3-10,3c-3.245,0.479-7,4.566-7,10c0,3.032,0.653,4.439,2,12c1-12,2-16,4-16	c3,0,3,2,11.778,2C29.801,15,32,13,34,13c5,0,5,14.108,5,16c0.806-7.405,1-9.351,1-12C40,10.712,35.383,4,24,4z" fill="#800006"></path><path d="M24,3c-7.982,0-10,4-10,4c-0.08,2.125,1,4,1,4s1.46,3,9.778,3C29.801,14,37,11.003,37,3	C37,3,35.383,3,24,3z" fill="#800006"></path></svg>)
 		}
 	}

 	var Ico=obj[prop.ico]
 	return(
 		<i className="FIcon"><Ico/></i>
 		)
}