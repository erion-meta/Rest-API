import express from "express";
import routes from "./src/routes/apiRoutes";

const app = express();
const PORT = 3000;

routes(app);

app.get("/", (req, res) => {
  res.send(`Server is running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
