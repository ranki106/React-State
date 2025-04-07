import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function ClaudeRecipe(props) {
    return(    
        <section aria-live="polite">
            <h1>Chef Recommends:</h1>
            <ReactMarkdown>
                {props.recipe}
            </ReactMarkdown>
        </section> 
    )
}