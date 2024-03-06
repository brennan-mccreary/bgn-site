import React from "react";
import DiscordEmbed from "../../Components/DiscordEmbed/DiscordEmbed";

const Discord = () => {
    return(
        <div className="flex-col justify-center items-center h-screen bg-bgngray-900 text-center">
            <h1 className="text-5xl text-bgngreen-300 font-semibold pt-24 pb-8 ">Join the Network!</h1>
            <div className="w-full flex justify-center">
                <DiscordEmbed/>
            </div>
        </div>
    )
}

export default Discord;