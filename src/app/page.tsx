import Header from "@/components/Header";
import Image from "next/image";
import TopDecoration from "../../public/top-decoration.svg";
import Container from "@/components/Container";
import Banner from "@/components/Banner";
import About from "@/components/About";
import CardsContainer from "@/components/CardsContainer";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="flex flex-col justify-center gap-[120px] pt-20">
          <Container>
            <Header />
          </Container>
          <Container>
            <Banner />
          </Container>
          <Container>
            <About />
          </Container>
          <Container>
            <CardsContainer />
          </Container>
          <Container>
            <Contact />
          </Container>
          <Footer />
        </div>
      </div>
      <Image
        src={TopDecoration}
        alt=""
        className="hidden lg:block absolute top-0 right-0 pointer-events-none -z-10"
      />
    </>
  );
}
