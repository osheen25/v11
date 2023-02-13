var mongoose = require("mongoose");
var Campground = require("./models/campground");
var comment = require("./models/comment");


var data = [
    {
    name:"clouds Rest",
    image:"https://images.unsplash.com/photo-1496080174650-637e3f22fa03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1412&q=80",
    description:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."
},
{
    name:"camping",
    image:"https://images.unsplash.com/photo-1470246973918-29a93221c455?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    description:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."
},
{
    name:"ice camping",
    image:"https://images.unsplash.com/photo-1455496231601-e6195da1f841?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=795&q=80",
    description:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."
}
]
function seedDB(){
    //remove all the campgrounds
Campground.remove({}, function(err){
  if(err){
      console.log(err);
  }
   console.log("removed campgroundss");
   comment.remove({}, function(err){
      if(err){
       console.log(err);
      }
     console.log("removed comments.");
        
         // add a few campgrounds

      data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
           if(err){
              console.log(err)
             } else {
                  console.log("added a campground");
                //crate a comments
                 comment.create(
                      {
                        text: "This place is great, but i wish there was internet",
                        author: "Homer"
                        },
                       function(err, comment){
                          if(err){
                          console.log(err);
                          } else {
                              campground.comments.push(comment);
                              campground.save();
                            console.log("Create new comment");
                           }
                    });
                 }
        
         });
        
      });
   });
});
//add a few comments
}

module.exports = seedDB;