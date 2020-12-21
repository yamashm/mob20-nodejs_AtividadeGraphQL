const admin = require("../config/settings")

module.exports = {
    Mutation:{
        excluirProduto(_,{id}){
            let existe = false;
            return admin.database()
            .ref("produtos/" + id)
            .once("value", snapshot =>{
                if(snapshot.exists()){
                    existe = true;
                } 
            }).then(function(){
                if(existe) {
                    return admin.database()
                    .ref("produtos/" + id)
                    .remove()
                    .then(function(){return `Produto ${id} removido com sucesso`})
                    .catch((erro) =>{return `Erro ao remover: ${erro}`});
                }
            else{
                return `Produto ${id} não encontrado`;
            } });
         }
    }
}