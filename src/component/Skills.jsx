import React from "react";

function Skills() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-10 w-full max-w-6xl">
        {/*first col */}
        <div className="flex flex-col gap-1">
          <h3 className="text-xl">Frontend</h3>
          <ol>
            <li className="text-sm my-1">React</li>
            <li className="text-sm my-1">React</li>
            <li className="text-sm my-1">React</li>
          </ol>
        </div>
        {/*second col */}
        <div className="flex flex-col gap-1">
          <h3 className="text-xl">Frontend</h3>
          <ol>
            <li className="text-sm my-1">React</li>
            <li className="text-sm my-1">React</li>
            <li className="text-sm my-1">React</li>
          </ol>
        </div>
        {/*Third col */}
        <div className="flex flex-col gap-1">
          <h3 className="text-xl">Frontend</h3>
          <ol>
            <li className="text-sm my-1">React</li>
            <li className="text-sm my-1">React</li>
            <li className="text-sm my-1">React</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Skills;
