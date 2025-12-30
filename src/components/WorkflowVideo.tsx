interface WorkflowVideoProps {
  src?: string;
  poster?: string;
  caption?: string;
}

export function WorkflowVideo({
  src,
  poster,
  caption,
}: WorkflowVideoProps) {
  if (!src) return null;

  return (
    <figure className="my-8 md:my-10">
      <video
        className="w-full rounded-lg border border-secondary shadow-lg shadow-black/30"
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
      />
      {caption && (
        <figcaption className="mt-3 text-sm text-text-muted text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
