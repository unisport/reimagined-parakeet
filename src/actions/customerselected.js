/**
 *
 */
const SELECT_PRODUCT = 'SELECT_PRODUCT'
export const selectedProduct = (choice, product) => (
    {
        type: SELECT_PRODUCT,
        choice,
        product
    }
)
