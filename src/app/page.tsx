import Header from "@/components/Header";
import Image from "next/image";
import TopDecoration from "../../public/top-decoration.svg";
import BottomDecoration from "../../public/bottom-decoration.svg";

export default function Home() {
  return (
    <>
      <div className="min-h-screen relative">
        <div className="flex flex-col justify-center gap-[100px] pt-20 pb-32">
          <div className="w-full max-w-[1100px] px-5 mx-auto">
            <Header />
          </div>
        </div>
      </div>
      <Image
        src={TopDecoration}
        alt=""
        className="scale-50 md:scale-100 absolute -top-14 -right-36 md:top-0 md:right-0 pointer-events-none -z-10"
      />
      <Image
        src={BottomDecoration}
        alt=""
        className="scale-50 md:scale-100 absolute -bottom-32 -left-20 md:bottom-0 md:right-0 pointer-events-none -z-10"
      />
    </>
  );
}
