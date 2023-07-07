
 function reducer(state,action){
    
    switch(action.type){
        case "login" :
            return {
                ...state,
                isLogin:!state.isLogin
            }
            case "modal" : 
            return {
                ...state,
                isModal:action.payload
            }
    }
 }

 export default reducer