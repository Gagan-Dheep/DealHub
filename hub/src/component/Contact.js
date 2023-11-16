import React,{useState} from 'react'

const Contact = () => {
    const [formdata,setFormdata]=useState(
        {name:"",email:"",message:""}
    )
    console.log(formdata)
    function handle(event){
        setFormdata(prevformdata=>{
            return(
                {
                    ...prevformdata,
            [event.target.name]:event.target.value
                }
            )
        })
    }
function submit(event){
    event.preventDefault()

    if (!formdata.name | !formdata.email | !formdata.message) {
        alert('Please fill in all required fields.');
        return;
    }

    const isValidEmail = /\S+@\S+\.\S+/.test(formdata.email);
    if (!isValidEmail) {
        alert('Please enter a valid email address.');
        return;
    }

  
    setFormdata({name:"",email:"",message:"" });
}

  return (
<form className='form' onSubmit={submit}>
    <div className="sec">
        <input type="text"  placeholder="name" name="name" onChange={handle} value={formdata.name}></input>
    </div>
    <div className="sec">
        <input type="email"   placeholder="Email" name="email"  onChange={handle} value={formdata.email}></input>
    </div>

    <div className="sec">
        <textarea  rows="2" placeholder="enter text" name='message'  onChange={handle} value={formdata.message}></textarea>
    </div>
   <button className="submit"  type="submit">SUBMIT</button>
</form>
  )
}

export default Contact

