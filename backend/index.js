const mongoose= require('mongoose');
const express= require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();


app.use(cors());
app.use(bodyParser.json());
mongoose.connect("mongodb+srv://mahakdeveloper0804:Mahak%40080204@cluster0.lpbdmkv.mongodb.net/Portfolio").then(() => console.log('MongoDB connected'));


const ContactSchema= new mongoose.Schema({
    name:String,
      email:String,
      message:String

  });
  const Contact= mongoose.model('contacts',ContactSchema);



  app.post('/', async (req, res) => {
	try {
	  const contact = new Contact(req.body);
	  await contact.save();
	  res.status(201).json(contact);
	} catch (error) {
	  res.status(400).json({ error: error.message });
	}
  });
  app.listen(7000);