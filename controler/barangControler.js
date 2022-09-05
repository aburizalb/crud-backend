import barang from "../models/barangModel.js";


export const getBarang = async (req, res) => {
  try {
    const response = await barang.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getBarangById = async (req, res) => {
  try {
    const response = await barang.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createBarang = async (req, res) => {
  const { nama_barang, supplier, harga_jual, Stok } = req.body;
  if(!nama_barang || !supplier || !harga_jual || !Stok ){
  res.status(400).json({msg: "isi data dlu"})}
  try {
    await barang.create({ nama_barang, supplier, harga_jual, Stok });
    res.status(201).json({ msg: "Barang Berhasil Ditambah" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateBarang = async (req, res) => {
  try {
    await barang.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ msg: "Barang Berhasil Diupdate" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteBarang = async (req, res) => {
  try {
    await barang.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ msg: "Barang Berhasil Dihapus" });
  } catch (error) {
    console.log(error.message);
  }
};
