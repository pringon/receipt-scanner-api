import Receipt from '../../models/Receipt';

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

test('Receipt is correctly created', () => {
});