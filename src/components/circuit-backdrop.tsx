export function CircuitBackdrop({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="#00F0D9" strokeWidth="1.5" opacity="0.35">
        <path d="M0 120H220V60H460V180H800" />
        <path d="M0 340H160V420H520V300H800" />
        <path d="M60 0V220H340V420" />
        <path d="M720 0V160H480V500H720V600" />
        <path d="M180 600V480H620" />
      </g>
      <g fill="#00F0D9">
        <circle cx="220" cy="120" r="4" />
        <circle cx="460" cy="60" r="4" />
        <circle cx="460" cy="180" r="4" />
        <circle cx="160" cy="340" r="4" />
        <circle cx="160" cy="420" r="4" />
        <circle cx="520" cy="420" r="4" />
        <circle cx="520" cy="300" r="4" />
        <circle cx="60" cy="220" r="4" />
        <circle cx="340" cy="220" r="4" />
        <circle cx="340" cy="420" r="4" />
        <circle cx="720" cy="160" r="4" />
        <circle cx="480" cy="160" r="4" />
        <circle cx="480" cy="500" r="4" />
        <circle cx="720" cy="500" r="4" />
        <circle cx="180" cy="480" r="4" />
        <circle cx="620" cy="480" r="4" />
      </g>
    </svg>
  );
}
