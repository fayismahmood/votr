import React,{useState} from "react"
import "./result.scss"
import {postData} from "../../funcs/main"

export default class Result extends React.Component{
    constructor(prop:any){
        super(prop)
        this.state={
            aa:"dfdsafdf",
            result:{
                voters:0,
                votted:0,
                vot:{}
            }
        }

        this.ovrView=this.ovrView.bind(this)
        this.fullVote=this.fullVote.bind(this)
        this.showArr=this.showArr.bind(this)
    }
    async componentWillMount(){
        postData('./countVote', { user: "ft"})
          .then(data => {
            this.setState({
                result:data.data
            })
            console.log("sad",this.state); // JSON data parsed by `response.json()` call
          });

    }
    ovrView(){
       return(
           <div className="overView">
               <div> 
                    <span>VOTTED/voters</span>
                    <div>{this.state.result.votted}/{this.state.result.voters}</div>
               </div>
           </div>
       )
    }
    showArr(arr:any){
        return arr.map(e=>{
           return (<div className="_e_cant">
                       <img src={e.img}/>
                        <div className="name">{e.name}</div>
                        <div className="email">{e.email}</div>
                        <div className="vote">{e.votes}</div>
                  </div>)
        })  
    }
    fullVote(){
        var vot=this.state.result.vot;
        console.log("vot",vot)
        return Object.keys(vot).map((e,i)=>{
            return(
                <div className="secs">
                    <div className="sec">{e}</div>
                    <div className="conts">
                          {this.showArr(vot[e])}
                    </div>
                </div>
            )
        })
    }
    render(){
        return(
            <div className="Resul">
               <h2>
                   Result
               </h2>
               <div className="cont">
                    <div><this.ovrView/></div>
                    <div className="fullResult">
                        <h3>Full Result</h3>
                        {this.fullVote()}
                    </div>
               </div>
            </div>
        )
    }
    
}