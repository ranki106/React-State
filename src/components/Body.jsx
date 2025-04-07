import React from "react"
import { useState } from 'react'
import ClaudeRecipe from "./claudeRecipe.jsx"
import IngredientsList from "./IngredientsList.jsx"
import { getRecipeFromMistral} from "../../ai.js"

export default function Main() {

    const [ingredients, setIngredients] = useState([])
   
    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(
            prevIngredients => [
                ...prevIngredients,
                newIngredient
            ]
        )
    }

    const [recipe, setRecipe] = useState("")

    async function getARecipe() {
        const recipe = await getRecipeFromMistral(ingredients)
        setRecipe(recipe)
    }
    
    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form"> 
                <input 
                    id="ingredient"
                    type="text" 
                    placeholder="e.g. oregano" 
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length ? 
                <IngredientsList 
                    getARecipe={getARecipe}
                    ingredients={ingredients}
                />
            : null}
            {recipe && 
                <ClaudeRecipe 
                    recipe={recipe}
                />
            }
      
        </main>
    )
}