//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click',getPhotos)


function getPhotos(){
    const inputDate = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=0Bf8d0oEZxvsByGqAbysYJEMKLpotlsP8CezS3yF&date=${inputDate}` 

    
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        
            if(data.media_type ==="image"){
                       document.querySelector('img').src =data.hdurl
            }
            document.querySelector('h3').innerText = data.explanation
   
})
.catch(err =>{
    console.log(`error ${err}`)
})
}
