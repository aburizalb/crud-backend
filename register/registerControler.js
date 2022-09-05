import register from "./registerModel.js";

export const getRegister = async (req, res) => {
  try {
    const response = await register.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getRegisterById = async (req, res) => {
  try {
    const response = await register.findOne({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const createRegister = async (req, res) => {
  const {
    nama_depan,
    nama_belakang,
    jenis_kelamin,
    no_hp,
    tgl_lahir,
    email,
    alamat,
  } = req.body;

  if (!nama_depan || !nama_belakang) {
    return res.status(400).json({ msg: "Isi Dulu data dengan benar" });
  }

  try {
    const email = register.findOne({
      where: {
        email: req.params.email,
      },
    });

    if (email) {
      return res.status(409).json({ msg: "Email sudah digunakan" });
    }
    await register.create({
      nama_depan,
      nama_belakang,
      jenis_kelamin,
      no_hp,
      tgl_lahir,
      email,
      alamat,
    });
    res.status(201).json({ msg: "Berhasil Registrasi, Silahkan Login" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteRegister = async (req, res) => {
  try {
    await register.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ msg: "Data Berhasil Dihapus" });
  } catch (error) {
    console.log(error.message);
  }
};

export const login = async (req, res) => {
  const {
    nama_depan,
    nama_belakang,
    jenis_kelamin,
    no_hp,
    tgl_lahir,
    email,
    alamat,
  } = req.body;
  
  try {
    const email = register.findOne({
      where: {
        email: req.params.email
      }
    })
    if (!email) {
      res.status(409).json({ msg: "Email Belum terdaftar" });
    }
    res.status(200).json({msg: "Berhasil Login"})
  } catch (error) {
    console.log(error.message);
  }
};
