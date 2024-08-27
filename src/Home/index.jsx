import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ListarProduto from "../components/ListarProdutos";
import "../globals.css";
export default function Home(){
    const [listaProdutos, setProdutos] = useState([
        { id: 1, nome: 'Future Nostalgia', artista: 'Dua Lipa', preco: 'R$ 150,00', generos: ["Gêneros: Pop"], imagem: 'https://m.media-amazon.com/images/I/71VQFsqlPJL._AC_SX679_.jpg' },
        { id: 2, nome: 'ANTI', artista: 'Rihanna', preco: 'R$ 250,00', generos: ["Gêneros: Alt pop, Eletrônico, R&B Contemporâneo"], imagem: 'https://akamai.sscdn.co/letras/360x360/albuns/5/a/2/5/480781680614607.jpg' },
        { id: 3, nome: 'HIT ME HARD AND SOFT', artista: 'Billie Eilish', preco: 'R$ 230,00', generos: ["Gêneros: Alt Pop, Eletrônico, Indie"], imagem: 'https://vinyla.com/files/products/af/134/209542/be1.1280x1280.jpg?946824ba43562d9e41faa8eb98c49ea6' },
        { id: 4, nome: 'Endless Summer Vacation', artista: 'Miley Cyrus', preco: 'R$ 130,00', generos: ["Gêneros: Pop, Country, Eletrônico"], imagem: 'https://cdn.shoplightspeed.com/shops/621399/files/53756828/1652x1652x2/new-miley-cyrus-endless-summer-vacation-w-poster.jpg' },
        { id: 5, nome: 'LOOM', artista: 'Imagine Dragons', preco: 'R$ 130,00', generos: ["Gêneros: Indie, Eletrônico, Rap"], imagem: 'https://www.clashmusic.com/wp-content/uploads/2024/06/Screenshot-2024-06-28-at-10.24.45.png' }
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
    <Carousel
            infiniteLoop
            useKeyboardArrows
            autoPlay
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            dynamicHeight
        >
                <div>
                    <img src="https://i.ytimg.com/vi/tRIficm2yeI/maxresdefault.jpg" alt="Slide 1" />
                </div>
                <div>
                    <img src="https://images.genius.com/79e3f65ba550f37e2ef66bdacbe951ce.1000x283x1.jpg" alt="Slide 2" />
                </div>
                <div>
                    <img src="https://djlifemag.com/wp-content/uploads/2024/05/hit-me-hard-and-soft-v0-dhnauhkskhvc1.jpeg" alt="Slide 3" />
                </div>
                <div>
                    <img src="https://whatsinyourplaylist.wordpress.com/wp-content/uploads/2015/04/screen-shot-2015-04-05-at-8-59-29-pm.png" alt="Slide 4" />
                </div>

            </Carousel>
    <div>
        <h1>Álbuns Musicais</h1>
        <ListarProduto listaProdutos={listaProdutos} adicionarItemPedidos={adicionarItemPedidos}/>
        {
            listaPedidos.map((produto)=>
            <div className="produto" key={produto.id}>
                <img className="imagem" src={produto.imagem} width={250} height={250}/>
                <h2>{produto.nome}</h2>
                <p>{produto.artista}</p>
                <p>{produto.generos}</p>
                <p>{produto.preco}</p>
                <button onClick={()=> removerPedido(produto.id)}>Remover</button>
                </div> )
        }
    </div>
    <Footer/>
    </>
);

}