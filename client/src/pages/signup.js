import { useState } from "react";
import { useSignUp } from "../hooks/useSignUp";

const Signup = () => {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [phone_number, setPhone] = useState("");
  const [section, setSection] = useState("");
  const [year, setYear] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("pending");

  const { signup, isLoading, error, success } = useSignUp();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(
      name,
      phone_number,
      section,
      year,
      email,
      password,
      role,
      status
    );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "role":
        setRole(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "section":
        setSection(value);
        break;
      case "year":
        setYear(value);
        break;
      default:
        setRole("");
        break;
    }
  };

  return (
    <div>
      <form className="signup" onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <label>First Name : </label>
        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <label>Phone Number: </label>
        <input name="phone" placeholder="Phone" onChange={handleChange} />
        <label>Email : </label>
        <input type="email" onChange={handleChange} name="email" />
        <label>Password : </label>
        <input type="password" onChange={handleChange} name="password" />

        <label>User : </label>
        <select onChange={handleChange} name="role" value={role}>
          <option value="teacher">Teacher</option>
          <option value="student" onChange={(e) => setStatus("")}>
            Student
          </option>
        </select>
        {role === "student" && (
          <>
            <input
              name="section"
              placeholder="Section"
              onChange={handleChange}
              required
            />
            <input
              name="year"
              required
              placeholder="Year"
              onChange={handleChange}
            />
          </>
        )}
        <button disabled={isLoading}>Sign Up</button>
        {error && <div className="error">{error}</div>}
        {success && <div className="error">{success}</div>}
      </form>
    </div>
  );
};

export default Signup;
