import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import InviteFriendToServer from './InviteFriendToServer';
import { useState } from 'react';


const UserServerDropdownContent = ({serverJoiningCode}) => {
    const [showInvite,setShowInvite] = useState(false)

    const showInvitePeopleCard = () => {
        try {
            console.log("serverJoiningCode",serverJoiningCode)
            setShowInvite(!showInvite)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className=" rounded-md shadow-lg bg-slate-900 ring-1 ring-black ring-opacity-5 text-bold">
            <ul className="py-1">
                <li onClick={showInvitePeopleCard}>
                    <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="text-gray-300 hover:bg-blue-500 hover:text-white block px-4 py-2 text-sm flex justify-between items-center"
                    >
                        <span>Invite People</span>
                        <i className="fas fa-user-plus"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="text-gray-300 hover:bg-blue-500 hover:text-white block px-4 py-2 text-sm flex justify-between items-center"
                    >
                        <span>Server Settings</span>
                        <i className="fas fa-cog"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="text-gray-300 hover:bg-blue-500 hover:text-white block px-4 py-2 text-sm flex justify-between items-center"
                    >
                        <span>Create Channel</span>
                        <i className="fas fa-plus-circle"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="text-gray-300 hover:bg-blue-500 hover:text-white block px-4 py-2 text-sm flex justify-between items-center"
                    >
                        <span>Create Category</span>
                        <i className="fas fa-folder-plus"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="text-gray-300 hover:bg-blue-500 hover:text-white block px-4 py-2 text-sm flex justify-between items-center"
                    >
                        <span>Edit Server Profile</span>
                        <i className="fas fa-edit"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="text-gray-300 hover:bg-blue-500 hover:text-white block px-4 py-2 text-sm flex justify-between items-center"
                    >
                        <span>Hide Muted Channels</span>
                        <i className="fas fa-eye-slash"></i>
                    </a>
                </li>
            </ul>

            <div>

            {showInvite && <InviteFriendToServer serverJoiningCode={serverJoiningCode}/>}
            </div>
        </div>
    );
};

export default UserServerDropdownContent;
