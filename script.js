

async function fetchQuotes(){
    const response = await fetch("https://wonderquotes-api.onrender.com/random");
    const data = await response.json();
    return data;
}

function copyToClipboard(text){
    navigator.clipboard.writeText(text)
        .then(() => console.log("Text has been copied"))
        .catch(error => alert("Could not copy text"));
}

const cite = document.querySelector("cite");
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");


document.addEventListener('DOMContentLoaded',async e => {
    const data = await fetchQuotes();
    quote.textContent = data.data.quote;
    author.textContent = data.data.author;
});


cite.addEventListener('click', e => {
    const quoteValue = quote.textContent;
    const authorValue = author.textContent;
    copyToClipboard(`${quoteValue}\n${authorValue}`);
});