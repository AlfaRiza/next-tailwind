import React from 'react';
import Button from '../components/Button';
import Guest from '../layouts/Guest'
import Input from '../components/Input';
import Label from '../components/Label'
import Checkbox from '../components/Checkbox';

export default function Login() {
  return <div>
      {/* <h1 className='font-light text-2xl uppercase mb-6'>Login</h1> */}
      <form>
          <div className='mb-5'>
              <Label htmlInput='email'>Email</Label>
              <Input type="email" name="email" id='email'/>
          </div>
          <div className='mb-5'>
              <Label  htmlInput='password'>Password</Label>
              <Input type="password" name="password"  id='password' placeholder="john@gmail.com"/>
          </div>
          <div className='mb-5 flex justify-between'>
              <Checkbox name="remember" id="remember" label="remember me"/>
              <a href='#'>Forgot Password</a>
          </div>

          <Button>Login</Button>
      </form>
  </div>;
}

Login.getLayout = page => <Guest header="Login" title="login" children={page}/>
