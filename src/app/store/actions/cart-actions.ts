
import {Action} from '@ngrx/store'
import { Product } from '../../models/product';

export enum CartActionTypes{
    ADD_PRODUCT = 'ADD_PRODUCT',
    REMOVE_PRODUCT = 'REMOVE_PRODUCT'
}

export class AddProduct implements Action{
    readonly type= CartActionTypes.ADD_PRODUCT;
    constructor(public payload:Product){}
}

export class RemoveProduct implements Action{
    readonly type= CartActionTypes.REMOVE_PRODUCT;
    constructor(public payload:Product){}

    
}

export type CartActions = AddProduct | RemoveProduct