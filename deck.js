import intro from "./decks/1-intro.mdx";
import rest from "./decks/2-rest.mdx";
import graphql from "./decks/3-graphql.mdx";
import end from "./decks/4-end.mdx";

export { default as theme } from "./src/theme";
export default [...intro, ...rest, ...graphql, , ...end];
