import Card from "./Card.jsx";

function Projects() {
  return (
    <section
      className="projects-section xl:w-4/5 w-[90%] px-4  mx-auto py-28 min-h-lvh flex flex-col justify-center items-center"
      id="projects-section"
    >
      <div className="projects-container gap-y-9 flex flex-col items-center text-[--color-1] w-full">
        <div className="p-5">
          <h1 className="text-6xl">PROJECTS</h1>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </section>
  );
}

export default Projects;
