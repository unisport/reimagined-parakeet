/**
 *
 *
 */
const REQUEST_SIZES = 'REQUEST_SIZES'
export const requestSizes = () => (
    {
        type: REQUEST_SIZES
    }
)

const RECEIVE_SIZES = 'RECEIVE_SIZES'
export const receiveSizes = (sizes) => (
    {
        type: RECEIVE_SIZES,
        sizes
    }
)

const SELECT_SIZE = 'SELECT_SIZE'
export const selectSize = (product, size) => (
    {
        type: SELECT_SIZE,
        product,
        size
    }
)
