//Component Imports
import HomeHeader from "../../Components/HomeHeader/HomeHeader";
import PartnerApply from "../../Components/PartnerApply/PartnerApply";
import PartnerProfiles from "../../Components/PartnerProfiles/PartnerProfiles";
import YoutubeEmbed from "../../Components/YoutubeEmbed/YoutubeEmbed";

const Home = () => {
    return ( 
        // <div className="pt-24">
        //     <div className="w-full mb-10">
        //         <HomeHeader/>
        //     </div>
        //     <div className="grid grid-cols-2 grid-rows-3 gap-4 lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:gap-4 px-2 md:px-4 lg:px-8">
        //         <div className="col-span-2 lg:col-span-2 lg:row-span-2">
        //             <YoutubeEmbed/>
        //         </div>
        //         <div className="row-start-3  lg:col-span-2 lg:col-start-1 lg:row-start-3 bg-slate-300 ">
        //             Check us out on social media
        //         </div>
        //         <div className="col-span-2 row-start-2 lg:row-span-2 lg:col-start-3 lg:row-start-1">
        //             <PartnerProfiles/>
        //         </div>
        //         <div className="row-start-3 lg:col-start-3 lg:row-start-3 ">
        //             <PartnerApply/>
        //         </div>
        //     </div>
        // </div>

        <main className="h-full w-full">
            <header className="w-full bg-gradient-to-b from-bgngreen-950  to-transparent pb-12 pt-5 fixed top-0">
                <nav className="flex relative">
                    <div className="m-auto">
                        <ul className="flex space-x-12 text-bgngray-100 opacity-100 text-2xl font-semibold drop-shadow-2xl">
                            <li>About</li>
                            <li>Partners</li>
                            <li>Community</li>
                        </ul>
                    </div>
                    <div className="right-10 absolute">
                        <button className="bg-bgngreen-500 bg-opacity-60 rounded-full px-5 py-2 shadow-xl">
                            <div className="text-bgngray-950 font-bold drop-shadow-2xl">Join Today</div>
                        </button>
                    </div>
                </nav>
            </header>
            <section className="bg-circuitry bg-center bg-cover bg-no-repeat h-screen w-full">
                <div className="bg-black w-full h-full bg-opacity-80 hover:bg-opacity-60 duration-1000 transition-all ">Main section</div>
            </section>
            <section className="bg-trees bg-center bg-cover bg-no-repeat h-full w-full">
                <div className="bg-black w-full h-screen bg-opacity-80 hover:bg-opacity-60 duration-1000 ease-in-out transition-all">Sub section 1</div>
            </section>
        </main>
     );
}
 
export default Home;