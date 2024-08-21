import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListarProduto from "../components/ListarProdutos";
import "../globals.css";

export default function Produtos() {
    const [listaProdutos, setProdutos] = useState([
        { id: 16, nome: 'Starboy', artista: 'The Weeknd', preco: 'R$ 150,00', imagem: 'https://upload.wikimedia.org/wikipedia/pt/3/39/The_Weeknd_-_Starboy.png' },
        { id: 17, nome: 'Teenage Dream', artista: 'Katy Perry', preco: 'R$ 250,00', imagem: 'https://upload.wikimedia.org/wikipedia/pt/1/19/Katy_Perry_-_Teenage_Dream_The_Complete_Confection_%28capa%29.jpeg' },
        { id: 18, nome: '21', artista: 'Adele', preco: 'R$ 230,00', imagem: 'https://upload.wikimedia.org/wikipedia/pt/c/cf/Capa_de_21_por_Adele.jpg' },
        { id: 19, nome: 'Silence Between Songs', artista: 'Madison Beer', preco: 'R$ 130,00', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTeKk5Keumrw9CahkSAsLNKztGqTMzH4VUEw&s' },
        { id: 20, nome: 'GUTS', artista: 'Olivia Rodrigo', preco: 'R$ 130,00', imagem: 'https://upload.wikimedia.org/wikipedia/pt/0/03/Olivia_Rodrigo_-_Guts.png' },
        { id: 21, nome: 'Listen', artista: 'David Guetta', preco: 'R$ 150,00', imagem: 'https://upload.wikimedia.org/wikipedia/pt/thumb/d/d7/David_Guetta_Listen.jpg/220px-David_Guetta_Listen.jpg' },
        { id: 22, nome: 'SOS', artista: 'SZA', preco: 'R$ 250,00', imagem: 'https://upload.wikimedia.org/wikipedia/pt/c/c8/SZA_-_SOS.png' },
        { id: 23, nome: 'Cry Baby', artista: 'Melanie Martinez', preco: 'R$ 230,00', imagem: 'https://i.scdn.co/image/ab67616d0000b2733899712512f50a8d9e01e951' },
        { id: 24, nome: 'Romance', artista: 'Camila Cabello', preco: 'R$ 130,00', imagem: 'https://upload.wikimedia.org/wikipedia/pt/e/e7/Romance_-_Camila_Cabello.png' },
        { id: 25, nome: 'Illuminate', artista: 'Shawn Mendes', preco: 'R$ 130,00', imagem: 'https://i.scdn.co/image/ab67616d0000b273ea3ef7697cfd5705b8f47521' },
        { id: 26, nome: 'Midnights', artista: 'Taylor Swift', preco: 'R$ 150,00', imagem: 'https://i.scdn.co/image/ab67616d0000b273fa747621a53c8e2cc436dee0' },
        { id: 27, nome: 'Born To Die', artista: 'Lana Del Rey', preco: 'R$ 250,00', imagem: 'https://i.scdn.co/image/ab67616d0000b273ebc8cfac8b586bc475b04918' },
        { id: 28, nome: 'Better Mistakes', artista: 'Bebe Rexha', preco: 'R$ 230,00', imagem: 'https://upload.wikimedia.org/wikipedia/pt/4/43/Bebe_Rexha_-_Better_Mistakes.png' },
        { id: 29, nome: 'Manic', artista: 'Halsey', preco: 'R$ 130,00', imagem: 'https://upload.wikimedia.org/wikipedia/pt/c/ce/Halsey_-_Manic.png' },
        { id: 30, nome: 'The Death of Slim Shady (Coup de Grâce)', artista: 'Eminem', preco: 'R$ 130,00', imagem: 'https://upload.wikimedia.org/wikipedia/en/4/4e/Eminem_-_The_Death_of_Slim_Shady_%28Coup_de_Gr%C3%A2ce%29.png' }
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
                <p className="album">{produto.nome}</p>
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
