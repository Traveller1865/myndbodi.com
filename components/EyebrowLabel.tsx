type EyebrowLabelProps = {
  text: string;
  variant: 'dot' | 'rule';
};

export function EyebrowLabel({ text, variant }: EyebrowLabelProps) {
  return (
    <div className="flex items-center gap-2">
      {variant === 'dot' ? (
        <span className="w-[6px] h-[6px] rounded-full bg-gold flex-shrink-0" />
      ) : (
        <span className="w-6 h-[1.5px] bg-gold flex-shrink-0" />
      )}
      <span
        className="font-body font-semibold uppercase tracking-[0.24em] text-[11px]"
        style={{ color: variant === 'dot' ? '#B8946A' : '#8A6F4E' }}
      >
        {text}
      </span>
    </div>
  );
}
