import React from 'react';
import next from 'next/link';
import { FormControl,InputLabel,FormHelperText,Input} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

const classes = useStyles();
class Login extends React.Component {
  constructor (props){
    super(props);
  }
  render (){
    return(
      <>
        <div>
          <FormControl>
            <InputLabel htmlFor="my-input">账号</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">账号</FormHelperText>
          </FormControl>
        </div>
        <div>
          <FormControl>
            <InputLabel htmlFor="my-input">密码</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">密码</FormHelperText>
          </FormControl>
        </div>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Standard" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </form>
      </>
    );
  }
}
export default Login;