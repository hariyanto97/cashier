import { DBMode } from "@/utils";
import { Sequelize } from "sequelize";
import config from "../config/config";

const mode: DBMode = "development";

const { database, host, password, username } = config[mode];

const dbName = database || "cashier_databases"
const dbUserName = username || "root"
const dbPassword = password || "root"
const dbHost = host || "127.0.0.1"

export const sequelize = new Sequelize(dbName, dbUserName, dbPassword, {
  dialect: "mysql",
  dialectModule: require('mysql2'),
  host: dbHost,
});
