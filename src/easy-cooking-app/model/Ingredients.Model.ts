export default class IngredientsModel {
  name?: string | null;
  quantity?: string | number | null;
  uom?: string | null;
  [field: string]: any;
}
