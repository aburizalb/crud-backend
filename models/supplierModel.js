import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const supplier = db.define(
  "tbl_supplier",
  {
    nama_supplier: DataTypes.STRING,
    alamat: DataTypes.STRING,
    kontak: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default supplier;

(async () => {
  await db.sync();
})();
