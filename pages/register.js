import React from 'react';
import Button from '../components/Button';
import Guest from '../layouts/Guest'
import Input from '../components/Input';
import Label from '../components/Label'
import Checkbox from '../components/Checkbox';
import Select from '../components/Select';

export default function Register() {
  return <div>
      {/* <h1 className='font-light text-2xl uppercase mb-6'>Login</h1> */}
      <form>
          <div className='mb-5'>
              <Label htmlInput='name'>Name</Label>
              <Input name="name" id='name' placeholder="John Doe"/>
          </div>
          <div className='mb-5'>
              <Label htmlInput='email'>Email</Label>
              <Input type="email" name="email" id='email' placeholder="john@gmail.com"/>
          </div>
          <div className='grid grid-cols-2 gap-3'>
            <div className='mb-5'>
                <Label  htmlInput='password'>Password</Label>
                <Input type="password" name="password"  id='password'/>
            </div>
            <div className='mb-5'>
                <Label  htmlInput='password_confirmation'>Confirm Password</Label>
                <Input type="password" name="password_confirmation"  id='password_confirmation'/>
            </div>
          </div>
          <div className='mb-5'>
              <Label forInput="gender">Gender</Label>
              <Select>
                   <option value="Male">Male</option>
                   <option value="Female">Female</option>
              </Select>
          </div>
          <div className='mb-5 flex justify-between'>
              <Checkbox name="acceptance" id="acceptance" label="Aggree with privacy and term condition"/>
          </div>

          <div className='flex items-center justify-between'>
            <Button>Register</Button>
            <a href='/login' className='underline decoration-indigo-500 text-indigo-500 font-light'>Already have account?</a>
          </div>
      </form>
  </div>;
}

Register.getLayout = page => <Guest cardClassName="w-2/5" header="Register" title="register" children={page}/>