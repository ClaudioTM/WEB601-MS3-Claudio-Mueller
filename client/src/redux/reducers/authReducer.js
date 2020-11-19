const initialState = {
    authenticated: null,
    user: null,
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
      case 'REGISTER_SUCCESS':
        return {
          ...state,
          authenticated: true,
          user: action.payload,
        };
      case 'LOGIN_FAIL':
      case 'LOGOUT_SUCCESS':
      case 'REGISTER_FAIL':
        return {
          ...state,
          user: null,
          authenticated: false,
        };
      default:
        return state;
    }
  }