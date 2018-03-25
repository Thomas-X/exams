import { Router } from 'express';
import uuid from 'uuid/v4';
import { authMiddleware } from '../factories/createAuthHandler';
import Account from '../global/models/Account';
import Organisation from '../global/models/Organisation';

const Api = Router();

Api.get('/', (req, res) => {
	res.send('hi from Api');
});

Api.get('/getAllAccounts', async (req, res) => {
	let accounts = await Account.find({});
	const accountsCopy = accounts.slice();
	if (req.query.addRedundancy == 'true') {
		await new Promise((resolve) => {
			accountsCopy.forEach(async (account, index) => {
				const org = (await Organisation.find({ id: account.organisationId }))[0];
				accountsCopy[index]._doc.organisation = org;
				if ((index + 1) === accountsCopy.length) {
					resolve();
				}
			});
		});
	}
	res.json({
		accounts: accountsCopy,
	});
});

Api.post('/createAccount', authMiddleware, async (req, res) => {
	try {
		const { organisationName, accountId, creditCardIds } = req.body;
		let organisation = await Organisation.find({ name: organisationName });

		// if no organisation, make one

		// but first check if exists..
		const orgResult = (await Organisation.find({ name: organisationName}));
		if(orgResult.length > 0) {
			res.status(422);
			return res.json({
				message: 'Organisation already exists',
			});
		}

		if (organisation.length <= 0) {
			const id = uuid();
			organisation = await Organisation.create({
				id,
				name: organisationName,
			});
		}
		// mongoose returns an array, select first index.
		organisation = organisation[0];
		// Check if account exists
		const accountResult = (await Account.find({ id: accountId }));
		if (accountResult.length > 0) {
			res.status(422);
			return res.json({
				message: 'Account already exists',
			});
		}

		if(!organisation) {
			organisation = (await Organisation.find({ name: organisationName }))[0];
		}

		const account = await Account.create({
			id: accountId,
			organisationId: organisation.id,
			creditCards: creditCardIds,
			balance: 0,
		});

		// add organisation redundancy
		if (req.query.addRedundancy == 'true') {
			account._doc.organisation = organisation;
		}

		res.json({
			account,
		});
	} catch (err) {
		res.status(500).json({ errors: err });
	}
});

export default Api;