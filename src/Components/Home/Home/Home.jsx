import React from "react";

function Home() {
  return (
    <div className="flex justify-center items-center flex-col py-10">
      <div className="max-w-4xl">
        <input
          type="text"
          placeholder="Type here"
          className="input w-[350px] md:w-[500px]"
        />
      </div>
    </div>
  );
}

export default Home;
