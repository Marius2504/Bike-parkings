import  Link  from 'next/link'

export default function NotFound() {
    return (
        <div>
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <Link href='/'>Bikes</Link>
            <Link href='/parkings'>Parkings</Link>
        </div>
    )
}