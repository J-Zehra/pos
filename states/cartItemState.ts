import { atom } from "recoil";

export const cartItemState = atom<CartItem[]>({
    key: "cartitemState",
    default: []
})