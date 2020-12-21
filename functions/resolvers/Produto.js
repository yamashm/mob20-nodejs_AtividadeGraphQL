const admin = require("../config/settings")

module.exports = {
    Query:{
        produto(){
          return admin.database()
          .ref("produtos")
          .once("value")
          .then(snap=> snap.val())
          .then(val=>Object.keys(val).map((key)=>val[key]));
        }
      }
}