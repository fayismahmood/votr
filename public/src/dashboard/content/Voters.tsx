import React,{useState} from "react";
import "./Voters.scss";
import { postData } from "../../funcs/main"
import jsonwebtoken from 'jsonwebtoken';









export default class Voters extends React.Component{
	constructor(prop:any){
		super(prop);
		this.state={
			Voters:[],
			AddVoterOn:false
		}


		this.OnClickAdd = this.OnClickAdd.bind(this)
		this.adder = this.adder.bind(this)


	}
	async componentWillMount(){
		var _data = await postData('http://localhost:3000/Setting', { user: "ft" })
		var Voters = _data.voters
		this.setState({
			Voters
		})
		console.log(this.state)
	}
	link(link:any){
		return(
			<div>
				{link}
			</div>
			)
	}
	voters(){
		var Voters=this.state.Voters
		return Voters.map((e) => { 
			return(
				<div className="_EVoters">
					<img src={e.img}></img>
					<div className="_EVoters_name">
						{e.name}
					</div>
					<div className="_EVoters_email">
						{e.email}
					</div>
					 <a href={"http://localhost:3000/vote/" + jsonwebtoken.sign({"name": e.name, "email": e.email }, 'shhhhh') }>open your link</a>
					<div>
					</div>
				</div>

				)
		 })
			
	}
	addVoter(data){
		postData('http://localhost:3000/addVoter', { user: "ft", name: data.name, email: data.email,img:data.img })
			.then(cb => {
				var _Voters = this.state.Voters.slice()
				_Voters.push(data)
				this.setState({
					Voters:_Voters
				})
				console.log(cb); // JSON data parsed by `response.json()` call
		});
	}
	adder(){
		var HideDia=()=>{
			this.setState({
				AddVoterOn: false
			})

			document.body.style.overflow="auto"
		}
		var _data={
			name:"",
			email:"",
			img:""
		}
		document.body.style.overflow="hidden"
		var file=React.createRef()
		return(
			<div onClick={HideDia} className="Dia">
				<div  onClick={(e)=>{e.stopPropagation()}}  className="voter_adder">
					Add Voter
					<input type="text" placeholder="name" onChange={(e)=>{_data.name=e.target.value}} />
					<input type="text" placeholder="email" onChange={(e) => { _data.email = e.target.value }} />
					<input ref={file} style={{display:"none"}} type="file" onChange={(e)=>{
						var _this = e.target;
						var reader = new FileReader();
						reader.onload = () => {
							_data.img=reader.result
						}
						reader.readAsDataURL(_this.files[0])
					}} />
					<button onClick={(e)=>{file.current.click()}}>
						select Pic
					</button>
					<button onClick={(e) => { this.addVoter(_data); HideDia();console.log("Dfasd") }}>add</button>
				</div>

			</div>
			)
	}
	OnClickAdd(){
		this.setState({
			AddVoterOn:true
		})
	}
	
	render(){
		return (
			<div className="Voters">
				<div className="heading">
					Voters
					<button className="addBut" onClick={this.OnClickAdd}>
						<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z" />
							<path fillRule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z" />
							<path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
						</svg>	
					</button>
				</div>
				<div className="_cont">
			
					{this.voters()}
				</div>
				{
					this.state.AddVoterOn&&
					<this.adder/>

				}
			</div>

		)
	}
}