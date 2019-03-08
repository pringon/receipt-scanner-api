import { Schema, model, Document } from 'mongoose';
import { IReceipt } from '../interfaces/Receipt';

interface IReceiptModel extends IReceipt, Document {}

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

export default model<IReceiptModel>('Receipt', receiptSchema);
