import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const keranjang = db.define(
  "tbl_keranjang",
  {
    id_barang: DataTypes.STRING,
    nama_barang: DataTypes.STRING,
    qty: DataTypes.STRING,
    harga: DataTypes.STRING,
    jumlah: DataTypes.STRING,
    total: DataTypes.STRING,
    id_register: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default keranjang;

(async () => {
  await db.sync();
})();
