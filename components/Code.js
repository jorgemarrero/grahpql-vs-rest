import React from "react";
import { Code } from "mdx-deck";
import styled, { withTheme } from "styled-components";
import { fontSize, space, color } from "styled-system";

const css = key => props => props.theme[key];
const Pre = styled.pre(
  [],
  props => ({
    fontFamily: props.theme.monospace,
    textAlign: "left",
    whiteSpace: "pre-wrap",
    marginTop: "6vh!important",
    marginBottom: "2vh!important"
  }),
  fontSize,
  space,
  color,
  css("pre")
);
Pre.propTypes = {
  ...fontSize.propTypes,
  ...space.propTypes,
  ...color.propTypes
};
Pre.defaultProps = {
  fontSize: 1,
  m: 0,
  p: 2,
  color: "pre",
  bg: "preBackground"
};

const code = withTheme(props => {
  const { theme } = props;
  if (theme.prism && theme.prism.style) {
    return <Code {...props} />;
  }
  return <Pre {...props} />;
});

export default code;
