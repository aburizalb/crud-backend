import express from "express";
import { getSupplier, getSupplierById, createSupplier, updateSupplier, deleteSupplier } from "../controler/supplierControler.js";

const routersup = express.Router();

routersup.get('/supplier', getSupplier);
routersup.get('/supplier/:id', getSupplierById);
routersup.post('/supplier', createSupplier);
routersup.put('/supplier/:id', updateSupplier);
routersup.delete('/supplier/:id', deleteSupplier);

export default routersup;