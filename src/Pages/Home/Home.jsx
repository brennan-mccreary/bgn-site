//Component Imports
import YoutubeEmbed from "../../Components/YoutubeEmbed/YoutubeEmbed";

const Home = () => {
    return ( 
        <div className="pt-24">
            <div className="w-full bg-slate-900 mb-10">head</div>
            <div className="grid grid-cols-2 grid-rows-3 gap-4 lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:gap-4 px-2 md:px-4 lg:px-8">
                <div className="col-span-2 lg:col-span-2 lg:row-span-2">
                    <YoutubeEmbed/>
                </div>
                <div className="row-start-3  lg:col-span-2 lg:col-start-1 lg:row-start-3 bg-slate-300 ">
                    Check us out on social media
                </div>
                <div className="col-span-2 row-start-2 lg:row-span-2 lg:col-start-3 lg:row-start-1  bg-slate-500">
                    Our Partnered Streamers
                </div>
                <div className="row-start-3 lg:col-start-3 lg:row-start-3 bg-slate-700">
                    Sign Up for Our Partnered Streamer Program!
                </div>
            </div>
        </div>
     );
}
 
export default Home;