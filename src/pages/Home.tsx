import TopNav from "../components/TopNab";
import { Link, useNavigate } from "react-router-dom";
function Home() {

  return (
    <>

      <section className="px-10 h-[600px] bg-[url('/Insert.png')]">
        <TopNav />
        <div className="flex-row place-items-center flex mx-20 h-[90%]">
          <div className="w-1/3 h-[200px] text-white text-6xl">
            Your Gateway to Seamless{" "}
            <span className="text-green-300">Foreign Affairs Services</span>
            <div className="">
              <Link to={"/login"} className="mx-4 p-2 bg-yellow-300 text-black text-xl">
                Get Started
              </Link>
              <button className="mx-4 p-2 bg-green-900 text-white text-xl">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="px-20">
        <div className="grid grid-cols-2 my-24">
          <div className="flex h-[256px] py-20 my-24 place-items-center mx-20">
            <span className="font-[Poppins] text-[50px] font-[400] text-left">
              Providing you with service delivery in a timely manner.
              <p className="text-xl text-justify">
                Dedicated to the vital national interests of the Federal
                Republic of Nigeria, and the promotion of African Integration
                and unity,international cooperation for the consolidation of
                Global Peace, Security, a just world economic order and
                democratic values.
              </p>
            </span>
          </div>
          <div className="">
            <img src="/minister.png" alt="" />
          </div>
        </div>
      </section>
      <section className="p-20 bg-[#F9F9F9] ">
        <div className="text-center text-[40px]">How it Works</div>
        <div className="flex my-10 justify-center flex-row">
          <p className="text-center w-2/4 line-10">
            Simple, intelligent software and unlimited help from our team means
            you'll attract the right candidates, select from the best, and wow
            your new hires from the moment they say ‘yes’.
          </p>
        </div>
      </section>
      <section className="mx-24">
        <div className="flex flex-wrap justify-center mt-10">
          <div className="p-4 max-w-sm">
            <div className="flex rounded-lg h-full dark:bg-gray-800  p-8 flex-col">
              <div className="flex flex-row-reverse items-center mb-3 bg-[url('/Graph3.png')] h-[300px]">
                <h2 className="text-white dark:text-white text-lg font-medium">
                  Be Extraordinary
                </h2>
              </div>
              <div className="flex flex-col justify-between flex-row">
                <div className="text-2xl text-bold">Sign up</div>
                <p className="my-8 leading-relaxed text-base text-black dark:text-gray-300">
                  Lorem ipsum is typically a corrupted version of 'De finibus
                  bonorum et malorum', a 1st century
                </p>
                <a
                  href="#"
                  className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
                >
                  Learn More
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
                </a>
              </div>
            </div>
          </div>

          <div className="p-4 max-w-sm">
            <div className="flex rounded-lg h-full dark:bg-gray-800  p-8 flex-col">
              <div className="flex flex-row-reverse items-center mb-3 bg-[url('/Graph1.png')] h-[300px]">
                <h2 className="text-white dark:text-white text-lg font-medium">
                  Be Extraordinary
                </h2>
              </div>
              <div className="flex flex-col justify-between flex-row">
                <div className="text-2xl text-bold">App;y</div>
                <p className="my-8 leading-relaxed text-base text-black dark:text-gray-300">
                  Lorem ipsum is typically a corrupted version of 'De finibus
                  bonorum et malorum', a 1st century
                </p>
                <a
                  href="#"
                  className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
                >
                  Learn More
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
                </a>
              </div>
            </div>
          </div>

          <div className="p-4 max-w-sm">
            <div className="flex rounded-lg h-full dark:bg-gray-800  p-8 flex-col">
              <div className="flex flex-row-reverse items-center mb-3 bg-[url('/Graph2.png')] h-[300px]">
                {/* <h2 className="text-white dark:text-white text-lg font-medium">
                  Be Extraordinary
                </h2> */}
              </div>
              <div className="flex flex-col justify-between flex-row">
                <div className="text-2xl text-bold">Track</div>
                <p className="my-8 leading-relaxed text-base text-black dark:text-gray-300">
                  Lorem ipsum is typically a corrupted version of 'De finibus
                  bonorum et malorum', a 1st century
                </p>
                <a
                  href="#"
                  className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
                >
                  Learn More
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-24 bg-[#F9F9F9]">
        <div className="bg-[url('Ornament.png')] bg-stretch mx-10 flex justify-center">
          <div className=" flex w-2/6 flex-row justify-center my-16 text-4xl">
            <div className="w-3/4 text-center">
              Switch to designPoint today and get result
            </div>
          </div>
        </div>
        <div className="mx-40 grid grid-cols-4 gap-10">
          <div className="flex flex-col justify-center">
            <span className="text-[72px] text-center">4x</span>
            <span className="text-center text-bold text-xl">
              Attract 4 x more direct potential candidates
            </span>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-[72px] text-center">80%</span>
            <span className="text-center text-bold text-xl">
              Spend 80% less time on admin task
            </span>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-[72px] text-center">40%</span>
            <span className="text-center text-bold text-xl">
              Make hires 40% faster rather than others
            </span>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-[72px] text-center">43%</span>
            <span className="text-center text-bold text-xl">
              Reduce recruitment agency spend by 83%
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
