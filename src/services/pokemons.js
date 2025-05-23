const URL = 'https://pokeapi.co/api/v2/pokemon/'

export const getMoves = async (pokemonId) => {
    const data = await fetch(`${URL}${pokemonId}`)
    const resData = await data.json()

    const moves = resData.moves
    return moves.map((move) => {
        return {'move': move.move.name}
    })
}

export const getInfo = async (pokemonId) => {
    const data = await fetch(`${URL}${pokemonId}`)
    const resData = await data.json()

    const result = { 'abilities': resData.abilities, 'stats': resData.stats }
    return result
}