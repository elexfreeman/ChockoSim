
/**
 * Ингредиенты
 */
export interface IngredientsI {
    caption: string; // название
    price: number;
}


export interface ProductIngredientI {
    ingredient: IngredientsI;
    amount: number;
}