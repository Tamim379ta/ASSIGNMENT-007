import StatsPage from "@/app/stats/page";
import { PiPlus } from "react-icons/pi";
import HeroStat from "./Stat";
import FriendsPage from "@/app/friends/page";

const BannerPage = () => {
  return (
    <>
      <div className="hero bg-base-200 py-20">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
            <p className="py-6">
              Your personal shelf of meaningful connections. Browse, tend, and nurture the
              relationships that matter most.
            </p>
            <button className="btn bg-green-800 text-white font-semibold "> <PiPlus className="text-xl"/> Add a Friend</button>
          </div>
        </div>
      </div>

      <HeroStat />

      <FriendsPage/>
      

    </>
  );
};

export default BannerPage;