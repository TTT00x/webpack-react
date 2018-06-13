export const initialState = {
  newsList: []
}

const news = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_NEWS':
      return {
        ...state,
        newsList: action.payload
      }
    case 'SET_NEWS':
      return {
        ...state,
        newsList: action.payload
      }
    default:
      return state
  }
}
export default news;