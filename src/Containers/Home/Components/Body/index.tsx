import About from "./Components/About";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";

const Body = () => {
  return (
    <main className="h-90 md:h-[80%] w-full overflow-scroll scroll-smooth bg-slate-700/25 ">
      <div className="flex flex-col w-full p-4 md:p-8 gap-4 md:gap-8">
        <About />
        <Experience />
        <Education />
        <Skills />
      </div>
    </main>
  );
};

export default Body;
