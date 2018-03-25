import mongoose from 'mongoose';

const schema = new mongoose.Schema({
	name: { type: String, required: true, unique: true, maxLength: 255 },
	id: { type: String, maxLength: 255, unique: true },
});

const Organisation = mongoose.model('Organisation', schema);

export default Organisation;
