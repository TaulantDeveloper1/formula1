import "../../UnAuthenticatedUser.scss";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { Logo } from "./logo";
import { AuthContext } from "../../context/auth-context";

interface Inputs {
  username: string;
  password: string;
}

interface UserProps {
  user: boolean;
}

export default function UnAuthenticatedUser(props: UserProps) {
  // let navigate = useNavigate();
  // console.log("props", props);
  // const { user } = props;
  const { user } = useContext(AuthContext);
  console.log("user from app", user);
  const [userState, setUserState] = useState(user);

  function validateCredentials(username: string, password: string) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (username === "formula@kutia.net" && password === "121212") {
          res("Login successful");
          alert("login success");
          setUserState(!userState);
          // console.log(userState);
          // navigate("/");
        } else {
          rej("Password is incorrect");
        }
      }, 500);
    });
  }
  console.log("userState", userState);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    validateCredentials(data.username, data.password);

  console.log(watch("username"));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Logo />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Username"
          {...register("username", { required: true })}
        />
        {errors.username && <p>This field is required</p>}
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />

        <button> Login </button>
      </form>
      {errors.password && <p>This field is required</p>}
    </div>
  );
}
