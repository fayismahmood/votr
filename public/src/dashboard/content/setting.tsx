import React,{useState} from "react";
import "./setting.scss";

import { postData, aa } from "../../funcs/main"



class Setting extends React.Component {
	
	constructor(prop:any) {
		super(prop)

		this.state={
			_data:{
				user:"",
				pass:"",
				_id:"",
				el_name:"",
				name:"",
				img:"",
				sec:[]
			}
		}

		this._onChange=this._onChange.bind(this)
		this._imgFile = this._imgFile.bind(this)
		this._onclick = this._onclick.bind(this)


	}

	_onclick(){

		var _keys=[]
		var _vals=[]
		for(var _e in this.state._data){
			_keys.push(_e)
			_vals.push(this.state._data[_e])
		}
		
		postData('./update', { user:"ft",obj:_keys,objVal:_vals })
          .then(data => {
            console.log(data); 
          });
	}
	_onChange(obj:any,dom:any){
		var Obj_data = Object.assign(this.state._data)
		Obj_data[obj] = dom.target.value
		this.setState({
			_data: Obj_data
		})
	}

	_imgFile(e:any){
		var _this = e.target;
		var reader = new FileReader();
		reader.onload=()=>{
			var Obj_data = Object.assign(this.state._data)
			Obj_data["img"] = reader.result
			this.setState({
				_data:Obj_data
			})
		}
		reader.readAsDataURL(_this.files[0])

	}

	async componentWillMount() {
		var _data = await postData('./Setting', { user: "ft" })
		this.setState({
			_data
		})
		
	}
	CurrSect=()=>{
			console.log("dddddd",this.state.sec)
			return this.state._data.sec.map(e=><div>{e}</div>)
		}
	render(){
		var addSect={
			openDia:(e:any)=>{
				var el=e.target.parentElement;
				
				var div=document.createElement("div")
				var input=document.createElement("input");
				input.setAttribute("type","text");
				
				var btn=document.createElement("button");
				btn.textContent="add"
				
				div.appendChild(input);
				div.appendChild(btn)
				div.setAttribute("style","position:absolute")
				
				btn.onclick=()=>{
					
						postData('./addSec', { user: "ft",sec:input.value})
						  .then(data => {
						    console.log(data);
							var N_sec=this.state._data.sec.slice()
							N_sec.push(input.value)
							this.setState({
								_data:{sec:N_sec}
							}) 
						  	div.remove()
							});
				
				}
				el.append(div)
				console.log(div)				
			}
		}
		return (
			<div className="setting">
				<div className="heading">
					Setting
			</div>
				<div className="_cont">
					<input value={this.state._data.name} onChange={(e)=>{this._onChange("name",e)}} id="_name" placeholder="name" type="text" />
					<input id="_election" onChange={(e) => { this._onChange("el_name", e) }} value={this.state._data.el_name} placeholder="Election" type="text" />
					<input id="_fileToUP" style={{display:"none"}} onChange={e=>{this._imgFile(e)}} placeholder="upload icon" type="file" />
					<div style={{cursor:"pointer",borderRadius:"50%",overflow:"hidden",position:"relative",width:"60px",height:"60px"}}>
						<img width="60px" height="60px" style={{position:"absolute",top:"-5px",left:"-5px"}} onClick={e => { document.querySelector("#_fileToUP").click() }} src={this.state._data.img} />
					</div>
					<div className="secs">
						<div>Sections</div>
						<div style={{overflow:"auto",maxHeight: "150px"}}>{this.CurrSect()}</div>
						<button style={{padding:"5px"}} onClick={(e)=>{addSect.openDia(e)}}>Add Section</button>
					</div>
					
					<button onClick={this._onclick} id="Update_sett">Update</button>
				</div>

			</div>

		)
	}
}


export default Setting