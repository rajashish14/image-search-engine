


const searchInp= document.querySelector(".searchInp");
const searchForm = document.querySelector(".searchBtn");
const showMoreBtn = document.querySelector(".output button");
const container = document.querySelector(".result");
let keyword = ""; 
let page = 1;
async function imageSearch(){
    const apiKey = "&client_id=Rm-06eDmkHEcT0-XIWT0Flrru1x66kdPVSr3VW2vDvE&per_page=12";
    const apiUrl = "https://api.unsplash.com/search/photos?page=";
    let keyword = searchInp.value;
    console.log(page);
    console.log(keyword);
    const response = await fetch(apiUrl+page+"&query="+keyword+apiKey);
    var data = await response.json();
    console.log(data);
    const resultData = data.results;
    resultData.map((res) =>{
        const searchImg = document.createElement("img");
        searchImg.src = res.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = res.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(searchImg);
        container.appendChild(imageLink);
        // showMoreBtn.style.disable = false;
    });
    showMoreBtn.style.display = "block";
   
    
}

searchForm.addEventListener("click", function(e) {
    e.preventDefault();
    page = 1;
    if(searchInp.value == ""){
        alert('please enter anything here');
    }
    else{
        container.innerHTML = " ";
        imageSearch();

    }
});
showMoreBtn.addEventListener("click", function() {
    page++;
    imageSearch();
})




