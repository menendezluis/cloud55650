import petModel from "./models/Pet.js";

export default class Pet {
  get = (params) => {
    const data = petModel.find(params).lean();
    return data;
  };

  getBy = (params) => {
    return petModel.findOne(params);
  };

  save = (doc) => {
    return petModel.create(doc);
  };

  update = (id, doc) => {
    return petModel.findByIdAndUpdate(id, { $set: doc });
  };

  delete = (id) => {
    return petModel.findByIdAndDelete(id);
  };
}
