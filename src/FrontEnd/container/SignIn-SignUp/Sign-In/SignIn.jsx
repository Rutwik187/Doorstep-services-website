import { useState } from "react";
import "../CommonSignInSignUp.css";
import { FormInput } from "../Form-Inputs/FormInput";
// import AuthContext from "../../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

import axios from "../../../api/axios";
const LOGIN_URL = "/login";

export const SignIn = () => {
  const navigate = useNavigate();
  // const { setAuth } = useContext(AuthContext);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      // pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email: values.email, password: values.password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log(JSON.stringify(response));
      navigate("/");
      window.location.reload();

      const { fullName, role } = response.data.user;

      // setAuth({
      //   email: values.email,
      //   role,
      //   fullName,
      // });

      const userDetails = {
        email: values.email,
        role,
        fullName,
      };
      localStorage.setItem("response", JSON.stringify(userDetails));
    } catch (err) {
      if (!err?.response) {
        console.log("No Server Response");
      } else if (err.response?.status === 400) {
        console.log("Missing Username or Password");
      } else if (err.response?.status === 401) {
        console.log("Unauthorized");
      } else {
        console.log("Login Failed");
      }
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="SignInSignUp">
        <form className="SignInSignUpForm" onSubmit={handleSubmit}>
          <h4>Sign In</h4>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button className="SignInSignUpButton">Submit</button>
        </form>
      </div>
    </>
  );
};
