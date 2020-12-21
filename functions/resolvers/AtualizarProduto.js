const admin = require("../config/settings")

module.exports = {
    Mutation:{
        atualizarProduto(_,{id, nomeproduto, descricao, fornecedor, preco, datacadastro}){
            const atualizacao = {
              id:id,
              nomeproduto:nomeproduto,
              descricao:descricao, 
              fornecedor:fornecedor,
              preco:preco,
              datacadastro, datacadastro
            }
            let existe = false;
            return admin.database()
            .ref("produtos/" + id)
            .once("value", snapshot =>{
                if(snapshot.exists()){
                    existe = true;
                } 
            }).then(function(){
                if(existe) {
                  admin.database()
                  .ref("produtos/" + id)
                  .update(atualizacao);
                  return admin.database()
                  .ref("produtos/" + id)
                  .once("value")
                  .then(rs=>rs.toJSON());
                }
            });
          }
    }
}