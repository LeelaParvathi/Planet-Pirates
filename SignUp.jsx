import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { database } from "../firebaseConfig";
import { ref, set } from "firebase/database";
import { auth } from "../firebaseConfig";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userId = userCredential.user.uid;
      await set(ref(database, `users/${userId}`), {
        email,
      });
      alert("User registered successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
