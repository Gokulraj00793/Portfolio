import React from "react";

const Certification = () => {
  return (
    <div
      id="certification"
      className="certifipage bg-black max-h-screen xl:max-w-full lg:max-w-full md:max-w-full sm:max-w-full"
    >
      <div className="flex items-center justify-center py-20 text-4xl md:text-6xl ld:7xl ">
        Certifications
      </div>
      <div
        className="mt-6 b text-black grid items center text-center grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2 
        my-10 mx-16"
      >
        <div className="border-[3px] border-solid bg-[#f4f1f8] border-gray-500 rounded-[10px] p-5 font-bold">
          <h2>freeCodeCamp | Responsive WebDesign Certification</h2>
          <a
            className="text-blue-700"
            href="src/assets/FreeCodeCamp-certificate.pdf"
          >
            -Click to view
          </a>
        </div>
        <div className="border-[3px] border-solid bg-[#f4f1f8] border-gray-500 rounded-[10px] p-5 font-bold">
          <h2> HP-Life | Effective Leadership</h2>
          <a
            className="text-blue-700"
            href="src/assets/HP-LIFE_Gokulraj_certificate.pdf"
          >
            -Click to view
          </a>
        </div>
        <div className="border-[3px] border-solid bg-[#f4f1f8] border-gray-500 rounded-[10px] p-5 font-bold">
          <h2>simplilearn | Git Traing</h2>
          <a
            className="text-blue-700"
            href="src/assets/Git_simplilearn_certification.pdf"
          >
            -Click to view
          </a>
        </div>
        <div className="border-[3px] border-solid bg-[#f4f1f8] border-gray-500 rounded-[10px] p-5 font-bold">
          <h2>IBM SkillBuild | Inroduction to Artificial Intellingence</h2>
          <a
            className="text-blue-700"
            href="src/assets/IBM _Completion Certificate _ SkillsBuild.pdf"
          >
            -Click to view
          </a>
        </div>
        <div className="border-[3px] border-solid bg-[#f4f1f8] rounded-[10px] border-gray-500 p-5 font-bold">
          <h2>Infosys Spring Board | Web Development with Node.js & MongoDB</h2>
          <a
            className="text-blue-700"
            href="src/assets/Infosys spring board certificate.pdf"
          >
            -Click to view
          </a>
        </div>
        <div className="border-[3px] border-solid bg-[#f4f1f8] border-gray-500 rounded-[10px] p-5 font-bold">
          <h2>ISRO | Space On Wheels</h2>
          <a className="text-blue-700" href="src/assets/spaceonwheels.pdf">
            -Click to view
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certification;
