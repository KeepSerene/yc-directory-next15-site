export default function PingIndicator() {
  return (
    <div aria-hidden="true" className="relative">
      <div className="absolute -left-4 top-1">
        <span className="size-[11px] flex">
          <span className="w-full h-full bg-primary rounded-full opacity-75 inline-flex absolute animate-ping" />

          <span className="size-[11px] bg-primary rounded-full inline-flex relative" />
        </span>
      </div>
    </div>
  );
}
