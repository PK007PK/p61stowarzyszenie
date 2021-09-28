export const theme = {};

theme.breakpoint = {
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1550,
};

theme.media = {
    xsAbove: `@media (min-width: ${theme.breakpoint.xs}px)`,
    xsBelow: `@media (max-width: ${theme.breakpoint.xs - 1}px)`,
    smAbove: `@media (min-width: ${theme.breakpoint.sm}px)`,
    smBelow: `@media (max-width: ${theme.breakpoint.sm - 1}px)`,
    mdAbove: `@media (min-width: ${theme.breakpoint.md}px)`,
    mdBelow: `@media (max-width: ${theme.breakpoint.md - 1}px)`,
    lgAbove: `@media (min-width: ${theme.breakpoint.lg}px)`,
    lgBelow: `@media (max-width: ${theme.breakpoint.lg - 1}px)`,
    xlAbove: `@media (min-width: ${theme.breakpoint.xl}px)`,
    xlBelow: `@media (max-width: ${theme.breakpoint.xl - 1}px)`,
};

theme.elevationSpecial = {
    dp1: `0 2px 1px -1px rgba(214, 51, 132,.2), 0 1px 1px 0 rgba(214, 51, 132,.14), 0 1px 3px 0 rgba(214, 51, 132,.12);`,
    dp4: `0 2px 4px -1px rgba(214, 51, 132,.2), 0 4px 5px 0 rgba(214, 51, 132,.14), 0 1px 10px 0 rgba(214, 51, 132,.12);`,
    dp8: `0 5px 5px -3px rgba(214, 51, 132,.2), 0 8px 10px 1px rgba(214, 51, 132,.14), 0 3px 14px 2px rgba(214, 51, 132,.12);`,
};

theme.maxContainerWidth = {
    xs: 540,
    sm: 720,
    md: 960,
    lg: 1184,
    xl: 1400,
};
