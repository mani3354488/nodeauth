export const {
    NODE_ENV = 'developmet',
    APP_PORT = '3000'
} = process.env

export const IN_PROD = NODE_ENV === 'production'