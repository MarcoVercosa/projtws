import MenuLateral from "../../components/menulateral/menu_lateral"
import SearchAppBar from "../menuPesquisa/menuPesquisa"
import "./ListaAcionamentos.css"
import React, { useState, useEffect } from 'react';


function ListaAcionamento() {
    const [lista, setLista] = useState("")
    const [paginacao, setPaginacao] = useState([])
    const [paginaTotal, setPaginaTotal] = useState([])
    const [paginaAvanca, setPaginaAvanca] = useState(10)

    function Pesquisar(recebe) {

        if (recebe.key === "Enter") {
            alert("FOI DETECATADO QUE O JOGO ==> " + recebe.target.value + " SERÁ PIOR QUE SCUM")
        }
    }

    let firstLine = [
        "Job", "JOBSTREAM", "JOBSTREAM", "FTA", "Ultima Execuçao", "1 acionamento", "2 acionamento", "3 acionamento", "1 escalonamento", "2 escalonamento"
    ]

    function Temp() {
        let dadosTabela = [
            "teste", "teste", "ativo", "r3brp", "2008/11/28", "contoso 11 99999-9999  contoso@microsoftsualinda.com", "contoso 11 99999-9999  contoso@microsoftsualinda.com", "contoso 11 99999-9999  contoso@microsoftsualinda.com", "contoso 11 99999-9999  contoso@microsoftsualinda.com", "contoso 11 99999-9999  contoso@microsoftsualinda.com"
        ]
        var acumula = []
        for (var i = 0; i < 52; i++) {
            acumula = [...acumula, dadosTabela]
        }
        return acumula

    }

    function Filtra() {
        var retorna_tr = []
        var retorna_td = []
        for (var i = 0; i < lista.length; i++) {
            lista[i].map((recebe) => {
                // console.log(lista[i])
                retorna_td.push(<td>{recebe}</td>)
            })
            retorna_tr.push(<tr>{retorna_td}</tr>)
            retorna_td = []
        }

        return retorna_tr
    }

    function Avancar(recebe_valor) {
        var numeroP = 0
        numeroP = numeroP + paginaAvanca
        if (recebe_valor > 0) {
            setPaginacao(paginaTotal.slice(numeroP, numeroP + 10))
            setPaginaAvanca(paginaAvanca + 10)
        } else {
            setPaginacao(paginaTotal.slice(numeroP - 10, numeroP))
            setPaginaAvanca(paginaAvanca - 10)
            // console.log(paginaAvanca)
        }

    }

    useEffect(() => {
        var koko = Temp()
        setLista(koko)
    }, [])

    useEffect(() => {
        var okok = Filtra()
        setPaginacao(okok.slice(0, 10))
        setPaginaTotal(okok)

    }, [lista])



    return (
        <>
            <MenuLateral />
            <div className="ListaAcionamento_divfundo">
                <SearchAppBar Pesquisar={Pesquisar} />
                <div className="listaAcionamentos_divtabela">

                    <table>
                        <tr>
                            {firstLine.map((recebe) => {
                                return (
                                    <th>{recebe}</th>
                                )
                            })}
                        </tr>

                        {paginacao}


                    </table>
                </div>

                <button onClick={() => { Avancar(-10) }}>VOLTAR</button>
                <button onClick={() => { Avancar(10) }}>AVANÇAR</button>
                <p>Total de linhas:</p>
                <p>{paginaTotal.length}</p>
                <p>Páginas: {paginaAvanca} de {paginaTotal.length}</p>


            </div>
        </>
    )
}

export default ListaAcionamento