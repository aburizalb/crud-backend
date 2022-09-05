import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const register = db.define(
  "tbl_register",
  {
    nama_depan: DataTypes.STRING,
    nama_belakang: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING,
    no_hp: DataTypes.STRING,
    tgl_lahir: DataTypes.STRING,
    email: DataTypes.STRING,
    alamat: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default register;

(async () => {
  await db.sync();
})();
