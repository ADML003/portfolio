const Projects = () => {
  return (
    <section className="c-space my-20">
      <p className="head-text">My Projects</p>

      <div className="flex flex-col items-center justify-center mt-12 gap-5 w-full min-h-[400px]">
        <div className="text-center p-10 backdrop-filter backdrop-blur-3xl rounded-lg border border-white/10">
          <h3 className="text-white text-2xl font-semibold mb-4">🚧 Under Construction</h3>
          <p className="text-white-600 text-lg">Will be updated soon</p>
          <p className="text-white-400 text-sm mt-2">Stay tuned for my latest projects and work!</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
