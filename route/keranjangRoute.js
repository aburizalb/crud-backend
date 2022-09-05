import express from "express";
import { getKeranjang, getKeranjangById, createKeranjang, updateKeranjang, deleteKeranjang } from "../controler/keranjangControler.js";

const router = express.Router();

router.get('/keranjang', getKeranjang);
router.get('/keranjang/:id', getKeranjangById);
router.post('/keranjang', createKeranjang);
router.put('/keranjang/:id', updateKeranjang);
router.delete('/keranjang/:id', deleteKeranjang);

export default router;