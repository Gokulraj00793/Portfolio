import React from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "773b99e4-bc77-4223-aa47-aab97c01d132");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  };

  return (
    <div
      id="contact"
      className="contactpage  pb-20 xl:max-w-full lg:max-w-full md:max-w-full sm:max-w-full"
    >
      <div className="flex items-center  justify-center  text-4xl md:text-6xl ld:7xl py-20 ">
        Contact me
      </div>
      <div className="flex flex-col xl:flex-row px-20 py-2 gap-20 justify-evenly   ">
        <div className="max-w-2xl pr-10 ">
          <p>
            Feel free to reach out if you’re interested in collaborating, have
            any questions, or just want to connect! I’m always excited to work
            on innovative projects and explore new opportunities in web
            development, especially in React.js, Tailwind CSS, and beyond. You
            can contact me via email at your{" "}
            <b>
              {" "}
              <i className="text-red-600"> g8417874@gmail.com</i>{" "}
            </b>
            or connect with me on{" "}
            <a
              className="text-blue-500"
              href="https://www.linkedin.com/in/gokulraj71845/"
            >
              LinkedIn
            </a>
            . Looking forward to hearing from you!
          </p>
          <div className="mt-10 ">
            <h1 className="curser-pointer text-gray-600 hover:text-blue-900 font-bold pb-4">
              <a href="https://www.linkedin.com/in/gokulraj71845"> LinkedIn</a>
            </h1>
            <h1 className="curser-pointer text-gray-600 hover:text-white font-bold pb-4">
              <a href="https://github.com/Gokulraj7G">Github</a>
            </h1>
            <h1 className="curser-pointer text-gray-600 hover:text-red-700 font-bold pb-4">
              <a href=""> Intstagram</a>
            </h1>
            <h1 className="curser-pointer text-gray-600 hover:text-blue-500 font-bold pb-4">
              <a href="">Messenger</a>
            </h1>
          </div>
        </div>
        <div className=" ">
          <form onSubmit={onSubmit} className="w-full flex flex-col ">
            {/* Name */}
            <div className="mb-4 flex w-full">
              <label
                htmlFor="name"
                className="block text-white font-medium pr-7 mb-2"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full -mt-2 px-4 py-1 border bg-[#f4f1f8] border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>
            {/* Email */}
            <div className="mb-4 flex">
              <label
                htmlFor="email"
                className="block text-white pr-7 font-medium mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full -mt-2 px-4 py-1 border bg-[#f4f1f8] border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            {/* Message */}
            <div className="mb-4 flex">
              <label
                htmlFor="message"
                className="block text-white pr-10 font-medium mb-2"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="7"
                className="w-full -mt-2 px-4 py-1 border bg-[#f4f1f8] border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Write your message"
              ></textarea>
            </div>
            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="w-fit px-4  bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition duration-300 "
              >
                send
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex items-center  justify-center text-4xl pt-16 ">
        Thank you !
      </div>
    </div>
  );
};

export default Contact;
