import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#181c25] border-t border-accent-2">
      <Container>
        <div className="py-16 flex flex-col lg:flex-row items-center justify-between">
          <Image 
          src={'/images/lf-logo-brand.png'}
          width={80}
          height={80}
          alt={"lf-logo"}
          objectFit={"none"}
          />
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://latticeflow.ai"
              className="rounded-full mx-3 bg-[#3e8ede] hover:bg-transparent hover:text-white border border-[#3e8ede] hover:border-white text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Visit our website
            </a>
            <a
              href={`https://latticeflow.ai/book-a-demo`}
              className="mx-3 font-bold text-white hover:text-[#3e8ede] rounded-full duration-200"
            >
              Book a demo
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
