export const BREAKPOINTS = {
  xs: 0,
  sm: 320,
  md: 480,
  lg: 768,
  xl: 1200,
};

const mediaQuery = (breakpoint: keyof typeof BREAKPOINTS) =>
  `@media (min-width: ${BREAKPOINTS[breakpoint]}px)`;

export default Object.keys(BREAKPOINTS).reduce<
  Record<keyof typeof BREAKPOINTS, string>
>(
  (accumulator, breakpoint) => {
    const bs = breakpoint as keyof typeof BREAKPOINTS;
    accumulator[bs] = mediaQuery(bs);
    return accumulator;
  },
  { xs: "", sm: "", md: "", lg: "", xl: "" }
);
