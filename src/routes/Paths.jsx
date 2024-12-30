import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";
import Cadastro from "../pages/Cadastro";
import PageLayout from "../Layout/PageLayout";
import Login from "../pages/Login";
import Categoria from "../pages/Categoria";
import Produto from "../pages/Produto";
import CarrinhoCompra from "../pages/CarrinhoCompra";
import Finalizar from "../pages/Finalizar";
import Sucesso from "../pages/Sucesso";
import Cadastro2 from "../pages/Cadastro2"
import Pedidos from "../pages/Pedidos";
import Pedidos2 from "../pages/Pedidos2";


const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout />}>
                        <Route index element={<Home />}/>
                        <Route path="/produtos" element={<Produtos />}/>
                        <Route path="/categorias" element={<Categoria />}/>
                        <Route path="/promo" element={<Produto/>}/>
                        <Route path="/produtos/carrinho" element={<CarrinhoCompra/>}/>
                        <Route path="/finalizar" element={<Finalizar/>}/>
                        <Route path="/comprarealizada" element={<Sucesso/>}/>
                        <Route path="/meuspedidos" element={<Pedidos/>}/>
                        <Route path="/informacao" element={<Pedidos2/>}/>
                    </Route>
                    <Route path="/cadastrese" element={<Cadastro />}/>
                    <Route path="/entrar" element={<Login />}/>
                    <Route path="/logar" element={<Login/>}/>
                    <Route path="/cadastro" element={<Cadastro2/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Paths;