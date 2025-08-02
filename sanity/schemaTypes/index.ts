import { type SchemaTypeDefinition } from "sanity";
import portfolioCategory from "./portfolioCategory";
import videoEditingSubCategory from "./videoEditingSubCategory";
import project from "./project";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [portfolioCategory, videoEditingSubCategory, project],
};
