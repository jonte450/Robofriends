import	React from 'react';

export default class AddRobot extends React.Component{

  state = {name: "",
           username: "",
           email: ""
        };

   change = e =>{
   	this.setState({[e.target.name]: e.target.value});
   	e.target.value = '';
   }

   clearFields = () =>{
   	this.setState({name:'',
   		           username:'',
   		           email:''
     });
   }   

  add = (e) =>{
  e.preventDefault();
  this.props.addToList(this.state);
  this.clearFields();
  };

  render(){
  	return (
    <div>
         <h1>Add Robot By Name</h1>
         
      <input
        className='pa2 ba b--green bg-lightest-blue'
        name="name"
        value={this.state.name}
        onChange={e => this.change(e)}
        placeholder='Add Name'
      />

     <input
       className='pa2 ba b--green bg-lightest-blue'
       name="username"
       value={this.state.username}
       onChange={e => this.change(e)}
       placeholder='Add Username'
    />

    <input
       className='pa2 ba b--green bg-lightest-blue'
       name="email"
       value={this.state.email}
       onChange={e => this.change(e)}
       placeholder='Add Email'
    />

      <a className="f50 link dim ph3 pv2 mb2 dib white bg-dark-green" 
         href="#0"
         onClick={e => this.add(e)}>
         Add Robot
      </a>


    </div>
 );
}
}


