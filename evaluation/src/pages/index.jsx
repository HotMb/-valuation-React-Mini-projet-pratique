import { Link } from 'react-router'


function Index() {
    return (
        <div>
            <h1>Accueil</h1>
            <p>Bienvenue sur le catalogue.</p>
            <Link to={`/items`}>Acceder au Films</Link>
            <Link to={`/contact`}>Contact</Link>
        </div>
    )
}

export default Index;