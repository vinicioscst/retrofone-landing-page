import Header from "@/components/Header";
import Image from "next/image";
import TopDecoration from "../../public/top-decoration.svg";
import BottomDecoration from "../../public/bottom-decoration.svg";
import Container from "@/components/Container";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="flex flex-col justify-center gap-[100px] pt-20 pb-32">
          <Container>
            <Header />
          </Container>
          <Container>
            <Banner />
          </Container>
        </div>
      </div>
      <Image
        src={TopDecoration}
        alt=""
        className="hidden md:block absolute top-0 right-0 pointer-events-none -z-10"
      />
      <Image
        src={BottomDecoration}
        alt=""
        className="hidden md:block absolute bottom-0 left-0 pointer-events-none -z-50"
      />
    </>
  );
}
