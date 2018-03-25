import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
	organisationId: { type: String, maxLength: 255, default: ''},
    creditCards: { type: [], default: []},
    balance: { type: Number, default: 0 },
});

const Account = mongoose.model('Account', schema);

export default Account;
