const express = require('express');
const multer = require('multer');
const app = express();
const upload = multer({ dest: 'uploads/' });
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/uploadfiles', upload.array('files'), uploadFiles);
function uploadFiles(req, res) {
  console.log(req.body);
  console.log(req.files);
  res.json({ message: 'Successfully uploaded' });
}
app.listen(3000);
