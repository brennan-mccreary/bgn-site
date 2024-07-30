//Component Imports
import HomeHeader from "../../Components/HomeHeader/HomeHeader";
import Mission from "../../Components/Mission/Mission";
import PartnerApply from "../../Components/PartnerApply/PartnerApply";
import PartnerProfiles from "../../Components/PartnerProfiles/PartnerProfiles";
import YoutubeEmbed from "../../Components/YoutubeEmbed/YoutubeEmbed";
import TreeSVG from "../../Images/TreeSVG";

const Home = () => {
    return ( 
        <main className="h-full w-full">
            <HomeHeader/>
            <section className="bg-circuitry bg-center bg-cover bg-no-repeat h-screen w-full">
                <div className="bg-black w-full h-full bg-opacity-70 flex">
                    <section className="w-full h-full">
                        <PartnerProfiles/>
                    </section>
                    <section className="w-full h-full">
                        <Mission/>
                    </section>
                </div>
            </section>
            {/* <section className="bg-trees bg-center bg-cover bg-no-repeat h-full w-full">
                <div className="bg-black w-full h-screen bg-opacity-80 hover:bg-opacity-60 duration-1000 ease-in-out transition-all">Sub section 1</div>
            </section> */}
        </main>
     );
}
 
export default Home;