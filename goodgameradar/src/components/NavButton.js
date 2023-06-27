
function NavButton(props) {
    return(
        props.games.map(sport => <button>{sport}</button>)

    )
}

export default NavButton;