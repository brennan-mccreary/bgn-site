import TreeSVG from '../../Images/TreeSVG'

const Mission = () => {
    return ( 
        <div class="w-full h-full flex justify-center items-center">
            <div class="w-full h-full relative z-0">
                    <TreeSVG className="relative z-0 fill-bgngreen-600/40 h-full p-24 w-full "/>
                <div class="absolute w-full inset-0 flex flex-col justify-center text-center space-y-12 items-center z-10">
                    <p class="text-5xl text-bgngray-50 font-bold px-32 indent-20 drop-shadow-lg">
                        Who are we?
                    </p>

                    <p class="text-3xl text-bgngray-50 font-bold px-32 indent-20 drop-shadow-lg">
                        Branched Gaming Network is an organization dedicated to enabling small streamers, developers, and community members.  
                        We strongly focus on improving workflows, enhancing content, and uncovering new adventurous or creative avenues.
                        Our team works to organize events, build tools, provide moderation, and assist with other technical tasks.
                    </p>

                    <p class="text-3xl text-bgngray-50 font-bold px-32 indent-20 drop-shadow-lg">
                        With your membership, we hope to continue to grow and scale our mission to include larger events, trips, and any other intriguing opportunities.
                        As well as launching open-source, creative products that enable creatives to do what they do best and creating a group of prospering content creators.

                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Mission;