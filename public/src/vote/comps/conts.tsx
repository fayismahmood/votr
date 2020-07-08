import React,{useState} from "react";
import Icon from "../funcs/Icon"
import Slbut from "../comps/selBut"
import { postData } from "../../funcs/main"

export default class Conts extends React.Component{
	constructor(prop:any){
		super(prop)
		this.state={
			AllVoted: false,
			Vots:[],
			Cont:[],
			sec:[]
		}

		
		
		this.chang=this.chang.bind(this)
		this.ProCants=this.ProCants.bind(this)

		
	
	}

	chang(sid:number,key:number){
		
		var _Vots = this.state.Vots.slice();
		_Vots[sid]=key
		this.setState({
			Vots:_Vots
		},function(){
			console.log(this.state.Vots)
			var aa=this.state.Vots.filter(e=>e=="undefined")
			if(aa.length==0){
				this.setState({
					AllVoted:true
				})
				console.log(this.state.Vots)
			}
		})


		
	}
	async componentWillMount() {
		var _data = await postData('../Setting', { user: "ft" })
		var Cont = _data.Cont
		var sec= _data.sec;
		
		
		var CBS={}
		for(var e_sec in sec){
			CBS[sec[e_sec]]=Cont.filter(e=>{return e.sec==sec[e_sec]})
		}
		this.setState({
			Cont:CBS,
			sec
		},function(){
			for(var _sec in this.state.sec){
				this.state.Vots[_sec] = "undefined";
			}
			
		})
		//console.log(this.state)

		
	}
	ProCants(){
		var Cont=this.state.Cont
		return Object.keys(Cont).map((e,i)=>{
			return(<Slbut ico="wallet" key={e} cont={e} sid={i} st={this.chang} conts={Cont[e]} />);
		})
	}
	render(){
		return(
			<div className="_cont">
								

				<h1>CHOOSE YOUR LEADER</h1>
				<div>
					<div className="CantClass"> 
						{this.ProCants()}
					</div>

					{this.state.AllVoted &&
					<button onClick={()=>{
						postData('./addVote', { user: "ft", voter: V_data.email, votes:this.state.Vots })
							.then(data => {
								alert("You Succssfully voted")
								// JSON data parsed by `response.json()` call
						});

					}}>
						<Icon ico="tick" />Paerllll votes</button>
					}
				</div>

			</div>
			):
	}
}
