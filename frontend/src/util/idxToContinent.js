export const arrContinent = [
    'kothrud',
    'karvenagar',
    'katraj',
    'kondhwa',
    'wagholi',
    'shivajinagar'
]

export const continentToIdx = (continent) => {
    return arrContinent.findIndex((cont) => cont === continent)
}

export const idxToContinent = (idx) => {
    return (arrContinent.filter((_, index) => index === Number(idx)))[0]
}