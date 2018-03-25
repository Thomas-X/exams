import mongoose from 'mongoose';

const schema = new mongoose.Schema({
	id: { type: String, required: true, unique: true },
	username: { type: String, maxLength: 255, required: true, unique: true, },
	password: { type: String, maxLength: 255, required: true },
	role: { type: String, maxLength: 255, required: true, default: 'user' },
	creditCardId: { type: String, maxLength: 255, default: '' },
	accountId: { type: String, maxLength: 255, default: '' },
	organisationId: { type: String, maxLength: 255, default: ''},
});

const User = mongoose.model('User', schema);

export default User;
