import React from 'react';
import Link from 'next/link';


class Users extends React.Component<{text,},{text?:string}> {
  value:string;
  constructor (props){
    super(props);
    this.state = {text:''};
  }
  handleSearch (e){
    this.value = e.target.value;
    this.setState({text: e.target.value});
  }
  
  render () {
    return (
      <div style={{ width: 170 }}>
        <Link href="/">come back </Link>
        <input onChange={(e)=>{this.handleSearch(e);}}/>
        <span>{this.state.text}</span>
      </div>
    );
  }
}

export default Users;
