function Welcome() {
  return (
    <>
      <section className="bg-[url('Shape.png')] px-40 flex flex-row h-screen">
        <div className="w-1/2 text-white h-[100%] flex flex-col items-center justify-center">
          <div className="text-[72px] w-2/4 text-bold">Welcome To CCD</div>
          <div className="text-justify w-2/4">
            Let’s get you all set up so you can verify your personal account and
            begin setting up your profile
          </div>
        </div>
        <div className="w-1/2 flex justify-center flex items-center h-[100%]">
          <div className="bg-white h-[80%] w-3/4 mx-32 my-24 py-24">
            <span className="text-[36px] mx-10">
              Login to your <span className="text-bold">Account</span>
            </span>
            <div className="mx-16 my-10">
              <input
                type="text"
                placeholder="`Enter Username"
                className="mt-2 block w-full border border-secondary p-2 focus:outline-primary"
              />
            </div>
            <div className="mx-16 my-10">
              <input
                type="password"
                placeholder="`Enter Password"
                className="mt-2 block w-full border border-secondary p-2 focus:outline-primary"
              />
            </div>
            <div className="mx-16 my-10">
              <button className="w-full flex flex-row bg-green-700 text-white p-4"> 
                Login
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Welcome;
