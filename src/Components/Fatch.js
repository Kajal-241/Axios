import React from 'react'
import axios from 'axios'
class Fatch extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userDetails:[],
            name:""
        }
    }

    changeHandler=(event)=>{
        this.setState({
          [event.target.name]: event.target.value
        })
      }

    componentDidMount(){
 axios.get('https://jsonplaceholder.typicode.com/users').then (response =>{
     console.log(response.data ,'data')
     this.setState({
         userDetails:response.data
     })
    }).catch(err =>{
    console.log(err,'Error')
    })
}

addUser=()=>{
    const postData={name:this.state.name}

    axios.post("https://jsonplaceholder.typicode.com/users", postData)
    .then(response=>{
        console.log(response.data, "Request Successfull")
        this.setState({
            userDetails:[...this.state.userDetails, postData],name:''
        })
    })
    .catch(err=>{
        console.log(err)
    })
}

    render(){
        return(
            <div style={{textAlign:'center',paddingLeft:'300px',paddingRight:'300px'}}>
                <div style={{padding:'30px', backgroundColor:'blue',border:'4px solid black'}}><h1> Digikull Students </h1> </div>
                <h2> Hello User </h2>
                <input type="text" name="name" value={this.state.name} onChange={(event)=>{this.changeHandler(event)}} />
        
                <button style={{height:'30px',width:'60px'}} onClick={()=>{this.addUser()}}>ADD</button><br></br>
                <br></br>
                <div>
                {this.state.userDetails.map((item, index)=>{
                    return(
                        <div key={index}>
                           <div style={{border:'1.5px solid black'}}> <h1>{item.name}</h1></div>
                        </div>
                    )
                })}
                </div>

            </div>

        )
    }
}
export default Fatch;