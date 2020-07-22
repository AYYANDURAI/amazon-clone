export const initialState = {
    basket: [],
    user: null
};

export const getBasketTotal = (basket) => {
    return basket.reduce((amount, basketItem) => basketItem.price + amount, 0);
}
const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return { ...state, user: action.user };
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case "REMOVE_FROM_BASKET":
            let newBasket = [...state.basket];
            //newBasket = newBasket.filter(item => item.id !== action.item.id);
            let index = state.basket.findIndex(basketitem => basketitem.id === action.item.id);
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Can't Remove Product(id:${action.item.id}) as it is not in basket`);
            }
            return { ...state, basket: newBasket }
        default:
            return state;
    }
}

export default reducer;