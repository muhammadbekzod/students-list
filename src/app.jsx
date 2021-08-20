import React, { Component } from 'react'
import { data } from './mock';


export default class App extends Component {
    state={
        search: '',
        list: data,
    }
  render() {
      const onSearch =(e) =>{
        //   this.setState({ search: e.target.value});
          const newData = data.filter((value)=>{
          let list = value.name.toLocaleLowerCase();
          return list.includes(e.target.value.toLocaleLowerCase());
          });
        //   const onId =(e) =>{
        //     this.setState({ search: e.id.value});
        // };
         this.setState({list:newData});
     
    }
    return (
      <div>
        <div className="wrapper"></div>
        <input 
        type="text" 
        onChange ={onSearch}
        onSubmit = {this.handleSubmit}
       />
       
        <select name="" id="" >
        <option value="">ID</option>
        <option value="">Name</option>
        <option value="">Major</option>
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
                this.state.list.map((value)=>(

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

