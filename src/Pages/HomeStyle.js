import styled from 'styled-components';

export const Container = styled.div`
    height: calc(100% - 50px);
    width: 100%;

    & .imageBody {
        width: 45vw;
        height: 45vw;
    }
`

export const Header = styled.div`
    height: 50px;
    border-bottom: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333333;
`

export const Body = styled.div`
    height: calc(100vh - 51px);
    display: flex;
    justify-content: flex-start;
    background-color: #666666;
`

export const BodyLeft = styled.div`
    width: 25%;
    height: calc(100vh - 51px);
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
`
export const BodyRight = styled.div`
    width: 100%;
    height: calc(100vh - 51px);
    display: flex;
    justify-content: center;
`

export const Tittle = styled.span`
    font-size: 30px;
    font-weight: 700;
    color: white;
`

export const Desc = styled.span`
    margin: 20px;
    font-size: 20px;
    font-weight: 700;
    color: white;
`

export const DetailContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SVGContent = styled.div`
    width: 300px;
    height: 300px;
`

/* CORES
    #be3f08
    #f87e28
    #f9a31c
    #ffbd11
    #d5cf21
    #9fcf21
    #7bcf22
    #43c620
    #21bf51
    #2991b6
*/