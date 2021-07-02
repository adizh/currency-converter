
const initState={
    currency:[],
    rates:[]
}
const GET_CURRENCY='GET_CURRENCY'
const GET_RATES='GET_RATES'


const func=(state = initState, action) => {
    switch(action.type) {
        case GET_CURRENCY:
            return {...state, currency: action.currency};
                 case GET_RATES:
            return {...state, rates: action.rates};
        default:
            return state
    }
};
export default func
export const getCurrency=(data)=>{
  return(dispatch)=>{
      dispatch({type:GET_CURRENCY,currency:data})
  }
}

export const getRates =(data)=>{
      return(dispatch)=>{
      dispatch({type:GET_RATES,rates:data})
  }
}
