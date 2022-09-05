import express from "express";
import cors from "cors";
import barangRoute from "./route/barangRoute.js";
import supplierRoute from "./route/supplierRoute.js";
import keranjangRoute from "./route/keranjangRoute.js";
import registerRoute from "./register/registerRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(barangRoute);
app.use(supplierRoute);
app.use(keranjangRoute);
app.use(registerRoute);

app.listen(5000, () => console.log('Server up and running...'));