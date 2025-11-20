const authUsers = [
    {"username": "nr", "password": "sala", rateLimiting: { window: 0, requestCounter: 0 }},
]

export const getAuthUser = (username) => authUsers.find( user => user.username === username )

export const userNameExists = (username) => authUsers.some( user => user.username === username )