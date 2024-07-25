import Image from "next/image";
import { CMS_NAME, CMS_URL } from "../lib/constants";
import Link from "next/link";
import CustomerLogos from "./customer-logos";

export default function Intro() {
  return (
    <>
      <section className="flex-col md:flex-col flex items-center md:justify-between pt-32 pb-32 md:pb-12 bg-[url('/images/oc07.png')] bg-center bg-cover bg-no-repeat">

        <div className=" container grid md:grid-cols-2 px-4 md:px-auto gap-10 flex items-center transform m-auto w-full min-h-[60vh]">
          <div className="container">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 text-accent-7">
              LatticeFlow
            </h1>
            <p className="text-lg text-accent-7">
              Eliminate the guesswork of finding and fixing data and model issues manually.
              Use LatticeFlow AI to auto-diagnose issues for everyone on your team and accelerate model development and deployment at scale.
            </p>
            <Link href={'/news'}>
              <button className="bg-lf-blue border-2 border-lf-blue hover:bg-transparent hover:shadow-lg hover:text-lf-blue text-white py-2 px-14 rounded-full mt-8 duration-300 shadow-lf-blue">Read our news</button>
            </Link>

          </div>
          <div className="mockup-browser bg-base-300 bg-gray-100 border shadow-2xl">
            <div className="mockup-browser-toolbar">
              <div className="input border-gray-300">latticeflow.ai</div>
            </div>
            <Image
              src={'/images/lf-site.png'}
              width={1000}
              height={1000}
              alt="test"
            />
          </div>

        </div>
        <CustomerLogos className="bg-transparent" />
      </section>

    </>
  );
}
