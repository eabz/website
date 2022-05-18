import Image from "next/image";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
export default function Home(): JSX.Element {
  return (
    <>
      <div className="mt-20">
        <p className="text-center text-2xl">Hi, I'm</p>
        <h1 className="text-center text-4xl my-2">Enrique Berrueta</h1>
      </div>
      <div className="mt-20 flex flex-row justify-center">
        <div className="rounded-full border-solid border-8 border-white-2 h-[315px] drop-shadow-lg">
          <Image
            className="rounded-full"
            src={"/img/portrait.jpeg"}
            width="300"
            height="300"
          />
        </div>
      </div>
      <div className="mt-20">
        <p className="text-center text-2xl">And this is my website.</p>
      </div>
        <div className="h-[10px]">
            <KeyboardDoubleArrowDownIcon className="animate-bounce" />
        </div>
    </>
  );
}
