import AutoplayVideo from "@/components/AutoplayVideo";

export default function PhoneFrame({
  src,
  title,
  speed,
}: {
  src: string;
  title: string;
  speed?: number;
}) {
  return (
    <div className="relative w-full max-w-[300px]">
      {/* side buttons */}
      <div
        aria-hidden="true"
        className="absolute -left-[3px] top-24 h-8 w-[3px] rounded-l-md bg-neutral-700"
      />
      <div
        aria-hidden="true"
        className="absolute -left-[3px] top-36 h-12 w-[3px] rounded-l-md bg-neutral-700"
      />
      <div
        aria-hidden="true"
        className="absolute -left-[3px] top-52 h-12 w-[3px] rounded-l-md bg-neutral-700"
      />
      <div
        aria-hidden="true"
        className="absolute -right-[3px] top-44 h-16 w-[3px] rounded-r-md bg-neutral-700"
      />

      {/* body */}
      <div className="rounded-[3rem] bg-black p-[12px] shadow-[0_24px_60px_-16px_rgba(0,0,0,0.45)] ring-1 ring-black/20">
        {/* screen */}
        <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[2.4rem] bg-neutral-900">
          <AutoplayVideo src={src} title={title} speed={speed} />
          {/* dynamic island */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-3 h-[26px] w-[100px] -translate-x-1/2 rounded-full bg-black"
          />
        </div>
      </div>
    </div>
  );
}
