/**
 *
 */
const REQUEST_CHOICES = 'REQUEST_CHOICES'
export const requestChoices = () => (
    {
        type: REQUEST_CHOICES
    }
)

const RECEIVE_CHOICES = 'RECEIVE_CHOICES'
export const receiveChoices = (choices) => (
    {
        type: RECEIVE_CHOICES,
        choices
    }
)

const MAKE_CHOICE = 'MAKE_CHOICE'
export const makeChoice = (index) => (
    {
        type: MAKE_CHOICE,
        index
    }
)
