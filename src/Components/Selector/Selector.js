import { useAPI } from '../../Hooks/useAPI';
import * as S from './SelectorStyle';
import { useApp } from '../../Hooks/useApp';

function Selector(props) {
    const {anos, estados} = useAPI();

    const {state, handleState} = useApp();

    const Option = ({
        value,
        name
    }) => <S.Option key={name} value={value}>{name}</S.Option>

    return (
        <S.Container>
            <S.Select defaultValue={state.estado} name="estado" onChange={handleState}>
                {estados?.length && estados.map(estado => ({name:`${estado.nome} - ${estado.sigla}`, value: estado.id})).map(Option)}
            </S.Select>

            <S.Select defaultValue={state.ano} key={state.ano} name="ano" onChange={handleState}>
                {anos?.length && anos.map((ano) => <Option key={ano} name={ano} value={ano} />)}
            </S.Select>
        </S.Container>
    );
}

export default Selector;