"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
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
    Cookie = "Cookie",
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
    Backgrounds: "Blue",
  });

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

  var [currentSelectedPart, setCurrentSelectedPart] = useState(
    ConfigurablePart.Hair
  );

  const currentOptionList = Object.values(
    PartOptionMapping[currentSelectedPart]
  );

  function handlePartButtonPress(e: React.MouseEvent<HTMLButtonElement>) {
    setCurrentSelectedPart(e.currentTarget.textContent as ConfigurablePart);
  }

  function generateImageURLFor(part: ConfigurablePart, option: String) {
    if (part === ConfigurablePart.Backgrounds) {
      return `/${part.toLowerCase()}/${option.toLowerCase()}70.png`;
    }
    let theOption = option;
    if (
      theOption === "TiltBackward" ||
      theOption === "TiltForward" ||
      theOption === "BendBackward" ||
      theOption === "BendForward" ||
      theOption === "BubbleTea" ||
      theOption === "GameConsole"
    ) {
      theOption = addHyphenBeforeSecondUpperCase(theOption as string);
    }
    return `/${part.toLowerCase()}/${theOption.toLowerCase()}.png`;
  }

  function addHyphenBeforeSecondUpperCase(input: string): string {
    let uppercaseCount = 0; // Counter for uppercase letters
    return input.replace(/([A-Z])/g, (match) => {
      uppercaseCount += 1; // Increment counter for each uppercase letter
      if (uppercaseCount === 2) {
        return "-" + match; // Add hyphen before the second uppercase letter
      }
      return match; // Return the original match if it's not the second uppercase
    });
  }
  const canvas = document.createElement("canvas");
  canvas.width = 600; // Set to the width of your image container
  canvas.height = 800; // Set to the height of your image container
  const ctx = canvas.getContext("2d");

  async function composeAndDownloadImage() {
    // List of images and their positions (assuming all fill the canvas)
    const images = [
      generateImageURLFor(
        ConfigurablePart.Backgrounds,
        currentImageState.Backgrounds
      ),
      generateImageURLFor(
        ConfigurablePart.Accessories,
        currentImageState.Accessories
      ),
      generateImageURLFor(ConfigurablePart.Ears, currentImageState.Ears),
      generateImageURLFor(ConfigurablePart.Neck, currentImageState.Neck),
      "/nose.png",
      generateImageURLFor(ConfigurablePart.Mouth, currentImageState.Mouth),
      generateImageURLFor(ConfigurablePart.Leg, currentImageState.Leg),
      generateImageURLFor(ConfigurablePart.Hair, currentImageState.Hair),
      generateImageURLFor(ConfigurablePart.Eyes, currentImageState.Eyes),
    ];

    // Load and draw images
    for (const src of images) {
      await new Promise((resolve, reject) => {
        const img = new window.Image();
        img.onload = () => {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // adjust positioning if necessary
          resolve();
        };
        img.onerror = reject;
        img.src = src;
      });
    }

    // Trigger download
    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "alpaca-composite.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function handleRandom() {
    setCurrentImageState((prevState) => {
      return {
        ...prevState,
        Hair: HairOption[
          Object.keys(HairOption)[
            Math.floor(Math.random() * Object.keys(HairOption).length)
          ] as keyof typeof HairOption
        ],
        Ears: EarOption[
          Object.keys(EarOption)[
            Math.floor(Math.random() * Object.keys(EarOption).length)
          ] as keyof typeof EarOption
        ],
        Eyes: EyeOption[
          Object.keys(EyeOption)[
            Math.floor(Math.random() * Object.keys(EyeOption).length)
          ] as keyof typeof EyeOption
        ],
        Mouth:
          MouthOption[
            Object.keys(MouthOption)[
              Math.floor(Math.random() * Object.keys(MouthOption).length)
            ] as keyof typeof MouthOption
          ],
        Neck: NeckOption[
          Object.keys(NeckOption)[
            Math.floor(Math.random() * Object.keys(NeckOption).length)
          ] as keyof typeof NeckOption
        ],
        Leg: LegOption[
          Object.keys(LegOption)[
            Math.floor(Math.random() * Object.keys(LegOption).length)
          ] as keyof typeof LegOption
        ],
        Accessories:
          AccessoriesOption[
            Object.keys(AccessoriesOption)[
              Math.floor(Math.random() * Object.keys(AccessoriesOption).length)
            ] as keyof typeof AccessoriesOption
          ],
        Backgrounds:
          BackgroundOption[
            Object.keys(BackgroundOption)[
              Math.floor(Math.random() * Object.keys(BackgroundOption).length)
            ] as keyof typeof BackgroundOption
          ],
      };
    });
  }

  return (
    <div className="bg-green-300 w-full min-h-screen flex flex-col pt-5 pl-5 gap-5">
      <h1 className="text-black font-bold text-lg">ALPACA GENERATOR</h1>
      <div className="flex flex-row gap-10">
        <div className="imageContainer bg-purple-600 w-48 h-64 relative">
          <Image
            src={generateImageURLFor(
              ConfigurablePart.Backgrounds,
              currentImageState.Backgrounds
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
        <div className="buttonGroup flex flex-col gap-6 w-96">
          <div className="upperButtonGroup flex flex-col">
            <h2>ACCESSORIZE THE ALPACA'S</h2>
            <div className="upperGrid grid grid-cols-3 grid-rows-3 gap-2">
              <button
                className="button-style"
                style={{
                  backgroundColor:
                    currentSelectedPart === ConfigurablePart.Hair
                      ? "blue"
                      : "initial",
                }}
                onClick={handlePartButtonPress}
              >
                Hair
              </button>
              <button
                className="button-style"
                style={{
                  backgroundColor:
                    currentSelectedPart === ConfigurablePart.Ears
                      ? "blue"
                      : "initial",
                }}
                onClick={handlePartButtonPress}
              >
                Ears
              </button>
              <button
                className="button-style"
                style={{
                  backgroundColor:
                    currentSelectedPart === ConfigurablePart.Eyes
                      ? "blue"
                      : "initial",
                }}
                onClick={handlePartButtonPress}
              >
                Eyes
              </button>
              <button
                className="button-style"
                style={{
                  backgroundColor:
                    currentSelectedPart === ConfigurablePart.Mouth
                      ? "blue"
                      : "initial",
                }}
                onClick={handlePartButtonPress}
              >
                Mouth
              </button>
              <button
                className="button-style"
                style={{
                  backgroundColor:
                    currentSelectedPart === ConfigurablePart.Neck
                      ? "blue"
                      : "initial",
                }}
                onClick={handlePartButtonPress}
              >
                Neck
              </button>
              <button
                className="button-style"
                style={{
                  backgroundColor:
                    currentSelectedPart === ConfigurablePart.Leg
                      ? "blue"
                      : "initial",
                }}
                onClick={handlePartButtonPress}
              >
                Leg
              </button>
              <div className="col-span-3 flex flex-row gap-2">
                <button
                  className="button-style flex-1"
                  style={{
                    backgroundColor:
                      currentSelectedPart === ConfigurablePart.Accessories
                        ? "blue"
                        : "initial",
                  }}
                  onClick={handlePartButtonPress}
                >
                  Accessories
                </button>
                <button
                  className="button-style flex-1"
                  style={{
                    backgroundColor:
                      currentSelectedPart === ConfigurablePart.Backgrounds
                        ? "blue"
                        : "initial",
                  }}
                  onClick={handlePartButtonPress}
                >
                  Backgrounds
                </button>
              </div>
            </div>
          </div>
          <div className="lowerButtonGroup flex flex-col">
            <h2>STYLE</h2>
            <div className="lowerGrid grid grid-cols-3 grid-rows-2 gap-2">
              {currentOptionList.map((option) => (
                <button
                  className="button-style"
                  onClick={() => {
                    setCurrentImageState((prevState) => {
                      return {
                        ...currentImageState,
                        [currentSelectedPart]: option,
                      };
                    });
                  }}
                  style={{
                    backgroundColor:
                      currentImageState[currentSelectedPart] === option
                        ? "blue"
                        : "initial",
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="featureButtonGroup flex flex-row gap-4">
        <button className="button-style p-1" onClick={handleRandom}>
          RANDOM
        </button>
        <button className="button-style p-1" onClick={composeAndDownloadImage}>
          DOWNLOAD
        </button>
      </div>
    </div>
  );
}
