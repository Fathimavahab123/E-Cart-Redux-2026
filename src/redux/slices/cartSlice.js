import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        //add to cart - view and wishlist component
        addCart:(state,action)=>{
            const existingItem=state.find(item=>item.id==action.payload.id)
            if(existingItem){
                existingItem.quantity +=1
                existingItem.totalPrice=existingItem.quantity * existingItem.price
                const remainingItem=state?.filter(item=>item.id!=existingItem.id)
                state=[...remainingItem,existingItem]
            }else{
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        },
        //remove cart item
        removeCartItem:(state,action)=>{
          return state.filter(item=>item.id!=action.payload)
        },
        incrementCart:(state,action)=>{
        const exisitingProduct = state.find(item=>item.id==action.payload)
        const remaingProduct = state.filter(item=>item.id!=action.payload)
        exisitingProduct.quantity+=1
        exisitingProduct.totalPrice=exisitingProduct.quantity * exisitingProduct.price
        state = [...remaingProduct,exisitingProduct]
        },
        decrementCart:(state,action)=>{
        const exisitingProduct = state.find(item=>item.id==action.payload)
        const remaingProduct = state.filter(item=>item.id!=action.payload)
        exisitingProduct.quantity-=1
        exisitingProduct.totalPrice=exisitingProduct.quantity * exisitingProduct.price
        state = [...remaingProduct,exisitingProduct]
        },
        emptyCart:(state)=>{
            return []
        }
    }
})
export const{addCart,removeCartItem,incrementCart,decrementCart,emptyCart}=cartSlice.actions
export default cartSlice.reducer