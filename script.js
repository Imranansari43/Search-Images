const input = document.querySelector('#input');
const button = document.querySelector('button');
const main = document.querySelector('.main');
const showMore = document.querySelector('.showmore');



button.addEventListener('click', ()=>{
    let finalData = null;
    search();

})
page = 1;
async function search(){
    const inputval = input.value;
    if(page === 1){
        main.innerHTML = " ";
    }
    const api = "WgzidLjH6jVXKX4dsl71CDMA6o4nSkM9Y0gg14QXdV0";
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputval}&client_id=${api}&per_page=14`;
    let apidata = await fetch(url);
    let finalData = await apidata.json();
    console.log(finalData)
    const results = finalData.results;
    results.map((result)=>{
        const image = document.createElement('img');
        const box = document.createElement('div');
        box.classList.add('card');
        image.src = result.urls.small;
        box.append(image);
        main.append(box);
    })
    showMore.classList.remove('showmore');
}

showMore.addEventListener('click', ()=>{
    page++;
    search();
})