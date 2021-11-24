import Selector from '../Components/Selector/Selector';
import * as S from './HomeStyle';
import Maps from '../Components/Maps/Maps';
import { useApp } from '../Hooks/useApp';
import { useEffect, useState } from 'react';

export default function Home() {

    const [mun, setMun] = useState()
    const [taxa, setTaxa] = useState()

    const { state } = useApp();
    const file = (require('../Assets/' + state.estado + '.json'))
    const filtred = file.filter((municipio) => +municipio.ano === +state.ano)

    const colors = [
        "#be3f08",
        "#f87e28",
        "#f9a31c",
        "#ffbd11",
        "#d5cf21",
        "#9fcf21",
        "#7bcf22",
        "#43c620",
        "#21bf51",
        "#2991b6",
    ]

    function Detalhes() {
        return(
            <S.DetailContent>
                <S.Desc>{mun}</S.Desc>
                <S.Desc>{taxa ? `Taxa de vacinação: ${taxa.toFixed(2)}%` : ""}</S.Desc>
            </S.DetailContent>
        )
    }

    function Mapa() {
        useEffect(() => {
            filtred.forEach(element => {
                let color = colors[parseInt((+element.cob_vac_bcg / 10) - 0.001)]
                setTimeout(() => {
                    document.querySelector("svg").querySelector("g").querySelectorAll("path").forEach(e => {
                        if (+e.id === +element.id_munic) {
                            e.style.fill = color
                            e.addEventListener("mouseenter", (evt) => {
                                setMun(element.nomemun)
                                setTaxa(element.cob_vac_bcg)
                            })
                        }
                    })
                });
            })
        })

        return (
            <S.SVGContent>
                <Maps uf={state.estado} className="imageBody" />
            </S.SVGContent>
        )
    }

    return (
        <S.Container>
            <S.Header>
                <S.Tittle>
                    Indicadores de Saúde
                </S.Tittle>
            </S.Header>
            <S.Body>
                <S.BodyLeft>
                    <Selector />
                    <Detalhes />
                </S.BodyLeft>
                <S.BodyRight>
                   <Mapa />
                </S.BodyRight>
            </S.Body>
        </S.Container>
    );
}
