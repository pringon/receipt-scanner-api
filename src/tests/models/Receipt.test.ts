import mongoose from 'mongoose';
import { DB_URL } from '../../config';
import Receipt, { IReceiptModel } from '../../models/Receipt';

beforeAll(() => {

  mongoose.connect(`${DB_URL}-test`, { useNewUrlParser : true });
});

afterAll(() => {

  mongoose.connection.close();
});

const mockReceipt = {
  total: 500,
  shop: 'Aldi',
  items: [
    {
      price: 100,
      name: 'Titan Chocolate (6 pack)',
      category: 'Snacks',
    },
    {
      price: 250,
      name: 'Smoked Salmon',
      category: 'Fish',
    },
    {
      price: 50,
      name: 'White Penne',
      category: 'Pasta',
      amount: 3,
    },
  ],
};

describe('Receipt model', () => {

  test('can create a receipt', async () => {
    const receipt: IReceiptModel = await Receipt.create(mockReceipt);

    expect(receipt.shop).toBe(mockReceipt.shop);
    expect(receipt.total).toBe(mockReceipt.total);
    expect(receipt.items.length).toBe(mockReceipt.items.length);
  });
});
