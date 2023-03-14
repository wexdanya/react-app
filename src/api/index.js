export const getRandomUsers = (seed,page) =>
    fetch(`https://randomuser.me/api/?results=${seed}&seed=fd2022-2-ajax&page=${page}`)
    .then((res) => res.json())

