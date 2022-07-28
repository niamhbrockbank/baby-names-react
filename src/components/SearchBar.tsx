// import {useState} from 'react'

export default function SearchBar({searchTerm, setSearchTerm}:any): JSX.Element {
    // const [typedMessage, setTypedMessage] = useState('Search here...')

    return <input 
            value = {searchTerm}
            id='search-bar'
            onChange={(e) => {
                setSearchTerm(e.target.value)
            }}
            />
}

