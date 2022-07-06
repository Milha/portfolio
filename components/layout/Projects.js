// import Image from "next/image";
// import Link from "next/link";
import hrizantemaImg from "../../public/images/projects/hrizantema-project-1400.jpg";
import vlasnikImg from "../../public/images/projects/vlasnik-project.jpg";
import zdravaImg from "../../public/images/projects/zdrava-project.jpg";
// import twitchImg from "../../public/images/projects/zdrava-project.jpg";
import ProjectItem from "../cards/ProjectItem";

function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="m-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I have Built</h2>
        <div className="grid md:grid-cols-2 gap-8 ">
          <ProjectItem
            title="Hrizantema Flower shop"
            backgroundImg={hrizantemaImg}
            projectUrl="/projects/hrizantema"
          />
          <ProjectItem
            title="Vlasnik Real Estate"
            backgroundImg={vlasnikImg}
            projectUrl="/projects/vlasnik"
          />
          <ProjectItem
            title="Zdrava Blog"
            backgroundImg={zdravaImg}
            projectUrl="/projects/zdrava"
          />
          {/* <ProjectItem
            title="Twitch"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
