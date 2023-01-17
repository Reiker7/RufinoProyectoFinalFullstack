const mongoose = require('mongoose')

const FavoriteSchema = new mongoose.Schema({
  gameId: {type: String, unique: true},
  userNickId: String,
  nickname: String,
  platformId: String,
  gameMode: String,
  gameDuration: String,
  participants: [ {summonerName:  String, championName:  String, summonerLevel:  String, totalDamageDealt:  String, goldEarned:  String, String, win:  Boolean}, 
   

]

});

const Favorite = mongoose.model('Favorite', FavoriteSchema)

module.exports = Favorite