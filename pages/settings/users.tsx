import React from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import { withRouter } from 'next/router';

class Users extends React.Component<{text,router},{text?:string}> {
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
        <Button variant="outlined" size="small" onClick={()=>{this.props.router.push('/');}}>
          主页面
        </Button>
        <input onChange={(e)=>{this.handleSearch(e);}}/>
        <span>{this.state.text}</span>
      </div>
    );
  }
}

export default withRouter(Users);
