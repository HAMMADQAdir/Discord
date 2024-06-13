import React from "react";

const Card1 = () => {
  return (
    <>
      <div className="  h-[50%] w-[60%]  to-blue-600 flex flex-wrap items-center justify-centre p-4">
        <div className="bg-blue-500/85 w-full border-slate-300 rounded-xl">
          <div className="p-10 bg-slate-950/25 rounded-xl flex flex-row items-center justify-centre">
            <div className="ml-4 mr-3 w-52 font-sans text-white">
              <h1 className="font-extrabold text-xl">SEE WHO'S AROUND TO CHILL</h1>
              <p>
                See who's around, playing games, or just hanging out. For
                supported games, you can see what modes or characters your
                friends are playing and directly join up.
              </p>
            </div>
            <video className="h-96 rounded-3xl shadow-2xl shadow-inner" autoPlay>
              <source
                src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6638c7e8907412911166f683_Discord_Website_Refresh_See%20Who_s%20Around-transcode.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card1;
