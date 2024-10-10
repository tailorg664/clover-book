function Dashboard() {
  return (
    <div className="landing-page box-">
      <div className="navbar h-2vh w-auto flex justify-end bg-gray-300 ">
        <div className="mt-3.5">New to Cloverbook</div>
        <button className="border-black-1 p-2 m-2 bg-orange-500">
          Register
        </button>
        <div className="mt-3.5">/ or </div>
        <button className="p-2 m-2 bg-orange-500 ">SignIn</button>
      </div>
      <div className="overview text-9xl font-bold">Be productive,</div>
      <div className="overview text-9xl font-bold">Be organized,</div>
      <div className="overview text-9xl font-bold">work with us.</div>
    </div>
  );
}

export default Dashboard
