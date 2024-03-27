/** @format */

const initialState = {
  calendy: {},
  user: {},
  next:false,
  close: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "VALUES_CALENDY":
      return {
        ...state,
        calendy: action.payload,
      };
      case "VALUES_CALENDY_USER":
        return{
          ...state,
          user: action.payload
        }
    case "NEXT":
      return{
        ...state,
        next:true
      }
    
      case "CLOSE":
        return{
          ...state,
          close:true
        }

    default:
      return { ...state };
  }
};

export default rootReducer;
