import Banner from "@/components/Banner";
import Image from "next/image";
import SignupPage from "./signup/page";
import Featured from "@/components/Featured";

export default function Home() {
  return (
    <div>
      {/* home page  */}
      <Banner/>
      <Featured/>
    </div>
  );
}
