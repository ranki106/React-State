export default function IngredientsList(props) {
    
    const listIngredients = props.ingredients.map((ingredient) => {
        return <li key={ingredient}>{ingredient}</li>
    })
    
    return(
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{listIngredients}</ul>
            {props.ingredients.length > 3 && <div className="get-recipe-container">
                <div ref={props.ref}>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={props.getARecipe}>Get a recipe</button>
            </div>}
        </section> 
    )
}