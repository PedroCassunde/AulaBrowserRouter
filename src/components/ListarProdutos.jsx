import "../globals.css";
export default function ListarProduto({listaProdutos, adicionarItemPedidos}){
    return(
        <div>
        <h1 className="slogan">Os Melhores Álbuns da História em um só Lugar!</h1>
        {
            listaProdutos.map((produto)=>
            <div key={produto.id}>
                <img className="imagem" src={produto.imagem} width={250} height={250}/>
                <h2>{produto.nome}</h2>
                <p>{produto.artista}</p>
                <p>{produto.generos}</p>
                <p>{produto.preco}</p>
                <button onClick={()=> adicionarItemPedidos(produto)}>Por no Carrinho</button>
            </div>
                )
        }
        </div>
    );
}