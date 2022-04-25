import axios from "axios"
import { CartItem } from "../redux/cartReducer"

const instance = axios.create({
    baseURL: 'https://fakestoreapi.com/'
})

export type Product = {
    id: number
    title: string
    price: string
    category: string
    description: string
    image: string
}
export type AllProducts = Array<Product>
export type UserType = {
    id:number
    email: string
    username: string
    password: string
    name:{
        firstname: string
        lastname: string
    },
    address:{
        city: string
        street: string
        number: number
        zipcode: string
        geolocation:{
            lat: string
            long: string
        }
    },
    phone: string
}
export type AllUsers = Array<UserType>

export const request = {
    getAllUsers() {
       return instance.get<AllUsers>('/users')
    },
    getAllProducts() {
        return instance.get<AllProducts>('/products')
    },
    getSingleProduct(id: number) {
        return instance.get<CartItem>('/products/' + id)
    }
}