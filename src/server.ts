import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import http from "http";
import { CONFIG, PATH_ROUTES } from "@src/constants/config-global";
import { Sequelize } from "sequelize";
import { SequelizeStorage, Umzug } from "umzug";
import { execSync } from "child_process";
import { getVersion } from "@src/constants/version";
import { IPathRoutes } from "./types";
import { AuthRoutes, ClientRoutes, UsersRoutes, UtilRoutes, ProductRoutes, BookingRoutes, KiuRoutes, PaymentRoutes, ProfileRoutes } from "./routes";

export class Server {
  private app: Application;
  private port: string;
  private sequelize: Sequelize;
  private server: http.Server;
  private paths: IPathRoutes;

  constructor() {
    this.app = express();
    this.port = CONFIG.PORT;
    this.server = http.createServer(this.app);
    this.sequelize = new Sequelize(CONFIG.POSTGRES_URL);
    this.paths = PATH_ROUTES;


    this.middlewares();

    this.initialize();

    this.routes();
  }

  async checkPendingMigrations() {
    const umzug = new Umzug({
      migrations: {
        glob: 'src/config/migrations/*.js'
      },
      context: this.sequelize.getQueryInterface(),
      storage: new SequelizeStorage({ sequelize: this.sequelize }),
      logger: console,
    });

    const pendingMigrations = await umzug.pending();
    if (pendingMigrations.length > 0) {
      console.warn(`⚠️ Hay ${pendingMigrations.length} migraciones pendientes. Ejecutando las migraciones.`);

      try {
        const output = execSync('yarn run migrations:run', { encoding: 'utf-8' });
        console.info(`${output}`);
      } catch (error: any) {
        console.error(`Error ejecutando migraciones: ${error.message}`);
        return pendingMigrations.length;
      }

      console.info('✅ Migraciones aplicadas exitosamente.');

      return 0;

    } else {
      console.info('✅ No hay migraciones pendientes.');
      return 0;
    }
  }


  async initialize() {
    try {
      const countPendingMigrations = await this.checkPendingMigrations();

      if (countPendingMigrations > 0) {
        return;
      }

      const version = await getVersion();
      console.info('🚀 ~ Version', version);
    } catch (error) {
      console.error('Error al inicializar el servidor:', error);
    }
  }

  middlewares() {
    this.app.use(cors());
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
    });
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {

    // routes public client

    this.app.use(this.paths.auth, AuthRoutes);
    this.app.use(this.paths.users, UsersRoutes);
    this.app.use(this.paths.clients, ClientRoutes);
    this.app.use(this.paths.utils, UtilRoutes);
    // routes view
    this.app.use(this.paths.products, ProductRoutes);
    this.app.use(this.paths.bookings, BookingRoutes);
    this.app.use(this.paths.kiu, KiuRoutes);
    this.app.use(this.paths.payments, PaymentRoutes);
    this.app.use(this.paths.profile, ProfileRoutes);
    // this.app.use(this.paths.productCategory, ProductCategoryRoutes);
  }


  listen() {
    this.server.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto: ${this.port}, environment: ${CONFIG.CURRENT_ENVIRONMENT}`);
    });
  }
}