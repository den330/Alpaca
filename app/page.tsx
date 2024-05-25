"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  enum ConfigurablePart {
    Hair = "Hair",
    Ears = "Ears",
    Eyes = "Eyes",
    Mouth = "Mouth",
    Neck = "Neck",
    Leg = "Leg",
    Accessories = "Accessories",
    Backgrounds = "Backgrounds",
  }

  var [currentImageState, setCurrentImageState] = useState({
    Hair: "Default",
    Ears: "Default",
    Eyes: "Default",
    Mouth: "Default",
    Neck: "Default",
    Leg: "Default",
    Accessories: "Earings",
    Background: "Blue",
  });
  var [currentSelectedPart, setCurrentSelectedPart] = useState(
    ConfigurablePart.Hair
  );

  enum HairOption {
    Default = "Default",
    Curls = "Curls",
    Short = "Short",
    Bang = "Bang",
    Elegant = "Elegant",
    Quiff = "Quiff",
  }

  enum EarOption {
    Default = "Default",
    TiltBackward = "TiltBackward",
    TiltForward = "TiltForward",
  }

  enum AccessoriesOption {
    Earings = "Earings",
    Glasses = "Glasses",
    Flower = "Flower",
    Headphone = "Headphone",
  }

  enum BackgroundOption {
    Blue = "Blue",
    Green = "Green",
    Grey = "Grey",
    Red = "Red",
    Yellow = "Yellow",
  }

  enum EyeOption {
    Angry = "Angry",
    Default = "Default",
    Star = "Star",
    Naughty = "Naughty",
    Panda = "Panda",
    Smart = "Smart",
  }

  enum MouthOption {
    Astonished = "Astonished",
    Default = "Default",
    Eating = "Eating",
    Laugh = "Laugh",
    Tongue = "Tongue",
  }

  enum LegOption {
    BubbleTea = "BubbleTea",
    Coockie = "Coockie",
    Default = "Default",
    GameConsole = "GameConsole",
    TiltBackward = "TiltBackward",
    TiltForward = "TiltForward",
  }

  enum NeckOption {
    Default = "Default",
    BendBackward = "BendBackward",
    BendForward = "BendForward",
    Thick = "Thick",
  }

  const PartOptionMapping = {
    [ConfigurablePart.Hair]: HairOption,
    [ConfigurablePart.Ears]: EarOption,
    [ConfigurablePart.Accessories]: AccessoriesOption,
    [ConfigurablePart.Backgrounds]: BackgroundOption,
    [ConfigurablePart.Eyes]: EyeOption,
    [ConfigurablePart.Mouth]: MouthOption,
    [ConfigurablePart.Leg]: LegOption,
    [ConfigurablePart.Neck]: NeckOption,
  };

  function generateImageURLFor(part: ConfigurablePart, option: String) {
    if (part === ConfigurablePart.Backgrounds) {
      return `/${part.toLowerCase()}/${option.toLowerCase()}70.png`;
    }
    let theOption = option;
    if (
      theOption === "tiltBackward" ||
      theOption === "tiltForward" ||
      theOption === "bendBackward" ||
      theOption === "bendForward" ||
      theOption === "bubbleTea" ||
      theOption === "gameConsole"
    ) {
      theOption = theOption.replace(/([A-Z])/g, "-$1");
    }
    return `/${part.toLowerCase()}/${option.toLowerCase()}.png`;
  }

  return (
    <div className="bg-gray-300 w-full min-h-screen flex flex-col pt-5 pl-5 gap-5">
      <h1 className="text-black font-bold text-lg">ALPACA GENERATOR</h1>
      <div className="flex flex-row gap-10">
        <div className="imageContainer bg-purple-600 w-48 h-64 relative">
          <Image
            src={generateImageURLFor(
              ConfigurablePart.Backgrounds,
              currentImageState.Background
            )}
            alt="background"
            layout="fill"
            className="absolute z-0"
            priority={true}
          />
          <Image
            src={generateImageURLFor(
              ConfigurablePart.Accessories,
              currentImageState.Accessories
            )}
            alt="accessories"
            layout="fill"
            className="absolute z-10"
          />
          <Image
            src={generateImageURLFor(
              ConfigurablePart.Ears,
              currentImageState.Ears
            )}
            alt="ears"
            layout="fill"
            className="absolute z-10"
          />
          <Image
            src={generateImageURLFor(
              ConfigurablePart.Hair,
              currentImageState.Hair
            )}
            alt="hair"
            layout="fill"
            className="absolute z-10"
          />
          <Image
            src={generateImageURLFor(
              ConfigurablePart.Neck,
              currentImageState.Neck
            )}
            alt="neck"
            layout="fill"
            className="absolute z-10"
          />
          <Image
            src={generateImageURLFor(
              ConfigurablePart.Eyes,
              currentImageState.Eyes
            )}
            alt="eyes"
            layout="fill"
            className="absolute z-10"
          />
          <Image
            src={"/nose.png"}
            alt="nose"
            layout="fill"
            className="absolute z-10"
          />
          <Image
            src={generateImageURLFor(
              ConfigurablePart.Mouth,
              currentImageState.Mouth
            )}
            alt="mouth"
            layout="fill"
            className="absolute z-10"
          />
          <Image
            src={generateImageURLFor(
              ConfigurablePart.Leg,
              currentImageState.Leg
            )}
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
