import React from "react";
import './Contact.css';
import { useState } from 'react';
function Contact(){
  const[firstname,setFirstname]=useState('');
  const[lastname,setLastname]=useState('');
  const[number,setNumber]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[confirmpassword,setConfirmpassword]=useState('');

 const handleFirstname=(e)=>{
    setFirstname(e.target.value)
}
const handleLastname=(e)=>{
    setLastname(e.target.value)
}
const handleNumber=(e)=>{
    setNumber(e.target.value)
}
const handleEmail=(e)=>{
    setEmail(e.target.value)
}
const handlePassword=(e)=>{
    setPassword(e.target.value)
}
const handleConfirmpassword=(e)=>{
    setConfirmpassword(e.target.value)
}

const handlesubmit=()=>{
    if(firstname.length <6){
        alert('Name must be taken atleast 6 Characters')
    }
    else if(lastname.length <6){
        alert('Name must be taken atleast 6 Characters')
    }
    else if(number.length <10){
        alert('Mobile Number must be taken atleast 10 Numbers')
    }
    else if(email.length <8){
        alert('Email must be taken atleast 8 Characters')
    }
    else if(password.length >6){
        alert('Password must be taken atleast 6 Characters')
    }
    else if(confirmpassword.length <6){
        alert('Password Does not match')
    }
    else{
        alert("Your Ticket is Booking Successfully")
    }
}
    return(
        <div className="die">
          <div className="inform">
              <h1>Full Stack Developer Training & Placements</h1>
              <hr/>
              <p>To be an effective full-stack developer, you should acquire and continue upgrading your
                knowledge of applicable programming language skills. Consider taking courses in relevant
                languages—like Python, HTML, CSS, and Javascript.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

               The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham</p>
                <p>To be an effective full-stack developer, you should acquire and continue upgrading your
                knowledge of applicable programming language skills. Consider taking courses in relevant
                languages—like Python, HTML, CSS, and Javascript.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                <hr/>
                <button>Learn more</button>
          </div>
          <div className="form">
            <h1>Contact Form</h1>
            <form onSubmit={handlesubmit}>
                <input value={firstname} required type='text' placeholder="First Name" onChange={handleFirstname}/><br/><br/><br/>
                <input value={lastname} required type='text' placeholder="Last Name" onChange={handleLastname}/><br/><br/><br/>
                <input value={number} required type='number' onChange={handleNumber} placeholder='MobileNumber'/><br/><br/><br/>
                <input value={email} required type='email' placeholder="Email" onChange={handleEmail}/><br/><br/><br/>
                <input value={password} required type='password' placeholder="Password" onChange={handlePassword}/><br/><br/><br/>
                <input value={confirmpassword} required type='password' placeholder="Confirm Password" onChange={handleConfirmpassword}/><br/><br/><br/>
                <input type='submit' value='Submit' id="button"/>
            </form>
          </div>
    </div>
    )
}
export default Contact;
