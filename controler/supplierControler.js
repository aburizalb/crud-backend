import supplier from "../models/supplierModel.js";

export const getSupplier = async (req, res) => {
  try {
    const response = await supplier.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getSupplierById = async (req, res) => {
  try {
    const response = await supplier.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createSupplier = async (req, res) => {
  try {
    await supplier.create(req.body);
    res.status(201).json({ msg: "Supplier Berhasil Ditambah" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateSupplier = async (req, res) => {
  try {
    await supplier.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ msg: "Supplier Berhasil Diedit" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteSupplier = async (req, res) => {
  try {
    await supplier.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ msg: "Supplier Berhasil Dihapus" });
  } catch (error) {
    console.log(error.message);
  }
};
