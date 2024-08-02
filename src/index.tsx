import express from "express";
import { sequelize } from "./models";
import authorRoutes from "./routes/authorRoutes";
import bookRoutes from "./routes/bookRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/authors", authorRoutes);
app.use("/api/books", bookRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
