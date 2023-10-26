import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';

function SignUp() {
  const[email, setemail]= useState("")
  const[password, setpassword]= useState("")

const auth = getAuth(event);
event.preventDefault;
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorMessage);
  });

  return (
    <div>
      <h1>React Forms</h1>
      <form onSubmit={handleSubmit}>
      <label>Enter your email:
        <input 
          type="email" 
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
      </label>
      <label>Enter your password:
        <input 
          type="password" 
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
    </div>
  );
}

export default SignUp;