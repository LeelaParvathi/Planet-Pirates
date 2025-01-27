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
     <div style={styles.container}>
      <h1>Sign Up</h1>
      <div style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        {error && <p style={styles.error}>{error}</p>}
        <button onClick={handleSignUp} style={styles.button} disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default SignUp;
