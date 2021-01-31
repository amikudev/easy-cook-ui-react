export default interface RecipeSource {
  cook: string | undefined;
  book: string | undefined;
  url: string | undefined;
  page: string | number | undefined;
  [field: string]: any;
}
