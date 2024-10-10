function Register() {
  return (
    <div className="register-container flex justify-center ">
      <div className=" relative top-52 h-96 w-1/3 bg-gray-400">
        <h2 className="flex justify-center font-bold text-4xl">Register</h2>
        <form action="" className="table mt-4 mb-2 ml-8 text-xl">
          <div className="table-row">
            <label htmlFor="name" className="">
              Name :
            </label>
            <input type="text" className=" mb-4" />
          </div>
          <div className="table-row ">
            <label htmlFor="email">Email :</label>
            <input type="email" className="ml-3 mb-4" />
          </div>
          <div className="table-row ">
            <label htmlFor="role">Role :</label>
            <input type="text" className="ml-3 mb-4" />
          </div>
          <div className="table-row ">
            <label htmlFor="password">Password :</label>
            <input type="password" className="ml-3 mb-4" />
          </div>

          <div className="table-row ">
            <label htmlFor="confirm-password">Confirm Password :</label>
            <input type="password" className="ml-3 mb-4" />
          </div>

          <div className="table-row ">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
