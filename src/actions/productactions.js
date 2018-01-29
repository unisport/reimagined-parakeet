/**
 *
 *
 */
const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS'
export const requestProducts = () => (
    {
        type: REQUEST_PRODUCTS
    }
)

const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
export const receiveProducts = (products) => (
    {
        type: RECEIVE_PRODUCTS,
        products
    }
)

const RECEIVE_SETTINGS = 'RECEIVE_SETTINGS'
export const receiveSettings = (locale, currency, vat) => (
    {
        type: RECEIVE_SETTINGS,
        locale,
        currency,
        vat
    }
)

const REQUEST_SIZES = 'REQUEST_SIZES'
export const requestSizes = () => (
    {
        type: REQUEST_SIZES
    }
)

const RECEIVE_SIZES = 'RECEIVE_SIZES'
export const receiveSizes = (products) => (
    {
        type: RECEIVE_SIZES,
        products
    }
)
