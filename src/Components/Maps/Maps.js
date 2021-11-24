import * as S from './MapsStyle';
import { ReactComponent as UF11 } from '../../Assets/11.svg';
import { ReactComponent as UF12 } from '../../Assets/12.svg';
import { ReactComponent as UF13 } from '../../Assets/13.svg';
import { ReactComponent as UF14 } from '../../Assets/14.svg';
import { ReactComponent as UF15 } from '../../Assets/15.svg';
import { ReactComponent as UF16 } from '../../Assets/16.svg';
import { ReactComponent as UF17 } from '../../Assets/17.svg';
import { ReactComponent as UF21 } from '../../Assets/21.svg';
import { ReactComponent as UF22 } from '../../Assets/22.svg';
import { ReactComponent as UF23 } from '../../Assets/23.svg';
import { ReactComponent as UF24 } from '../../Assets/24.svg';
import { ReactComponent as UF25 } from '../../Assets/25.svg';
import { ReactComponent as UF26 } from '../../Assets/26.svg';
import { ReactComponent as UF27 } from '../../Assets/27.svg';
import { ReactComponent as UF28 } from '../../Assets/28.svg';
import { ReactComponent as UF29 } from '../../Assets/29.svg';
import { ReactComponent as UF31 } from '../../Assets/31.svg';
import { ReactComponent as UF32 } from '../../Assets/32.svg';
import { ReactComponent as UF33 } from '../../Assets/33.svg';
import { ReactComponent as UF35 } from '../../Assets/35.svg';
import { ReactComponent as UF41 } from '../../Assets/41.svg';
import { ReactComponent as UF42 } from '../../Assets/42.svg';
import { ReactComponent as UF43 } from '../../Assets/43.svg';
import { ReactComponent as UF50 } from '../../Assets/50.svg';
import { ReactComponent as UF51 } from '../../Assets/51.svg';
import { ReactComponent as UF52 } from '../../Assets/52.svg';
import { ReactComponent as UF53 } from '../../Assets/53.svg';

function Maps(props) {

    function getMap (uf) {
        switch (uf) {
            case "11": 
                return <UF11 className="imageBody"/>;
        
            case "12":
                return <UF12 className="imageBody"/>;
        
            case "13":
                return <UF13 className="imageBody"/>;
        
            case "14":
                return <UF14 className="imageBody"/>;
        
            case "15":
                return <UF15 className="imageBody"/>;
        
            case "16":
                return <UF16 className="imageBody"/>;
        
            case "17":
                return <UF17 className="imageBody"/>;
        
            case "21":
                return <UF21 className="imageBody"/>;
        
            case "22":
                return <UF22 className="imageBody"/>;
        
            case "23":
                return <UF23 className="imageBody"/>;
        
            case "24":
                return <UF24 className="imageBody"/>;
        
            case "25":
                return <UF25 className="imageBody"/>;
        
            case "26":
                return <UF26 className="imageBody"/>;
        
            case "27":
                return <UF27 className="imageBody"/>;
        
            case "28":
                return <UF28 className="imageBody"/>;
        
            case "29":
                return <UF29 className="imageBody"/>;
        
            case "31":
                return <UF31 className="imageBody"/>;
        
            case "32":
                return <UF32 className="imageBody"/>;
        
            case "33":
                return <UF33 className="imageBody"/>;
        
            case "35":
                return <UF35 className="imageBody"/>;
        
            case "41":
                return <UF41 className="imageBody"/>;
        
            case "42":
                return <UF42 className="imageBody"/>;
        
            case "43":
                return <UF43 className="imageBody"/>;
        
            case "50":
                return <UF50 className="imageBody"/>;
        
            case "51":
                return <UF51 className="imageBody"/>;
        
            case "52":
                return <UF52 className="imageBody"/>;
        
            case "53":
                return <UF53 className="imageBody"/>;
        
            default:
                return <UF25 className="imageBody"/>;
        }
    }

    return ( 
        <S.Container>
            {getMap(props.uf)}
        </S.Container>
     );
}

export default Maps;