import { component$ } from "@builder.io/qwik";

interface IconProps {
  classCustom?: string;
}
export const IconQuote = component$<IconProps>(({ classCustom }) => {
  return (
    <svg
      class={classCustom}
      width="55"
      height="56"
      viewBox="0 0 55 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.3709 25.7013H14.0482C13.4301 25.7013 12.8373 25.4558 12.4002 25.0187C11.9631 24.5816 11.7175 23.9888 11.7175 23.3706V16.3786C11.7175 15.7605 11.9631 15.1677 12.4002 14.7306C12.8373 14.2935 13.4301 14.048 14.0482 14.048H21.0402C21.6583 14.048 22.2511 14.2935 22.6882 14.7306C23.1253 15.1677 23.3709 15.7605 23.3709 16.3786V30.3626C23.3709 36.5785 20.2641 40.4614 14.0482 42.016"
        stroke="black"
        stroke-width="5.888"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M44.3467 25.7013H35.024C34.4059 25.7013 33.8131 25.4558 33.376 25.0187C32.9389 24.5816 32.6934 23.9888 32.6934 23.3706V16.3786C32.6934 15.7605 32.9389 15.1677 33.376 14.7306C33.8131 14.2935 34.4059 14.048 35.024 14.048H42.016C42.6342 14.048 43.227 14.2935 43.6641 14.7306C44.1011 15.1677 44.3467 15.7605 44.3467 16.3786V30.3626C44.3467 36.5785 41.2399 40.4614 35.024 42.016"
        stroke="black"
        stroke-width="5.888"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
});
