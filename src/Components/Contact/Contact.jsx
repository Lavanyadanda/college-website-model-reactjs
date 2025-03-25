import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_icon from '../../assets/white-arrow.png'
const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "a03e43cf-6bd0-439c-b48c-63caa674fed3");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3> send us  aa message <img src={msg_icon}/></h3>
            <p> dell free to call us</p>
            <ul>
                <li><img src={mail_icon}/> contact@greatestack.dev</li>
                <li>  <img src={phone_icon}/>+1 1234 567 8906</li>
                <li>  <img src={location_icon}/>77 sudjh,cambridge</li>

            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>your name</label>
                <input required type='text' name='name' placeholder='enter your name'/>
   <label>Phone </label>        
     <input  requiredtype='tel' name='phone'   placeholder="enter your tel no"/>
     <label>write your esg</label>
     <textarea  requiredname='msg' rows="6" placeholder=' enter msge'/>    
          
      <button  type="submit" className='btn dark-btn' name='submit'>Submit <img src={white_icon}/></button>    
          
            </form>
            <span> {result} </span>
        </div>
      
    </div>
  )
}

export default Contact
