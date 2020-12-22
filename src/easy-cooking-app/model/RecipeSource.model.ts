export default interface RecipeSource {
  cook: string | null;
  book: string | null;
  url: string | null;
  page: string | number | null;
  [field: string]: any;
}
