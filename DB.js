// this is just a dummy DB, a real DB is supposed to be connected

let games = [
    {id: '1', title: 'Zelda, Tears of the Kingdom', platform: ['Switch']},
    {id: '2', title: 'Chicken invaders 2', platform: ['PC', 'Xbox']},
    {id: '3', title: 'PubG', platform: ['Smart Phone', 'PS5', 'Xbox']},
    {id: '4', title: 'Mortal Kombat', platform: ['Switch', 'PS5', 'Xbox']},
    {id: '5', title: 'Final Fantasy 7 Remake', platform: ['PS5', 'Xbox']}
]

let authors = [
    {id: '1', name: 'bills', verified: true},
    {id: '2', name: 'nia', verified: false},
    {id: '3', name: 'tee', verified: true}
]

let reviews = [
    {id: '1', rating: 9, content: 'lorem ipsum', author_id: '1', game_id: '2'},
    {id: '2', rating: 10, content: 'lorem ipsum', author_id: '2', game_id: '1'},
    {id: '3', rating: 7, content: 'lorem ipsum', author_id: '3', game_id: '3'},
    {id: '4', rating: 5, content: 'lorem ipsum', author_id: '2', game_id: '4'},
    {id: '5', rating: 8, content: 'lorem ipsum', author_id: '2', game_id: '5'},
    {id: '6', rating: 7, content: 'lorem ipsum', author_id: '1', game_id: '2'},
    {id: '7', rating: 10, content: 'lorem ipsum', author_id: '3', game_id: '1'},
]

export default { games, authors, reviews } 