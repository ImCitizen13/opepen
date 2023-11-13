import { useState } from "react";
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
  // _resolution: ViewResolution;
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

// Fib grid has to be modulo 3
export default function FibonacciView({ _orientation }: FibonacciViewProps) {
  const [orientation, setOrientation] = useState<OrientationEnum>(_orientation);
  const [nBoxes, setNboxes] = useState<number>(3);
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
      {(orientation === OrientationEnum.horizontal ||
        orientation === OrientationEnum.verticalReverse) && (
        <div
          className={`${styles.leftCol}`}
          style={orientView(orientation, ViewType.largest)}
        >
          1
        </div>
      )}

      <div
        className={`${styles.rightCol}`}
        style={orientView(orientation, ViewType.large)}
      >
        {(orientation === OrientationEnum.horizontal ||
          orientation === OrientationEnum.vertical) && (
          <div
            className={`${styles.topRight}`}
            style={orientView(orientation, ViewType.medium)}
          >
            2
          </div>
        )}

        <div
          className={`${styles.bottomRight}`}
          style={orientView(orientation, ViewType.small)}
        >
          3
        </div>

        {(orientation === OrientationEnum.horizontalReverse ||
          orientation === OrientationEnum.verticalReverse) && (
          <div
            className={`${styles.topRight}`}
            style={orientView(orientation, ViewType.medium)}
          >
            2
          </div>
        )}
      </div>
      {(orientation === OrientationEnum.vertical ||
        orientation === OrientationEnum.horizontalReverse) && (
        <div
          className={`${styles.leftCol}`}
          style={orientView(orientation, ViewType.largest)}
        >
          1
        </div>
      )}
    </div>
  );
}
