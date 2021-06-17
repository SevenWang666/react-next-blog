import React from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import Vditor from 'vditor';
import Container from '@material-ui/core/Container';
import utilStyles from 'styles/settings/users.module.css';
import { withRouter } from 'next/router';

class Users extends React.Component<{text,router},{text?:string}> {
  value:string;
  constructor (props){
    super(props);
    this.state = {text:''};

  }

  componentDidMount (){
    new Vditor('vditor', {
      toolbar: [
        {
          hotkey: '⇧⌘S',
          name: 'sponsor',
          tipPosition: 's',
          tip: 'markdown',
          className: 'right',
        }],
    });
  }
  handleSearch (e){
    this.value = e.target.value;
    this.setState({text: e.target.value});
  }
  
  render () {
    return (
      <Container component="main">
        <Link href="/">come back </Link>
        <Button variant="outlined" size="small" onClick={()=>{this.props.router.push('/');}}>
          主页面
        </Button>
        <input onChange={(e)=>{this.handleSearch(e);}}/>
        <span>{this.state.text}</span>
        <div id="vditor" className={utilStyles.vditorWidth} ></div>
      </Container>
    );
  }
}

export default withRouter(Users);
