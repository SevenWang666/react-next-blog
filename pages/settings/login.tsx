import React from 'react';
import next from 'next/link';
import { FormControl,InputLabel,FormHelperText,Input} from '@material-ui/core';


class Login extends React.Component {
  constructor (props){
    super(props);
  }
  render (){
    return(
      <>
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
      </>
    );
  }
}
export default Login;