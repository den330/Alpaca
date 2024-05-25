import Image from "next/image";

export default function Home() {
  enum ConfigurablePart {
    Hair,
    Ears,
    Eyes,
    Mouth,
    Neck,
    Leg,
    Accessories,
    Background,
  }

  enum HairOption {
    Default,
    Curls,
    Short,
    Bang,
    Elegant,
    Quiff,
  }

  enum EarOption {
    Default,
    TiltBackward,
    TiltForward,
  }

  enum AccessoriesOption {
    Earings,
    Glasses,
    Flower,
    Headphone,
  }

  enum BackgroundOption {
    Blue,
    Green,
    Grey,
    Red,
    Yellow,
  }

  enum EyeOption {
    Angry,
    Default,
    Star,
    Naughty,
    Panda,
    Smart,
  }

  enum MouthOption {
    Astonished,
    Default,
    Eating,
    Laugh,
    Tongue,
  }

  enum LegOption {
    BubbleTea,
    Coockie,
    Default,
    GameConsole,
    TiltBackward,
    TiltForward,
  }

  enum NeckOption {
    Default,
    BendBackward,
    BendForward,
    Thick,
  }

  return (
    <div className="bg-gray-300 w-full min-h-screen flex flex-col pt-5 pl-5 gap-5">
      <h1 className="text-black font-bold text-lg">ALPACA GENERATOR</h1>
      <div className="flex flex-row gap-10">
        <div className="imageContainer bg-purple-600 w-48 h-64 relative">
          <Image
            src="/backgrounds/darkblue70.png"
            alt="background"
            layout="fill"
            className="absolute z-0"
            priority={true}
          />
          <Image
            src="/accessories/earings.png"
            alt="accessories"
            layout="fill"
            className="absolute z-10"
          />
          <Image
            src="/ears/default.png"
            alt="ears"
            layout="fill"
            className="absolute z-10"
          />
          <Image
            src="/hair/default.png"
            alt="hair"
            layout="fill"
            className="absolute z-10"
          />
          <Image
            src="/hair/bang.png"
            alt="hair"
            layout="fill"
            className="absolute z-20"
          />
          <Image
            src="/neck/default.png"
            alt="neck"
            layout="fill"
            className="absolute z-10"
          />
          <Image
            src="/eyes/star.png"
            alt="eyes"
            layout="fill"
            className="absolute z-10"
          />
          <Image
            src="/nose.png"
            alt="nose"
            layout="fill"
            className="absolute z-10"
          />
          <Image
            src="/mouth/laugh.png"
            alt="mouth"
            layout="fill"
            className="absolute z-10"
          />
          <Image
            src="/leg/default.png"
            alt="leg"
            layout="fill"
            className="absolute z-10"
          />
        </div>
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
