import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-300 w-full min-h-screen flex flex-col pt-5 pl-5 gap-5">
      <h1 className="text-black font-bold text-lg">ALPACA GENERATOR</h1>
      <div className="flex flex-row gap-10">
        <div className="imageContainer bg-purple-600 w-48 h-64"></div>
        <div className="buttonGroup flex flex-col gap-6">
          <div className="upperButtonGroup flex flex-col">
            <h2>ACCESSORIZE THE ALPACA'S</h2>
            <div className="upperGrid grid grid-cols-3 grid-rows-3 gap-2">
              <button className="button-style">Hair</button>
              <button className="button-style">Ears</button>
              <button className="button-style">Eyes</button>
              <button className="button-style">Mouth</button>
              <button className="button-style">Neck</button>
              <button className="button-style">Leg</button>
              <div className="col-span-3 flex flex-row gap-2">
                <button className="button-style flex-1">Accessories</button>
                <button className="button-style flex-1">Background</button>
              </div>
            </div>
          </div>
          <div className="lowerButtonGroup flex flex-col">
            <h2>STYLE</h2>
            <div className="lowerGrid grid grid-cols-3 grid-rows-2 gap-2">
              <button className="button-style">Default</button>
              <button className="button-style">Curls</button>
              <button className="button-style">Short</button>
              <button className="button-style">Bang</button>
              <button className="button-style">Elegant</button>
              <button className="button-style">Quiff</button>
            </div>
          </div>
        </div>
      </div>
      <div className="featureButtonGroup flex flex-row gap-4">
        <button className="button-style p-1">RANDOM</button>
        <button className="button-style p-1">DOWNLOAD</button>
      </div>
    </div>
  );
}
