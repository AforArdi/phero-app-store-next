import Banner from "@/components/Banner";
import Stats from "@/components/Stats";
import TrendingApps from "@/components/TrendingApps";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Stats></Stats>
      <TrendingApps></TrendingApps>
    </div>
  );
}
