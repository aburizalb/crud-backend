import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const barang = db.define(
  'tbl_barang',
  {
    nama_barang: DataTypes.STRING,
    supplier: DataTypes.STRING,
    harga_jual: DataTypes.STRING,
    Stok: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default barang;

(async () => {
  await db.sync();
}) ();
