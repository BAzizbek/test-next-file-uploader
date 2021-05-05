import multer from 'multer'
import Zip from 'adm-zip'
import fs from "fs";


const oneGigabyteInBytes = 1073741824

// setting up multer
const upload = multer({
  limits: { fileSize: oneGigabyteInBytes * 3 }, // max file limit 3 Gb
  storage: multer.diskStorage({
    // destination: './public/uploads',  // commented to preserve having duplicates in the store (adm-zip also saves a file)
    filename: (req, file, cb) => cb(null, `${Date.now()}_${file.originalname}`),
  }),
});

// 
export const config = {
  api: {
    bodyParser: false,
  },
}

const post = (req, res) => {
  console.log(222);
  try {
    upload.any()(req, res, () => {
      let zip = new Zip();
      let outputFilePath = Date.now() + '.zip';
      if (req.files.length > 0) {
        zip.addLocalFile(req.files[0].path)
        fs.writeFileSync(`./public/uploads/${outputFilePath}`, zip.toBuffer());
        res.status(201).json({ message: 'File successfully saved' })
      }
    })
  } catch (error) {
    res.json(error.message)
  }
};

const get = (req, res) => {
  let names = fs.readdirSync(`./public/uploads`)
  names = names.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item)); // excluding .DS_STORE
  res.json(names)
}

export default (req, res) => {
  req.method === "POST"
    ? post(req, res)
    : req.method === "GET"
    ? get(req, res)
    : res.status(404).send("");
}
