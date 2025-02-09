import React from "react";

const About = () => {
  return (
    <nav id="about">
      <div className=" aboutpage flex flex-col h-screen py-24 scroll-mt-[1000px] pb-24 bg-black xl:max-w-full lg:max-w-full md:max-w-full sm:max-w-full">
        <div className="text-5xl md:text-6xl ld:7xl p-12">About me</div>
        <h1
          className="py-10 aboutclass  leading-relaxed aboutme lg:text-[22px]"
          style={{ letterSpacing: "-1px" }}
        >
          Hi, I’m Gokulraj, a passionate Full-Stack Developer with a strong
          foundation in front-end technologies. I specialize in creating
          responsive and user-friendly web applications. I’ve developed projects
          like a To-Do List app with date-time features and a Telegram Bot,
          showcasing my ability to craft innovative solutions. Currently, I’m
          focusing on React.js and Next.js to build fast, dynamic applications
          and strengthening my back-end skills with Node.js and MongoDB. I’m
          eager to learn and create digital solutions that solve real-world
          problems. Let’s connect and build something amazing together!
        </h1>
        <button className=" w-fit flex px-4 py-2 mt-[50px] ml-[100px] lg:ml-[800px] md:ml-[500px]  pb-2 rounded-lg text-black bg-green-600 border-green-500 hover:bg-green-700 ">
          <a
            className="flex gap-5 text-[20px]"
            href="src\assets\Gokulraj_Final_cv.pdf"
          >
            <img src="src\assets\icons8-cv-30.png"></img>
            Resume
          </a>
        </button>
      </div>
    </nav>
  );
};

export default About;
