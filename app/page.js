import Landing from "@/components/Landing";
import Tabs from "@/components/tabs";
import CardNft from "@/components/cardNft";
import world from "@/public/assets/world.png";
import logo from "@/public/assets/BVlogo.png";
export default function Home() {
  return (
    <main className="relative">
      <Landing />
      <div className="bg-gray-950 pl-12 flex flex-wrap gap-2">
      <Tabs />
      

      </div>
      
     
    </main>
  );
}
