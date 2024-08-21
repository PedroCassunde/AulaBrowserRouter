import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListarProduto from "../components/ListarProdutos";
import "../globals.css";

export default function Oferta() {
    const [listaProdutos, setProdutos] = useState([
        { id: 6, nome: 'Queen Of The Clouds', artista: 'Tove Lo', preco: 'R$ 250,00', imagem: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJ23aA5j256vahRv6nRcAnYOjS1tAnT5HYuqfFzDxkjeHUTGiKZWmdGz_XC50baGn1Hv-KFG-pr8dKTay-ZCCHiOg9w_q3WlKBP2cjnBa0_ysEe_NoUlguur_0YLf19gJI7JDjs-52Ph-G/s1600/Tove+Lo+-+Queen+Of+The+Clouds.jpg' },
        { id: 7, nome: 'Plastic Hearts', artista: 'Miley Cyrus', preco: 'R$ 150,00', imagem: 'https://upload.wikimedia.org/wikipedia/pt/d/d8/Plastic_Hearts_de_Miley_Cyrus.png' },
        { id: 8, nome: 'True', artista: 'Avicii', preco: 'R$ 230,00', imagem: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/de/65/6c/de656c04-da50-4be1-1d3d-b0bb32667f52/20UMGIM76790.rgb.jpg/316x316bb.webp' },
        { id: 9, nome: 'Youngblood', artista: '5 Seconds of Summer', preco: 'R$ 130,00', imagem: 'https://upload.wikimedia.org/wikipedia/pt/e/ea/5_Seconds_of_Summer_Youngblood.png' },
        { id: 10, nome: 'Telos', artista: 'Zedd', preco: 'R$ 130,00', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyVFCU-k_2eb7DJ_Yic2S8d5AStvBzKAQi3g&s' },
        { id: 11, nome: 'Unorthodox Jukebox', artista: 'Bruno Mars', preco: 'R$ 250,00', imagem: 'https://m.media-amazon.com/images/I/71wbwIvy8BL._UF1000,1000_QL80_.jpg' },
        { id: 12, nome: 'World War Joy', artista: 'The Chainsmokers', preco: 'R$ 150,00', imagem: 'https://i.scdn.co/image/ab67616d0000b2735e90ff76fd49a23f7333de76' },
        { id: 13, nome: 'The Fame Monster', artista: 'Lady Gaga', preco: 'R$ 230,00', imagem: 'https://upload.wikimedia.org/wikipedia/pt/3/35/TheFameMonsterStandard.jpg' },
        { id: 14, nome: 'The Truth About Love', artista: 'P!nk', preco: 'R$ 230,00', imagem: 'https://upload.wikimedia.org/wikipedia/pt/1/1c/Capa_de_The_Truth_About_Love_por_Pink.jpg' },
        { id: 15, nome: 'thank u, next', artista: 'Ariana Grande', preco: 'R$ 230,00', imagem: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/e4/06/d3/e406d3d8-2507-e585-c919-60bc5446985c/19UMGIM03689.rgb.jpg/600x600bf-60.jpg' }
      ]);
     
const [listaPedidos, setListaPedidos] = useState([]);

const adicionarItemPedidos = (objeto) => {
    setListaPedidos([...listaPedidos,objeto])
}

const removerPedido = (id) => {
    let remover = false;
    let listaAux = listaPedidos.filter((produto) => {
        if (remover == false) {
            if (produto.id !== id) {
                return produto
            } else {
                remover = true;
                return null
            }
        } else {
            return produto
        }
    });
    setListaPedidos(listaAux);
}

return (
    <>
    <Header title={"As melhores ofertas musicais de hoje!"}/>
    <div>
        <h1>Álbuns Musicais</h1>
        <ListarProduto listaProdutos={listaProdutos} adicionarItemPedidos={adicionarItemPedidos}/>
        {
            listaPedidos.map((produto)=>
            <div key={produto.id}>
                <img className="imagem" src={produto.imagem} width={250} height={250}/>
                <p>{produto.nome}</p>
                <p>{produto.artista}</p>
                <p>{produto.preco}</p>
                <button onClick={()=> removerPedido(produto.id)}>Remover</button>
                </div> )
        }
    </div>
    <Footer/>
    </>
);
}
