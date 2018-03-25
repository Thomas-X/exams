import bodyParser from 'body-parser';
import chalk from 'chalk';
import cookieParser from 'cookie-parser';
import express from 'express';
import { Server as HttpServer } from 'http';
import ip from 'ip';
import mongoose from 'mongoose';
import logger from 'morgan';
import path from 'path';
import favicon from 'serve-favicon';
import Auth from './controllers/auth';
import Home from './controllers/home';
import Login from './controllers/login';
import Register from './controllers/register';
import createAuthHandler, { authMiddleware } from './factories/createAuthHandler';
import { error, info, warn } from './services/log';
import Socket from './socket';

require('dotenv').config();

class Server {
    app;
    port;

    constructor () {

        this.app = express();
        this.port = process.env.PORT || 3000;
        this.connectToDb()
            .catch(err => error(err));
    }

    onListen = (err) => {
        if (err) {
            error(`Unable to start server on port ${this.port}`, err);
            return;
        }

        if (process.env.__DEV__) {
            warn('We\'re in development mode.');
        }

        info(`We're live.\r\n`);
        info(chalk`{bold On your network:}     {underline http://${ip.address('public')}:{bold ${this.port.toString()}}/}`);
        info(chalk`Local:               {underline http://${ip.address('private')}:{bold ${this.port.toString()}}/}`);
    };

    connectToDb = async () => {
        try {
            mongoose.connect('mongodb://127.0.0.1/test', {
                useMongoClient: true,
            });
            mongoose.Promise = global.Promise;
            const db = mongoose.connection;

            db.on('error', (err) => {
                console.log();
                error(err);
                throw new Error(err);
            });
            db.once('open', () => {
                info('Successfully connected to database!');
                console.log();
                this.start()
                    .catch(err => {
                        console.log();
                        error(err);
                        throw new Error(err);
                    });
            });
        } catch (err) {
            throw new Error(err);
        }
    };

    start = async () => {
        // view engine setup
        this.app.set('views', path.join(__dirname, '../views'));
        this.app.set('view engine', 'pug');

        // TODO Replace favicon
        // uncomment after placing your favicon in /public
        this.app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));

        // Set up middlewares
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(logger('dev'));
        this.app.use(cookieParser());
        this.app.use(express.static(path.join(__dirname, '../public')));

        createAuthHandler();
        this.setRoutes();
        const http = new HttpServer(this.app);
        this.socket = new Socket(http);
        this.socket.bindSockets();
        http.listen(this.port, this.onListen);
    };

    setRoutes = () => {

        this.app.use((req, res, next) => {
            req.passParametersToTemplate = (obj) => {
                obj.activeLinks = {};
                obj.activeLinks[req.path] = true;
                return obj;
            };
            next();
        });

        // POST register POST login
        this.app.use('/account', Auth);
        // GET account(login) page
        this.app.use('/account', Login);
        // GET account(register) page
        this.app.use('/account', Register);
        // GET home
        this.app.use('/', Home);

        // authed route with middleware
        this.app.use('/someAuthedRoute', authMiddleware, (req, res) => {
            res.send('hi from auth route');
        });

        this.setupEndMiddleware();
    };

    setupEndMiddleware = () => {
        // catch 404 and forward to error handler
        this.app.use(function (req, res, next) {
            const err = new Error('Not Found');
            err.status = 404;
            next(err);
        });
    };
}

export default new Server();