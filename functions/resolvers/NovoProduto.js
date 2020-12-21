const admin = require("../config/settings")

module.exports = {
    Mutation:{
        novoProduto(_,{id, nomeproduto, descricao, fornecedor, preco, datacadastro}){
            const novo = {
                id:id,
                nomeproduto:nomeproduto,
                descricao:descricao, 
                fornecedor:fornecedor,
                preco:preco,
                datacadastro, datacadastro
            }
            return admin.database()
            .ref("produtos")
            .push(novo)
            .once("value")
            .then(rs=>rs.toJSON());
        }
    }
}