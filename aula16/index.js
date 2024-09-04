const userModel = require("./model/user.model");
const petModel = require("./model/pet.model");

const mongoose = require("mongoose");

const main = async () => {
  mongoose
    .connect(
      "mongodb+srv://marianamohr:c9zKW4F8Vadmdn5d@cluster0.zm7bida.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
  // buscar todos
  //let response = await userModel.find().explain("executionStats");
  // por nome

  //let response = await userModel
  // .find({ first_name: "Mariana" })
  // .explain("executionStats");

  // POPULATE
  //await petModel.create({ name: "Olivia", animal: "Buldog" });

  // userModel.create({
  //  first_name: "Cami",
  //  last_name: "Mohr",
  //  email: "camimohr@gmail.com",
  //   password: "123456",
  // });
  //let user = await userModel.find({_id:"66d8eba1a90b1ad1868ab6fb"});
  //let pet = await petModel.findById("66d8eb75345bf688f01b282e");
 // console.log(user, pet);
  //console.log(user);

  //user[0].pets.push({ pet: "66d8eb75345bf688f01b282e" });
  //await userModel.updateOne({ _id: "66d8eba1a90b1ad1868ab6fb" }, user[0]);
  //let user = await userModel.find({ _id: "66d8eba1a90b1ad1868ab6fb" });
  let user = await userModel.find({ _id: "66d8eba1a90b1ad1868ab6fb" });
  //.populate('pets.pet');
  console.log(user[0].pets);
};

main();
