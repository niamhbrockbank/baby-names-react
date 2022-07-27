export default function FavouriteSection({favNames, convertFunction}:any):JSX.Element {
    //Re-render onClick
    const favNamesElements : JSX.Element[] = favNames.map(convertFunction)
    
    return (
        <>
            <p>Hi favourites</p>
            <ul>{favNamesElements}</ul>
        </>
    )
}