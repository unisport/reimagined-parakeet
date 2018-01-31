/**
 *
 */
const RECEIVE_SETTINGS = 'RECEIVE_SETTINGS'
export const receiveSettings = (currency, locale, vat) => (
    {
        type: RECEIVE_SETTINGS,
        currency,
        locale,
        vat
    }
)
