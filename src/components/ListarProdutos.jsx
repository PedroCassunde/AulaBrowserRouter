import "../globals.css"
export default function ListarProduto({listaProdutos, adicionarItemPedidos}){
    return(
        <div>
        <h1>ListarProduto</h1>
        {
            listaProdutos.map((produto)=>
            <div key={produto.id}>
                <img className="imagem" src={produto.imagem} width={250} height={250}/>
                <p>{produto.nome}</p>
                <p>{produto.artista}</p>
                <p>{produto.preco}</p>
                <button onClick={()=> adicionarItemPedidos(produto)}>Por no Carrinho</button>
            </div>
                )
        }
        </div>
    );
}