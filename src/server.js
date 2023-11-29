const express = require("express");
const cors = require("cors");
const path = require("path");
const mentorRoutes = require("./mentor/mentorRoute");
const app = express();
const port = process.env.PORT || 5001;

// Use cors middleware
app.use(cors());
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "path/to/upload/directory");
//   },
//   filename: function (req, file, cb) {
//     cb(null, "photo.png");
//   },
// });
// const upload = multer({ storage: storage });

// // app.post("/api/v1/mentors/register", upload.single("photo"), controller.addMentor);

app.use(express.json());
// enables the server to serve the client app without running it
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/api/helloworld", (req, res) => {
  res.send("Hello World");
});

// app.get("/getMentors", (req, res) => {
//   getMentor(req, res);
// });
// app.get('/*', (req, res) => {
//   // res.send('Anything else');
//   res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
// });

//p.post("api/v1/mentors/photo")

app.use("/api/v1/mentors", mentorRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
