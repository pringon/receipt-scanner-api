import { Document } from 'mongoose';

import Receipt from '../../models/Receipt';

const mockReceipt = {
    createdAt: new Date(),
    total: 925000,
    shop: 'University of Southampton', 
    items: [{
        price: 925000,
        name: 'Degree',
        category: 'bad choices'
    }]
};

const mockReceiptTwo = {
    createdAt: new Date(),
    total: 925000,
    shop: 'University of Leeds', 
    items: [{
        price: 925000,
        name: 'Degree',
        category: 'slightly less bad choices'
    }]
};

test('correct receipt resolved by create promise', () => {
    Receipt.create(mockReceipt)
    .then((createdReceipt: Document) => {
        // Test should be failing here, it instead passes.
        expect(createdReceipt).toEqual(expect.objectContaining(mockReceiptTwo));
    })
});
