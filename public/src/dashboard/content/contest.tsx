import React, { useState } from "react";
import "./Voters.scss";
import { postData, aa } from "../../funcs/main"






export default class Conts extends React.Component {
	constructor(prop: any) {
		super(prop);
		this.state = {
			Cont: [],
			sec:[],
			AddContOn: false
		}


		this.OnClickAdd = this.OnClickAdd.bind(this)
		this.adder = this.adder.bind(this)


	}
	async componentWillMount() {
		var _data = await postData('./Setting', { user: "ft" })
		var Cont = _data.Cont
		var sec= _data.sec;
		this.setState({
			Cont,
			sec
		})
		console.log(this.state)
	}
	voters() {
		var Cont = this.state.Cont
		return Cont.map((e) => {
			return (
				<div className="_EVoters">
					<img src={e.img}></img>
					<div className="_EVoters_name">
						{e.name}
					</div>
					<div className="_EVoters_email">
						{e.email}
					</div>
					<div style={{position:"absolute",right:"0"}}>
						{e.sec}
					</div>
				</div>

			)
		})

	}
	addVoter(data:any) {
		console.log(data)
		postData('./addCont', { user: "ft", name: data.name, email: data.email, img: data.img,sec:data.sec })
			.then(cb => {
				var _Cont = this.state.Cont.slice()
				_Cont.push(data)
				this.setState({
					Cont: _Cont
				})
				console.log(cb);
				// JSON data parsed by `response.json()` call
			});
	}
	adder() {
		var HideDia = () => {
			


			this.setState({
				AddContOn: false
			})
			document.body.style.overflow="auto"

		}
		var _data = {
			name: "",
			email: "",
			img: "",
			sec:""
		}
		document.body.style.overflow="hidden"
		var file = React.createRef()
		
		var CurrSect=()=>{
			return this.state.sec.map(e=><option>{e}</option>)
		}
		return (
			<div onClick={HideDia} className="Dia">
				<div onClick={(e)=>{e.stopPropagation()}} className="voter_adder">
					Add Voter
					<input type="text" placeholder="name" onChange={(e) => { _data.name = e.target.value }} />
					<input type="text" placeholder="email" onChange={(e) => { _data.email = e.target.value }} />
					<div>
						<select  placeholder="section" onChange={(e) => { _data.sec = e.target.value;}}>
							<option disabled selected> -- select an option -- </option>
							{CurrSect()}
						</select>
					</div>

					<input ref={file} style={{ display: "none" }} type="file" onChange={(e) => {
						var _this = e.target;
						var reader = new FileReader();
						reader.onload = () => {
							_data.img = reader.result
						}
						reader.readAsDataURL(_this.files[0])
					}} />
					<button onClick={(e) => { file.current.click() }}>
						select Pic
					</button>
					<button onClick={(e) => { this.addVoter(_data); HideDia(); console.log("Dfasd") }}>add</button>
				</div>

			</div>
		)
	}
	OnClickAdd() {
		this.setState({
			AddContOn: true
		})
	}

	render() {
		return (
			<div className="Voters">
				<div className="heading">
					Conts
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
					this.state.AddContOn &&
					<this.adder />

				}
			</div>

		)
	}
}