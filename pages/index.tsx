import Image from "next/image";
import Link from "next/link";

export default function Home(): JSX.Element {
  return (
    <>
      <div id="home">
        <div className="mt-20">
          <p className="text-center text-2xl text-blue">Hi, I'm</p>
          <h1 className="text-center text-4xl my-2">Enrique Berrueta</h1>
        </div>
        <div className="mt-14 flex flex-row justify-center">
          <div className="rounded-full border-solid border-8 border-white-2 h-[315px] drop-shadow-lg">
            <Image
              className="rounded-full"
              src={"/img/portrait.jpeg"}
              width="300"
              height="300"
            />
          </div>
        </div>
        <div className="mt-14">
          <p className="text-center text-2xl text-blue">
            And this is my website.
          </p>
        </div>
        <div className="animate-bounce h-[50px] flex flex-row justify-center mt-14 cursor-pointer">
          <Link href="/#journey" scroll={true} passHref={false}>
            <Image src={"/icons/down.svg"} width="100px" height="100px" />
          </Link>
        </div>
      </div>
      <div id="journey">
        <h1 className="text-center text-4xl my-2 pt-32">My Journey.</h1>
      </div>
      {/*<div id="blog" className="bg-orange py-5">
        <h1 className="text-center text-4xl my-2 text-white pt-20">
          Some of my ideas.
        </h1>
      </div>*/}
      <div id="portfolio" className="bg-dark-blue py-5">
        <h1 className="text-center text-4xl my-2 pt-20 text-white">
          Some things I created.
        </h1>
      </div>
      <div id="connect" className="text-center py-5">
        <h1 className="text-center text-4xl my-2 pt-20">Lets connect.</h1>
        <p className="my-2 text-lg">
          The best way to contact me is through any of my social accounts.
        </p>
        <div className="flex flex-row justify-center gap-5 mx-auto my-12">
          <a href="https://twitter.com/eberruetazap" target="_blank">
            <Image src={"/icons/twitter.svg"} width="100px" height="100px" />
          </a>
          <a
            href="https://www.linkedin.com/in/enrique-berrueta-b6207323b/"
            target="_blank"
          >
            <Image src={"/icons/linkedin.svg"} width="100px" height="100px" />
          </a>
          <a href="https://github.com/eabz" target="_blank">
            <Image src={"/icons/github.svg"} width="100px" height="100px" />
          </a>
          <a href="https://instagram.com/eberruetazap/" target="_blank">
            <Image src={"/icons/instagram.svg"} width="100px" height="100px" />
          </a>
        </div>
      </div>
    </>
  );
}
