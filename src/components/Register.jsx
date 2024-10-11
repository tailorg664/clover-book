import "./Register.style.css";
import logo from "../logo/Logo.jpg";
function Register() {
  return (
    <div className="main-container bg-gray-400">
      <div className="register-container flex bg-gray-100">
        <div className="logo flex">
          <img src={logo} alt="" className="static"/>
          <h2 className="text-2xl pt-5 z-10">Clover Book</h2>
        </div>
      </div>
    </div>
  );
}

export default Register;
