import {BabyName} from './NameSection'

export default function FavouriteSection({favNames, convertFunction}:any):JSX.Element {
    //Re-render onClick
    const favNamesElements = favNames.map(convertFunction)
    return <ul>{favNamesElements}</ul>
}