import keranjang from "../models/keranjangModel.js";

export const getKeranjang = async (req, res) => {
  try {
    const response = await keranjang.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getKeranjangById = async (req, res) => {
  try {
    const response = await keranjang.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createKeranjang = async (req, res) => {
  try {
    await keranjang.create(req.body);
    res.status(201).json({ msg: "Data Berhasil Ditambah" });
  } catch (error) {
    res.status(error.message);
  }
};

export const updateKeranjang = async (req, res) => {
  try {
    await keranjang.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ msg: "Data Berhasil Diupdate" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteKeranjang = async (req, res) => {
  try {
    await keranjang.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ msg: "Data Berhasil Dihapus" });
  } catch (error) {
    console.log(error.message);
  }
};
