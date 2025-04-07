import React from "react"
import { useState, useEffect } from 'react'
import ClaudeRecipe from "./claudeRecipe.jsx"
import IngredientsList from "./IngredientsList.jsx"
import { getRecipeFromMistral} from "../../ai.js"

export default function Main() {

    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState("")
    const recipeSection = React.useRef(null)

    async function getARecipe() {
        let recipe = await getRecipeFromMistral(ingredients)
        recipe = "test"
        setRecipe(recipe)
    }
   
    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(
            prevIngredients => [
                ...prevIngredients,
                newIngredient
            ]
        )
    }

    useEffect(() => {
        if(recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [recipe])

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
            {ingredients.length  > 0 &&
                <IngredientsList 
                    ref={recipeSection}
                    getARecipe={getARecipe}
                    ingredients={ingredients}
                />
            }

            {recipe && 
                <ClaudeRecipe 
                    recipe={recipe}
                />
            }
      
        </main>
    )
}