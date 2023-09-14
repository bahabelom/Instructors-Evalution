import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setisLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const signup = async (
    name,
    phone_number,
    section,
    year,
    email,
    password,
    role,
    status
  ) => {
    setisLoading(true);
    setError(null);

    const response = await fetch("http://localhost:4000/api/user/signup", {
      method: "POST",
      body: JSON.stringify({
        name,
        phone_number,
        section,
        year,
        email,
        password,
        role,
        status,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setisLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
      setisLoading(false);
      setSuccess("Registered Suuceefully");
    }
  };
  return { signup, isLoading, error, success };
};
