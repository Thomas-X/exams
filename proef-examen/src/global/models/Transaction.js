import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    amount: { type: Number, required: true },
    fromCreditCardId: { type: String, required: true },
    toCreditCardId: { type: String, required: true },
});

const Transaction = mongoose.model('Transaction', schema);

export default Transaction;
