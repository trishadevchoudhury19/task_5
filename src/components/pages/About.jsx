import React from "react";
import profilePic from "D:/Numetry/task5/src/components/pages/img.jpg"; // Make sure to replace this with the actual path

export const About = () => {
  return (
    <div className="relative p-4 max-w-md mx-auto lg:max-w-xl xl:max-w-2xl"> 
      <h1 className="text-2xl font-bold text-center lg:text-3xl xl:text-4xl">About Me</h1>
      <p className="text-center text-lg mt-2 lg:text-xl xl:text-2xl">
        Hi! I’m Trisha Devchoudhury, a final-year Computer Science student at GCU. 
        I’m passionate about software development, building intuitive interfaces, and solving real-world problems with code.
        I am skilled in <ol>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>python</li>
            <li>MySQL</li>
            <li>SQL</li>
        </ol>
      </p>
      <div className="flex justify-center mt-4">
        <img 
          src={profilePic} 
          alt="Profile" 
          style={{width:'300px',height:'380px',borderRadius:'50%',top:'860px',right:'30px',display:'block',margin:'0 auto'}}
          className="shadow-lg object-cover" 
        />
      </div>
    </div>
  );
};
