import { useRef, useEffect } from "react";

type OutcomeVideoProps = {
  outcome: string;
};

const OutcomeVideo = ({ outcome }: OutcomeVideoProps) => {
  // Decide which video will play based on the outcome
  const videoUrl =
    outcome === "you win"
      ? "/videos/AsianManScreamingWin.mp4"
      : "/videos/AsianManScreamingLoseReversed.mp4";

  const videoRef = useRef<HTMLVideoElement>(null);

  // Function that triggers when the video ends
  const hideVideo = () => {
    if (videoRef.current) {
      videoRef.current.style.display = "none";
    }
  };

  // Random position for the video to appear at
  const getRandomPosition = () => {
    const y = window.innerHeight;
    const x = window.innerWidth;
    const randomX = Math.floor(Math.random() * x);
    const randomY = Math.floor(Math.random() * y);
    return [randomX, randomY];
  };

  // Pass the random positions to the video every time it mounts
  useEffect(() => {
    const [randomX, randomY] = getRandomPosition();
    if (videoRef.current) {
      videoRef.current.style.top = `${randomY}px`;
      videoRef.current.style.left = `${randomX}px`;
    }
  }, []);

  return (
    <video
      key={outcome}
      className="outcome-screen__video"
      ref={videoRef}
      width="320"
      height="240"
      autoPlay
      onEnded={hideVideo}
    >
      <source src={videoUrl} type="video/mp4" />
    </video>
  );
};

export default OutcomeVideo;
