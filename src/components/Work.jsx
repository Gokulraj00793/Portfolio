import React from "react";

const Work = () => {
  return (
    <div
      id="work"
      className="workpage flex flex-col xl:max-w-full lg:max-w-full md:max-w-full sm:max-w-full"
    >
      {/* Projects Section */}
      <section className=" bg-[#151515]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center text-4xl md:text-6xl lg:text-7xl py-20">
            My Projects
          </div>
          <div className="mt-6 grid row-auto lg:grid-cols-1 gap-6">
            {/* To-Do List Project */}
            <div className="bg-[#f4f1f8] shadow-lg rounded-lg p-6 flex flex-col lg:flex-row">
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold text-black p-5">
                  To-Do List with Date-Time Features
                </h3>
                <p className="mt-2 text-black">
                  This is a basic to-do list application. Users can input a
                  task, set a due date and time, and add it to the list.
                  Completed tasks can be deleted. Project link -{" "}
                  <a
                    className="text-blue-800"
                    href="https://www.linkedin.com/posts/gokulraj71845_webdevelopment-javascript-html-activity-7243500412337586176-SLzd?utm_source=share&utm_medium=member_desktop"
                  >
                    To-Do List Application
                  </a>
                </p>
              </div>
              <img
                className="p-5 h-auto cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110"
                src="src\assets\to-to-list.png"
                alt="To-Do List Screenshot"
              />
            </div>

            {/* Rock-Paper-Scissors Game */}
            <div className="bg-[#f4f1f8] shadow-lg rounded-lg p-6 flex flex-col lg:flex-row">
              <img
                className="p-5 h-auto cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110"
                src="src/assets/rock-paper-s.png"
                alt="Rock-Paper-Scissors Game Screenshot"
              />
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold text-black p-5">
                  Rock-Paper-Scissors Game
                </h3>
                <p className="mt-2 text-black">
                  Developed a dynamic Rock-Paper-Scissors game using JavaScript,
                  offering an interactive user experience. The game includes
                  real-time results and a simple, intuitive interface. Project
                  link -{" "}
                  <a
                    className="text-blue-800"
                    href="https://www.linkedin.com/posts/gokulraj71845_webdevelopment-javascript-responsivedesign-activity-7236785269708898304-a2e9?utm_source=share&utm_medium=member_desktop"
                  >
                    Rock-Paper-Scissors Game
                  </a>
                </p>
              </div>
            </div>

            {/* chat Bot */}

            <div className="bg-[#f4f1f8] shadow-lg rounded-lg p-6 flex flex-col lg:flex-row">
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold p-5 text-black">
                  Chat Bot
                </h3>
                <p className="mt-2 text-black">
                  Created a Telegram bot using Node.js to automate tasks and
                  enhance user interaction. The bot efficiently processes
                  commands and provides personalized, automated responses.
                  Project link -{" "}
                  <a
                    className="text-blue-800"
                    href="https://www.linkedin.com/posts/gokulraj71845_telegrambot-goshriabrbot-nodejs-activity-7267788341842980864-Kt-e?utm_source=share&utm_medium=member_desktop"
                  >
                    Goshri Bot
                  </a>
                </p>
              </div>
              <img
                className="p-5 h-auto cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110"
                src="src\assets\tg-bot-3- 2024-11-27 212730.png"
                alt="Chat Bot Screenshot"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
