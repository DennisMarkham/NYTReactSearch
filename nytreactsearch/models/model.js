var mongoose = require("mongoose");


var Schema = mongoose.Schema;


var ExampleSchema = new Schema({
  
  title: {
    type: String,
    trim: true,
    required: "Title is Required"
  },
  
  data: {
    type: Number,
    unique: true,
    required: true
  },
 
  url: {
    type: String,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var Example = mongoose.model("Article", ArticleSchema);

// Export the Example model
module.exports = Example;