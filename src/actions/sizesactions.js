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
