import { Router } from 'express';

const Home = Router();

Home.get('/',(req, res, next) => {
    res.render('index', req.passParametersToTemplate({title: 'bla'}));
});

export default Home;