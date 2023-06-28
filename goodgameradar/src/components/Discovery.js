import VsCard from './VsCard'
import SearchBar from './SearchBar';

function Discovery(props) {
    return (
        <div>
            <h1>Discover</h1>
            <SearchBar />
            <button>Search</button>
            <div ClassName="PopularGamesCard">
                <VsCard />
                <VsCard />
                <VsCard />
            </div>
            
            
        </div>       
    )
}

export default Discovery;