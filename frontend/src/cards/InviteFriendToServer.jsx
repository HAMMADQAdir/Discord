import React from "react";

export default function InviteFriendToServer({serverJoiningCode}) {


    const handleCopy = () => {
        const textToCopy = serverJoiningCode ? serverJoiningCode : "https://discord.gg/invite";
        
        // Copy to clipboard
        navigator.clipboard.writeText(textToCopy).then(() => {
          console.lgo("Link copied to clipboard!"); // Show confirmation or toast
        }).catch(err => {
          console.error("Failed to copy text: ", err);
        });
      };
  return (
    
    <div className="fixed inset-0  flex flex-col   p-4 rounded-lg">
      <div className="bg-[#27292D] flex flex-col space-y-2 p-3 rounded-t-lg ">
        <div className="flex flex-row justify-between items-center text-center  ">
          <h1 className="text-zinc-300 font-bold text-2xl">
            Invite Friend to Server
          </h1>

          <i className="fas fa-times text-3xl text-zinc-300"></i>
        </div>

        <h2 className="text-zinc-400 text-lg font-bold">#general</h2>

        <div className="flex flex-row justify-between items-center text-center w-full">
          <div className="relative w-full">
            <input
              id="search"
              className="w-full text-zinc-300 bg-zinc-900  text-lg rounded-lg p-2 pr-12"
              placeholder="Search for friends"
            />
            <button
              className="fas fa-search absolute right-0 top-0 bottom-0 px-4  text-white font-bold rounded-r-lg"
              
            >
              
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-2 bg-[#222427] p-3  rounded-b-lg">
        <h1 className="text-zinc-300  font-bold">OR, SEND A SERVER INVITE LINK</h1>

        <div className="flex flex-row justify-start items-center text-start w-full">
          <div className="relative w-full">
            <p
              id="search"
              className="w-full text-zinc-300 bg-zinc-900 font-bold text-lg rounded-lg p-2 pr-12 hover:cursor-text"
              placeholder="Search for friends"
            >
                
                {serverJoiningCode?serverJoiningCode:"https://discord.gg/invite"}
                </p>
            <button
              className="bg-blue-400 absolute right-0 top-0 bottom-0 px-4 text-lg  text-white font-bold rounded-lg m-1"
               onClick={handleCopy} // Add the click event handler
            >
              Copy
            </button>
            
          </div>
        </div>
      </div>
    
    </div>
  );
}
