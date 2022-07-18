import React from "react";
import Image from "next/image";
import {
  ArrowRightIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
type Props = {};

const Hero = (props: Props) => {
  return (
    <div
      className="hero min-h-[80vh]"
      style={
        {
          // bg-[url(https://placeimg.com/1000/800/arch)]
          // backgroundImage: "url(https://placeimg.com/1000/800/arch)",
        }
      }
    >
      <div className="hero-content text-neutral-content">
        <div className="max-w-lg mx-auto">
          <h1 className="mb-5 text-3xl md:text-5xl font-bold font-space">
            Ku Soo dhawoow Somali <span className="text-indigo-500">Shop.</span>
          </h1>
          <p className="mb-5 text-sm md:text-lg">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link href={"/shop"} passHref>
            <a className="btn btn-primary btn-md md:btn-lg">
              <span className="mr-2">
                <ChevronDoubleRightIcon className="md:w-10 h-6 w-6 md:h-10" />
              </span>
              Shop Now
            </a>
          </Link>
        </div>
        <div className="max-w-lg mx-auto">
          <Image
            width={1000}
            height={800}
            src={"/images/macbook.png"}
            alt="Product"
          />
          {/* className="w-full" */}
        </div>
      </div>
      <div className="hero-overlay bg-opacity-60"></div>
    </div>
  );
};

export default Hero;
