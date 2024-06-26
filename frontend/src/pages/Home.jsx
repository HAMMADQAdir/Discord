import React from 'react';
import Card from '../cards/card';

export default function Home() {
    const homeCardInfo = [
        {
            key: 1,
            tagline: 'MAKE YOUR GROUP CHATS MORE FUN',
            desc: 'Use custom emoji, stickers, soundboard effects and more to add your personality to your voice, video, or text chat. Set your avatar and a custom status, and write your own profile to show up in chat your way.',
            videolink: "https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/663b271d6f05c8c9e11f8d65_Discord%20Refresh%20Sound-MP4-transcode.mp4"
        },
        {
            key: 2,
            tagline: "STREAM LIKE YOU’RE IN THE SAME ROOM",
            desc: "High quality and low latency streaming makes it feel like you're hanging out on the couch with friends while playing a game, watching shows, looking at photos, or idk doing homework or something.",
            videolink: "https://cdn.prod.website-files.com/6257adef93867e50d84d30e2%2F665434315cbc60da2d4c9684_Discord_Website_Refresh_Same%20Room_EN_V2-transcode.mp4"
        },
        {
            key: 3,
            tagline: "HOP IN WHEN YOU'RE FREE, NO NEED TO CALL",
            desc: 'Easily hop in and out of voice or text chats without having to call or invite anyone, so your party chat lasts before, during, and after your game session.',
            videolink: "https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6638c6b04eff56a99c1e2d7d_Discord_Website_Refresh_Hop-In-transcode.mp4"
        },
        {
            key: 4,
            tagline: "SEE WHO'S AROUND TO CHILL",
            desc: "See who's around, playing games, or just hanging out. For supported games, you can see what modes or characters your friends are playing and directly join up.",
            videolink: "https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6638c7e8907412911166f683_Discord_Website_Refresh_See%20Who_s%20Around-transcode.mp4"
        },
        {
            key: 5,
            tagline: 'ALWAYS HAVE SOMETHING TO DO TOGETHER',
            desc: 'Watch videos, play built-in games, listen to music, or just scroll together and spam memes. Seamlessly text, call, video chat, and play games, all in one group chat.',
            videolink: "https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/66446078b3e738a7c1f85e35_Discord_Website_Refresh_Activities_03-transcode.mp4"
        },
        {
            key: 6,
            tagline: 'WHEREVER YOU GAME, HANG OUT HERE',
            desc: 'On your PC, phone, or console, you can still hang out on Discord. Easily switch between devices and use tools to manage multiple group chats with friends.',
            videolink: "https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6638c8e7cb756886cd8d61af_Discord_Website_Refresh_Platforms-transcode.mp4"
        }
    ];

    return (
        <div className='flex flex-col flex-wrap  justify-center  content-center'>
            {
                homeCardInfo.map(element => (
                    <Card
                        key={element.key}
                        title={element.tagline}
                        description={element.desc}
                        videolink={element.videolink}
                    />
                ))
            }
        </div>
    );
}
