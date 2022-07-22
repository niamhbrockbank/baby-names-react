import {useState} from 'react'

export default function SearchBar(): JSX.Element {
    const [typedMessage, setTypedMessage] = useState('Search here...')

    return <input 
            value = {typedMessage}
            onChange={(e) => {
                setTypedMessage(e.target.value)
            }}
            />
}

