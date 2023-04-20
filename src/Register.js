import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {
    
    const [id ,idchange]=useState('');
    const [email ,emailchange]=useState('');
    const [Password ,passwordchange]=useState('');
    const [cnfpass ,cnfpasschange]=useState('');
    
    const valreq=()=>{
      let isproceed=true;
      let errorMessage='please Enter the '
      if(id===null || id===''){
        isproceed=false;
        errorMessage+="username cannot be null"
      }

      if(email===null || email===''){
        isproceed=false;
        errorMessage+="email cannot be null"
      }

      if(Password===null || Password===''){
        isproceed=false;
        errorMessage+="Password cannot be null"
      }

      if(cnfpass===null || cnfpass===''){
        isproceed=false;
        errorMessage+="Confirm Password cannot be null"
      }

      if(Password !==cnfpass){
        isproceed=false;
        errorMessage+="passwords are not matching"
      }


      if(!isproceed){
        alert(errorMessage);
      }

      return isproceed;
    }


    const navigate=useNavigate();

    const handleSubmit=(e)=>{
      if(valreq()){
      e.preventDefault();
      let regObj={id,email,Password,cnfpass};
      
      console.log(regObj);

      fetch(" http://localhost:8000/user",{
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(regObj)
      }).then((res)=>{
          alert("succes")
          navigate('/login');
          sessionStorage.setItem();
      }).catch((e)=>{
          alert("error check console");
          console.log(e);
      });
    }
    }
  
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col md-2' >

          </div>

          <div className=' main col md-8 ' style={{ paddingTop: 100 }}  >
            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">UserName</label>
                <input value={id} onChange={e=>idchange(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input value={email} onChange={e=>emailchange(e.target.value)} type="email" className="form-control" id="exampleFormControlInput1" />
              </div>

              <div className="mb-2">
                <label for="exampleFormControlInput1" className="form-label">Password</label>
                <input value={Password} onChange={e=>passwordchange(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Confirm Password</label>
                <input value={cnfpass} onChange={e=>cnfpasschange(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" />
              </div>

              <div className='footer'>
              <button type="submit" className="btn btn-outline-primary">Submit</button>   
              <button style={{marginLeft:20}} type="button" className="btn btn-danger">Back</button>

              </div>
            </form>
          </div>


          <div className='col md-3' >

          </div>
        </div>
      </div>



    </>
  )
}
