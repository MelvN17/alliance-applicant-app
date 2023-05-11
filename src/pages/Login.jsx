import { React } from "react";
import "../App.css";
import LoginForm from "../components/LoginForm";
import Image from "../components/Image";

function Login() {
  return (
    <>
      <Image right image="src/img/login_image.png">
        <LoginForm />
      </Image>
    </>
  );
}

export default Login;
