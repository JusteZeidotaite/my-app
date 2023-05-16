const uniqid = require("uniqid");
const ProblemGroupModel = require("../models/group");
const UserModel = require("../models/user");

module.exports.INSERT_GROUP = async (req, res) => {
  try { 


    const group = new ProblemGroupModel({
    title: req.body.title,
    creationDate: new Date(),
    summaryCardIds: [],
    id: uniqid(),
  });


  const createdGroup = await group.save();

  console.log("req.body.userId", req.body.userId);

  UserModel.updateOne(
    { id: req.body.userId },
    { $push: { problemGroups: createdGroup.id } }
  ).exec();
  
   return res.status(200).json({ response: "Group was created" });
}
   catch (err) {
    console.log("err", err);
    return res.status(500).json({ response: "ERROR"});
  }
};

module.exports.GET_ALL_GROUPS = async (req, res) => {
  const problemGroup = await ProblemGroupModel.find();

  res.status(200).json({ problemGroup: problemGroup });
};

module.exports.GET_GROUP_BY_ID = async (req, res) => {
  const group = await ProblemGroupModel.findOne({ id: req.params.id });

  res.status(200).json({ problemGroup: group });
};

module.exports.DELETE_GROUP_BY_ID = async (req, res) => {
  const group = await ProblemGroupModel.findOneAndDelete({ id: req.params.id });

  res
    .status(200)
    .json({ response: "Group was deleted successfully", group: group });
}