import React from 'react';

export default class DeleteBox extends React.Component{

  state = {id:''};

  change = e =>{
    this.setState({[e.target.name]: e.target.value});
    e.target.value = '';
  }

  update = e => {
    e.preventDefault();
    this.props.deleteRobo(this.state);
    this.setState({id:''});
  }


  render (){
  return (
    <div className='pa2'>
    <h1>Delete Robot By ID </h1>
      <input
      name="id"
      value={this.state.id}
      className='pa2 ba b--green bg-lightest-blue'
      placeholder='Write ID of Robot'
      onChange={e => this.change(e)}
      />
      <a className="f50 link dim ph3 pv2 mb2 dib white bg-dark-green" 
         href="#0"
         onClick={e => this.update(e)}>
         Delete Robot
      </a>    </div>
  );
 }
}