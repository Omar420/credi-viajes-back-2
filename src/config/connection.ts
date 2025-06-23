import { CONFIG } from "@src/constants/config-global";
import { Sequelize } from "sequelize";

const isDev = process.env.NODE_ENV !== 'production';

const sequelize = new Sequelize(CONFIG.POSTGRES_URL, {
  dialectOptions: isDev ? {} : {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false,
  timezone: CONFIG.TIME_ZONE
});

export default sequelize;
