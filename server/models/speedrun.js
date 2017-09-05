// require mongoose:
var mongoose = require('mongoose');
// create mongoose schema for hunters:
var HunterSchema = new mongoose.Schema({
    name: { type: String },
    weapon: { type: String }
});
// create mongoose schema for speedruns:
var SpeedrunSchema = new mongoose.Schema({
    submitted_by: { type: String },
    quest_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Quest' },
    duration: { type: Number },
    hunters: [ HunterSchema ]
},
{ timestamps: true });

// use mongoose schema to set new mongoose model:
mongoose.model('Speedrun', SpeedrunSchema);
