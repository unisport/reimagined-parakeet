/**
 *
 */
const REQUEST_CUSTOMIZATIONS = 'REQUEST_CUSTOMIZATIONS'
export const requestCustomizations = () => (
    {
        type: REQUEST_CUSTOMIZATIONS
    }
)

const RECEIVE_CUSTOMIZATIONS = 'RECEIVE_CUSTOMIZATIONS'
export const receiveCustomizations = (customizations) => (
    {
        type: RECEIVE_CUSTOMIZATIONS,
        customizations
    }
)
