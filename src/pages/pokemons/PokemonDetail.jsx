import './stylesheet/PokemonDetail.css'

const PokemonDetail = ({ pokemon, setPokemonDetails}) => {
    return (
        <section className='pokemondetail-overlay'>
            <article className='pokemondetail-wrapper'>
                <div className='pokemondetail-header'>
                    <span>Charmeleon Info</span>
                    <button onClick={() => setPokemonDetails(false)}>X</button>
                </div>

                <span className='pokemondetail-title'>Abilidades</span>
                {pokemon.abilities.map((ability) => <span>{ability.ability.name}</span>)}

                <span className='pokemondetail-title'>Estadisticas</span>
                {pokemon.stats.map((stat) => <span>{`${stat.stat.name}: ${stat.base_stat}`}</span>)}
            </article>
        </section>
    )
}

export default PokemonDetail