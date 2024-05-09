const dogImageDiv = document.getElementById('dogimage');
const dogButton = document.getElementById('dogButton');
const getNewDog = () => 
{

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(json => {
        dogButton.onclick = () => getNewDog();
        dogImageDiv.innerHTML = `<img src='${json.message}' height=200 width=680/>`;
        })

}
console.log('hello');
fetch('https://dog.ceo/api/breeds/image/random').then(response =>
response.json()).then(json => {
    console.log(json.message)
    dogImageDiv.innerHTML = `<img src='${json.message}'
    height=200 width=680/>`
});
dogButton.onclick = () => getNewDog();





/*
function loop() 
{

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(json => {
        console.log(json.message);
        dogImageDiv.innerHTML = `<img src='${json.message}' height=200 width=680/>`;
        })

}


//loop thang rahhhhh

loop();
const stop = setInterval(loop, 200);
//setTimeout(() => clearInterval(stop), 2500);
*/
