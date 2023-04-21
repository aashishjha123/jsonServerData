import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import user from '

export default function Login() {

  const [username, usernameUpdate] = useState('');
  const [password, setPassword] = useState('');

  // const dataCollection = {user}
  // console.log(user.id);

  useEffect(()=>{
    sessionStorage.clear();
  },[])
  

  const navigate=useNavigate();

  const proceedLogin = (e) => {
    e.preventDefault();
  
    if(validate()){
      console.log("proceed");
      

        fetch("http://localhost:8000/user/"+username).then((res)=>{
          return res.json();
        }).then((resp)=>{
          console.log(resp.id === );
          alert("login Succesful")
          sessionStorage.setItem('username',username);
          navigate('/dashboard');
        }).catch((e)=>{
          console.log(e);
        })
      
      
    }
  }

  const  validate =()=>{
    let result=true;
    if(username===null || username===''){
      result=false;
      alert("Username cannot be null")
    }

    if(password===null || password===''){
      result=false;
      alert("password cannot be null")
    }
    return result;
  }
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col md-2'></div>
          <div className='col md-8' style={{marginTop:100}}>
            <form onSubmit={proceedLogin}>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">User Name </label>
                <input value={username}  onChange={e=>usernameUpdate(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1"  />
              </div>
              
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Password</label>
                <input value={password}  onChange={e=>setPassword(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1"  />
              </div>

              <button type="submit" className="btn btn-primary">Login</button>

            </form>
          </div>
          <div className='col md-2'></div>
        </div>

      </div>
    </>
  )
}
