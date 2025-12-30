import React from "react";

interface VideoProps {
  src?: string;
  poster?: string;
  caption?: string;
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function Video({ src, poster, caption }: VideoProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

  // Check duration on mount in case metadata loaded before hydration
  React.useEffect(() => {
    const video = videoRef.current;
    if (video && video.duration) {
      setDuration(video.duration);
    }
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    video.paused ? video.play() : video.pause();
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = parseFloat(e.target.value);
  };

  if (!src) return null;

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <figure className="my-8 md:my-10">
      <div className="overflow-hidden rounded-lg border border-secondary shadow-lg shadow-black/30">
        <video
          ref={videoRef}
          className="w-full"
          src={src}
          poster={poster}
          loop
          muted
          playsInline
          onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        <div className="flex items-center gap-3 bg-secondary px-4 py-2">
          <button
            onClick={togglePlayPause}
            className="text-text transition-colors hover:text-accent"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
          <input
            type="range"
            min={0}
            max={duration || 100}
            value={currentTime}
            onChange={handleSeek}
            className="h-1 flex-1 cursor-pointer appearance-none rounded-full bg-primary"
            style={{
              background: `linear-gradient(to right, var(--color-accent) ${progress}%, var(--color-primary) ${progress}%)`,
            }}
            aria-label="Seek"
          />
          <span className="font-mono text-sm text-text-muted">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm italic text-text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
