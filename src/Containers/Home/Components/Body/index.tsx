import About from "./Components/About";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Others from "./Components/Others";

const Body = () => {
  return (
    <main className="h-90 md:h-[82%] w-full overflow-scroll scroll-smooth bg-slate-700/25 transition-all">
      <div className="flex flex-col items-center w-full px-4 py-8 md:p-8 gap-4 md:gap-8">
        {/* <About />
        <Experience />
        <Education />
        <Skills /> */}
        <Others/>
      </div>
    </main>
  );
};

export default Body;
