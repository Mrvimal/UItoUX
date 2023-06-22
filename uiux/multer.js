const multer=require("multer");


  
  var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./images");
    },
    filename: (req, file, cb) => {
      console.log(file.originalname);
      cb(null, `${Date.now()}-bezkoder-${file.originalname}`);
    },
  });
  
  var uploadFile = multer({ storage: storage });
  module.exports = uploadFile;