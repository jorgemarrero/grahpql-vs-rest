import intro from "./decks/1-intro.mdx";
import rest from "./decks/2-rest.mdx";
import graphql from "./decks/3-graphql.mdx";
import workshop from "./decks/4-workshop.mdx";
import end from "./decks/5-end.mdx";

import "style-loader!css-loader!./styles.css";

export { default as theme } from "./src/theme";
export default [...intro, ...rest, ...graphql, ...workshop, ...end];
