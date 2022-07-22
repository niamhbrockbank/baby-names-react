// import {useState} from 'react'

export default function SearchBar({typedMessage, setTypedMessage}:any): JSX.Element {
    // const [typedMessage, setTypedMessage] = useState('Search here...')

    return <input 
            value = {typedMessage}
            id='search-bar'
            onChange={(e) => {
                setTypedMessage(e.target.value)
            }}
            />
}

