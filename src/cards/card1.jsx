import React from "react";
import { useRef } from "react";

const Card1 = () => {
  const videoRef = useRef(null);
  return (
    <div className="h-[100%] w-[100%] flex items-center justify-center p-4 bg-blue-500">
      <div className="rounded-3xl border-x-4 border-y-4 border-gray-600  bg-gray-400/10 flex flex-row ">
        <div className=" mt-4 mr-3 w-52 font-sans p-10 text-white">
          <h1 className="font-extrabold text-xl">SEE WHO'S AROUND TO CHILL</h1>
          <p>
            See who's around, playing games, or just hanging out. For supported games, you can see what modes or characters your friends are playing and directly join up.
          </p>
        </div>
        <div className="h-96 flex items-center justify-center m-8">
          <video className=" align-middle rounded-3xl shadow-2xl  h-[100%]" ref={videoRef} muted autoPlay={true} loop>
          <source
            src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6638c7e8907412911166f683_Discord_Website_Refresh_See%20Who_s%20Around-transcode.mp4"
            type="video/mp4"
          />
        </video></div>
      </div>
    </div>
  );
};



export default Card1;
{/* <div className="ml-4 mr-3 w-52 font-sans text-white">
<h1 className="font-extrabold text-xl">SEE WHO'S AROUND TO CHILL</h1>
<p>
  See who's around, playing games, or just hanging out. For
  supported games, you can see what modes or characters your
  friends are playing and directly join up.
</p>
</div>
<video className="h-96 rounded-3xl shadow-2xl " autoPlay>
<source
  src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6638c7e8907412911166f683_Discord_Website_Refresh_See%20Who_s%20Around-transcode.mp4"
  type="video/mp4"
/>
</video> */}