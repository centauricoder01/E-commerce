// reducer related to cart state;

export function CartReducer (state, action) {
    switch(action.type){
        case "ADD_TO_CART" :
            return {...state  ,cartData: [...state.cartData, action.payload]};
        
        case "REMOVE_FROM_CART" :
            let filtering = state.cartData.filter((ele) =>{
                return ele.id !== action.payload
            })
            return {...state, cartData : [...filtering]};
        
        
        case "CHECKOUT" :
            return {...state, cartData : [] }
    }
}