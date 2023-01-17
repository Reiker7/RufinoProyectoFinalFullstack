const Favorite  = require("../models/favorite");
const express = require("express");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const router = express.Router();

router.get('/', (req, res) => {
  res.send('online favorites ')
})

router.get("/get", async (req, res) => {
  const favorites = await Favorite.find({});

  res.send(favorites);
});
router.get("/get/:userNickId", async (req, res) => {
  const favorites = await Favorite.find({ userNickId: `${req.params.userNickId}` });

  res.send(favorites);
});
// [auth, admin],
router.post("/create", auth ,  async (req, res) => {
  const favorites = new Favorite(req.body);

  await favorites.save();

  res.send(favorites);
});

router.delete("/delete/:gameId", auth ,async (req, res) => {
  const favorites = await Favorite.findOneAndDelete({gameId : `${req.params.gameId}`});

  res.send(favorites);
});

router.put("/put/:nick", auth , async (req, res) => {
  
  const user = await Favorite.updateMany({nickname : `${req.params.nick}`}, { $set: { nickname: `${req.body.nickgame}` } })

    // const usuario= await Favorite.find({'participants.summonerName':`${req.params.nick}`} )
 
  const favorites = await Favorite.updateMany({ 'participants.summonerName': `${req.params.nick}` },
    { $set: { "participants.$[element].summonerName": `${req.body.nickgame}` } },
    { arrayFilters: [{ "element.summonerName": {$eq: `${req.params.nick}`} }] }
  )
  
  res.send(favorites);
});



module.exports = router;
