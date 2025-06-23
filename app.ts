import 'module-alias/register';
import 'moment/locale/es';

import moment from 'moment';
import dotenv from 'dotenv';

moment.locale('es');

dotenv.config();

import { Server } from '@src/server';

const server = new Server();

server.listen();