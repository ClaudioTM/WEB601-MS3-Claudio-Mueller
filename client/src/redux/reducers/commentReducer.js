const initialState = {
    comments: []
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case 'SET_COMMENTS':
        return {
          ...state,
          comments: action.payload,
        };
      default:
        return state;
    }
  }