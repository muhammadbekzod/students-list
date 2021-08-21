import React, { Component } from 'react'
import { data } from './mock';


export default class App extends Component {
    state={
        name:'',
        major: '',
        select:'id',
        data: data,
    }
  render() {
      const onChange =(e) =>{
        const list = data.filter((value)=> {
          if(Number.isInteger(value[this.state.select])){
        let name = value[this.state.select].toString().toLocaleLowerCase() 
        return name.includes(e.target.value.toLocaleLowerCase())
      }
      else{
        let name = value[this.state.select].toLocaleLowerCase() 
        return name.includes(e.target.value.toLocaleLowerCase())
      }
    })
     this.setState({ [e.target.name]: e.target.value, data:list});
      };
      const onSelect = (e) =>{
        console.log({select: e.target.value});
      }
    return (
      <div>
        <div className="wrapper"></div>
        <input 
        type="text" 
        onSelect ={onChange}
   
       />
       
        <select name="" id="" onChange={onSelect} >
        <option value="id">ID</option>
        <option value="name">Name</option>
        <option value="major">Major</option>
        </select>
       <table border='1' style={{ borderCollapse:'collapse', width:'600px'}}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Major</th>
            </tr>
        </thead>
        <tbody>
            {
                this.state.data.map((value)=>(

                <tr>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.major}</td>
                    
                </tr>
                
                    ))
            }
        </tbody>
        </table>
      </div>
    );
  }
}

