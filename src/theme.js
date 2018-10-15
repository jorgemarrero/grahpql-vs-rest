import baseTheme from "mdx-deck/themes";
console.log(baseTheme);
export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    text: "#d6deeb",
    background: "#011627",
    link: "#addb67"
  }
};
