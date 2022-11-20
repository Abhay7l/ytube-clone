import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import "./sign-up-from.styles.scss"
import Button from "../button/button.component";
const defaultFormFields={
  displayName:'',
  email:'',
  password:'',
  confirmPassword:''
}
const SignUpForm = () => {
  const [formFields,setFormFields] = useState(defaultFormFields);
  const {displayName,email,password,confirmPassword}=formFields;
  console.log(formFields);
const handleSubmit = async (event) =>{//on submiting we have to check if password and confirm password are same also we have to see if we have authenticated the user with email and password and then we have to create user document from what the function returns;
  event.preventDefault();//by this we specifies that all the changes happening in the form we are going to handle it there should be no default changes;
  if(password  !== confirmPassword){
    alert("passwords do not match")
    return;
  }
  try{
    const {user} =await createAuthUserWithEmailAndPassword(email,password);;
    console.log('this is user',user);
    createAuthUserWithEmailAndPassword(user,{displayName});
  }catch(error){
    if(error.code === "auth/email-already in use"){
      alert("cannot create user, email already in use");
    }else{
        console.log("user creation encountered an error");
    }
  }
};
  const handleChange=(event)=>{
     const {name,value} = event.target;
     setFormFields({ ...formFields,[name]:value});
  };
   return(
    <div className="sign-up-container">
     <h2>Don't have an account</h2>
     <span>Sign Up with your email and password</span>
     <form onSubmit={handleSubmit}>   
    {/* onSubmit callback; */}
   <FormInput
     label="Display Name"
      type="text"
       required
        onChange={handleChange} 
        name="displayName"
         value={displayName}
         />
      <FormInput label="Email" 
      type ="email"
       required 
       onChange={handleChange}
        name="email" 
        value={email}
        />
      <FormInput label="Password" 
      type="password"
       required 
       onChange={handleChange}
        name="password" 
        value={password}
        />
      <FormInput label="Confirm Password"
       type="password" 
       required 
       onChange={handleChange} 
       name="confirmPassword"
        value={confirmPassword}
        />
      <Button type = "submit">Submit</Button>
      {/* when the button is clicked it tells to run the onSubmit callback and the onSubmit callback runs only if all the required validations are filled;*/}
    </form>
    </div>
   );
};
export default SignUpForm;