import express from "express";
import { getRegister, getRegisterById, createRegister, deleteRegister, login } from "./registerControler.js";

const router = express.Router();

router.get('/register', getRegister);
router.get('/register/:id', getRegisterById);
router.post('/register', createRegister);
router.delete('/register/:id', deleteRegister);
router.get('/register/:email', login);

export default router;