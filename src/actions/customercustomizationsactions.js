/**
 *
 */
const SELECT_CUSTOMIZATION = 'SELECT_CUSTOMIZATION'
export const selectCustomization = (product, size, customization, id) => {
    type: SELECT_CUSTOMIZATION,
    product,
    size,
    customization,
    id
}
