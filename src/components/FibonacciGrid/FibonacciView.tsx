import { Children, PropsWithChildren, ReactNode, useState } from "react";
import styles from "./FibonacciGrid.module.css";

export enum OrientationEnum {
  horizontal = 1,
  vertical = 2,
  verticalReverse = 3,
  horizontalReverse = 4,
}

type ViewResolution = {
  width: string;
  height: string;
};

enum ViewType {
  largest = 1,
  large = 2,
  medium = 3,
  small = 4,
}

export type FibonacciViewProps = {
  _orientation: OrientationEnum;
  _flip?: boolean;
};

const FULL = "100%";
const LARGE = "62.5%";
const SMALL = "37.5%";

function getViewResolution(orientation: OrientationEnum): ViewResolution {
  if (
    orientation === OrientationEnum.horizontal ||
    orientation === OrientationEnum.horizontalReverse
  ) {
    // width: "960px", height: "720px"
    return { width: "480px", height: "360px" };
  }
  return { height: "480px", width: "360px" };
}

function orientView(
  orientation: OrientationEnum,
  viewType: ViewType,
): ViewResolution {
  if (
    orientation === OrientationEnum.horizontal ||
    orientation === OrientationEnum.horizontalReverse
  ) {
    if (viewType === ViewType.largest) return { width: LARGE, height: FULL };
    else if (viewType === ViewType.large) return { width: SMALL, height: FULL };
    else if (viewType === ViewType.medium)
      return { width: FULL, height: LARGE };
    else return { width: FULL, height: SMALL };
  } else {
    //(orientation === OrientationEnum.vertical) {
    if (viewType === ViewType.largest) return { height: LARGE, width: FULL };
    else if (viewType === ViewType.large) return { height: SMALL, width: FULL };
    else if (viewType === ViewType.medium)
      return { height: FULL, width: LARGE };
    else return { height: FULL, width: SMALL };
  }
}

// function flip(){

// }//

// Fib grid has to be modulo 3

export default function FibonacciView({
  _orientation,
  children,
  _flip = false,
}: PropsWithChildren<FibonacciViewProps>) {
  const viewChildren = Children.toArray(children);
  const [flip, setFlip] = useState<boolean>(_flip);
  const [orientation, setOrientation] = useState<OrientationEnum>(_orientation);
  const [nBoxes, setNboxes] = useState<number>(viewChildren.length);
  const [elementResolution, setElementResolution] = useState<ViewResolution>(
    getViewResolution(orientation),
  );

  return (
    <div
      id={`${styles.fibGrid}`}
      style={{
        width: elementResolution.width,
        height: elementResolution.height,
        flexDirection:
          orientation === OrientationEnum.horizontal ||
          orientation === OrientationEnum.horizontalReverse
            ? "column"
            : "row",
      }}
    >
      {/* Largest View */}
      {(orientation === OrientationEnum.horizontal ||
        (orientation === OrientationEnum.verticalReverse && !flip) ||
        (orientation === OrientationEnum.vertical && flip)) && (
        <div
          className={`${styles.leftCol} flexRowCenter`}
          style={orientView(orientation, ViewType.largest)}
        >
          {viewChildren[0] && viewChildren[0]}
        </div>
      )}

      {/* Large View */}
      <div
        className={`${styles.rightCol}`}
        style={orientView(orientation, ViewType.large)}
      >
        {/* Medium View */}
        {((orientation === OrientationEnum.horizontal && !flip) ||
          (orientation === OrientationEnum.horizontalReverse && !flip) ||
          orientation === OrientationEnum.vertical) && (
          <div
            className={`${styles.topRight}`}
            style={orientView(orientation, ViewType.medium)}
          >
            {viewChildren[1] && viewChildren[1]}
          </div>
        )}

        {/* Small View */}
        <div
          className={`${styles.bottomRight}`}
          style={orientView(orientation, ViewType.small)}
        >
          {viewChildren[2] && viewChildren[2]}
        </div>

        {/* Medium View */}
        {((orientation === OrientationEnum.horizontalReverse && flip) ||
          orientation === OrientationEnum.verticalReverse ||
          (orientation === OrientationEnum.horizontal && flip)) && (
          <div
            className={`${styles.topRight}`}
            style={orientView(orientation, ViewType.medium)}
          >
            {viewChildren[1] && viewChildren[1]}
          </div>
        )}
      </div>

      {/* Largest View */}
      {((orientation === OrientationEnum.vertical && !flip) ||
        (orientation === OrientationEnum.horizontalReverse) ||
        (orientation === OrientationEnum.verticalReverse && flip) )&& (
        <div
          className={`${styles.leftCol}`}
          style={orientView(orientation, ViewType.largest)}
        >
          {viewChildren[0] && viewChildren[0]}
        </div>
      )}
    </div>
  );
}
