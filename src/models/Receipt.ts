import { Schema, model } from 'mongoose';

const receiptSchema: Schema = new Schema({
  createdAt: Date,
  total: Number,
  shop: String,
  items: [{
    price: Number,
    name: String,
    category: String,
  }],
});

export default model('Receipt', receiptSchema);
