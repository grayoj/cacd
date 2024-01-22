import TopNav from "../components/TopNab";

function Home() {
  return (
    <>
      <section className=" h-[600px] bg-[url('/Insert.png')]">
        <TopNav />
        <div className="place-items-center flex mx-20 h-[90%]">
          <div className="h-[200px] text-center">
            Your Gateway to Seamless Foreign Affairs Services
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
