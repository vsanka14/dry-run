interface VideoProps {
  src?: string;
  poster?: string;
  caption?: string;
}

export function Video({ src, poster, caption }: VideoProps) {
  if (!src) return null;

  return (
    <figure className="my-8 md:my-10">
      <div className="overflow-hidden rounded-lg border border-secondary shadow-lg shadow-black/30">
        <video
          className="w-full"
          src={src}
          poster={poster}
          controls
          loop
          muted
          playsInline
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm italic text-text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
