
const translateToDothraki = async() => {
    const message = document.querySelector('.message').value
    const result = document.querySelector('.result')

    let response = await fetch(`https://api.funtranslations.com/translate/dothraki.json?text=${message}`)
    response = await response.json()
    // console.log(response.contents.translated)
    result.textContent = response.contents.translated

}
const translateButton = document.querySelector('.translate').addEventListener("click",async()=>{
    // alert('hello')
await translateToDothraki()

})

// translateButton()