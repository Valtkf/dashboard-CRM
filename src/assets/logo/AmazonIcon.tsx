export const AmazonIcon = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="30" height="30" rx="15" fill="url(#pattern0_3_8829)" />
      <defs>
        <pattern
          id="pattern0_3_8829"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_3_8829"
            transform="translate(0.0999999 0.116667) scale(0.00340741)"
          />
        </pattern>
        <image
          id="image0_3_8829"
          width="225"
          height="225"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};
