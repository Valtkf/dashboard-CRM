import React from "react";

export const StripeIcon = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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
          crossOrigin="anonymous"
        />
      </defs>
    </svg>
  );
};

export default StripeIcon;
