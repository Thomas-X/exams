import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    creditCards: { type: [], default: [], required: true },
    balance: { type: Number, default: 0 },
});

const Account = mongoose.model('Account', schema);

export default Account;
