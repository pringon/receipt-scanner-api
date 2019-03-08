export interface IItem {
  price: Number;
  name: String;
  category: String;
  amount: Number;
}

export interface IReceipt {
  total: Number;
  shop: String;
  items: IItem[];
}
