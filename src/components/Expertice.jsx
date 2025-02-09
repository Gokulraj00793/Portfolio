import React from "react";

const Expertice = () => {
  return (
    <div
      id="expertise"
      className="experticepage flex flex-col scroll-mt-50 bg-black text-white"
    >
      <div className="flex items-center justify-center py-20  text-4xl md:text-6xl ld:7xl">
        My Expertice
      </div>
      <div>
        {/* Skills Section */}
        <section className="py-14 xl:max-w-full lg:max-w-full md:max-w-full sm:max-w-full ">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <ul className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 text-white">
              <li className="p-6  rounded-lg text-center border-[2px] border-solid border-gray-400 bg-transperent backdrop-blur-lg text-black">
                <h3 className="text-2xl font-semibold underline underline-offset-[4px] decoration-[10px] text-white decoration-red-600">
                  Front-End Developemnt
                </h3>
                <p className="py-10 px-7 text-white rtl text-center">
                  {" "}
                  Proficient in HTML, CSS, and JavaScript with a focus on
                  building responsive and visually appealing web pages.
                </p>
              </li>
              <li className="p-6   rounded-lg text-center border-[2px] border-solid border-gray-400 bg-transperent backdrop-blur-lg text-black">
                <h4 className="text-2xl font-semibold underline underline-offset-[4px] text-white decoration-[10px] decoration-blue-700">
                  React.js & Tailwind CSS
                </h4>
                <p className="py-10 px-7 text-white text-center">
                  Actively working with Tailwind CSS and enhancing expertise in
                  React.js to create modern, scalable, and visually consistent
                  component-driven UI designs.
                </p>
              </li>
              <li className="p-6 text-black  rounded-lg text-center border-[2px] border-solid border-gray-400 bg-transperent backdrop-blur-lg ">
                <h4 className="text-2xl text-white font-semibold underline underline-offset-[4px] decoration-[10px] decoration-emerald-700">
                  Version Control Tools
                </h4>
                <p className="py-10 px-7 text-white  rtl text-center">
                  I am proficient in Git and GitHub, leveraging them for
                  efficient version control, seamless collaboration, and
                  effective project management.
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Expertice;
