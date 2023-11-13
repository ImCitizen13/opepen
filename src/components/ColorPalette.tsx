import { useState } from "react";
import { useColors } from "~/context/ColorsContext";

type PaletteDimentions = {
  width: number;
  height: number;
};

export default function ColorPalette() {
  const { faceColor, eyesColor, lipsColor, pupleColor, mouthLineColor } =
    useColors();
  const [dimentions, setDimentions] = useState<PaletteDimentions>({
    width: 170,
    height: 105,
  });
  const border = "border border-solid border-gray-400"

  return (
    <div>
      <h1 className=" text-white">Color Palette</h1>
      <div
        id="colorPalette"
        className="flexRowCenter"
        style={{
          width: dimentions.width + "px",
          height: dimentions.height + "px",
        }}
      >
        <div
          id="leftPalette"
          className={"flex items-center justify-center " + border}
        >
          <div
            className={"h-[100%] w-[100%] " + border }
            style={{ backgroundColor: faceColor }}
          ><h2 className="">faceColor</h2></div>
        </div>
        <div id="rightPalette" className={"flexColCenter " + border }>
          <div id="topRightPalette">
            <div
              className="h-[100%] w-[100%] "
              style={{ backgroundColor: eyesColor }}
            ><h2 className="">eyesColor</h2></div>
          </div>
          <div
            id="bottomRightPalette"
            className={"flexRowCenter " + border}
          >
            <div className={"flexColCenter h-[100%] w-[38%] " + border}>
              <div className={"flexRowCenter h-[38%] w-[100%] " + border}>
                <div
                  className="h-[100%] w-[61%]"
                  style={{ backgroundColor: mouthLineColor }}
                ></div>
                <div
                  className="h-[100%] w-[38%] "
                  style={{ backgroundColor: "rgba(0,0,0,0)" }}
                ></div>
              </div>

              <div
                className="h-[61%] w-[100%]"
                style={{ backgroundColor: mouthLineColor }}
              ></div>
            </div>

            <div
              className={"h-[100%] w-[61%] " + border }
              style={{ backgroundColor: lipsColor }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
