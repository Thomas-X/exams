import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    accountId: { type: String, maxLength: 255, required: true, default: ''},
    limit: { type: Number, default: 0, required: true, },
    transactions: { type: [], default: [], required: true},
});

const CreditCard = mongoose.model('CreditCard', schema);

export default CreditCard;
