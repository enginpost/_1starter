// You get JS and expression intellisense in VSCode here, but not for HTML
export function sample_template(content) {
    return `
    <div class="sample-external-js">
        <span class="sample-greeting">${content.greeting}</span> 
        <span class="sample-audience">${content.audience}</span>
        <h3>Favorites</h3>
        <ul>
            ${content.favorites.map( favorite =>{ return `

            <li>
                <span class="favorite-item">${favorite.item}</span>:
                <span class="favorite-value">${favorite.val}</span>
            </li>

            `}).join('')}
        </ul>
    </div>
`;
}