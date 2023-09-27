import React from "react";

const Error = () => {
    return(
        <div className="flex justify-center items-center h-screen">
            <div className="text-center"> 
                <p className="text-bgngreen text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-3 px-3">Error 404: Page Not Found</p>
                <p className="text-bgngreen text-xl sm:text-2xl md:text-3xl lg:text-4xl py-3 px-3">Sorry, hope this wasn't something important...</p>
            </div>
        </div>
    )
}

export default Error;