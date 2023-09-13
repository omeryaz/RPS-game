import { useGeneral } from "./../../Context";

function BackgroundSvg() {
  const { isBonusMode } = useGeneral();
  const strokeColor = "hsl(215deg 47% 30%)";
  const svgTriangleHeight = "85%";
  const svgPentagonHeight = "70%";
  return (
    <>
      {/* Selecting the background svg depending on the game mode */}
      {isBonusMode ? (
        <svg
          className="bg-svg bonus"
          height={svgPentagonHeight}
          viewBox="200 220 400 400 "
        >
          <polygon
            points="557.8033988749895,535.5570504584946 334.19660112501055,608.2113032590307 196,418 334.1966011250105,227.7886967409693 557.8033988749894,300.4429495415053"
            fill="transparent"
            stroke={strokeColor}
            strokeWidth={8}
          />
        </svg>
      ) : (
        <svg
          className="bg-svg"
          height={svgTriangleHeight}
          viewBox="0 -50 300 300"
        >
          <polygon
            points="150,10 250,180 50,180"
            fill="transparent"
            stroke={strokeColor}
            strokeWidth={8}
          />
        </svg>
      )}
    </>
  );
}

export default BackgroundSvg;
