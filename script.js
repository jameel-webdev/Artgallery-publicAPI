function fetchArtworks() {
let url = "https://api.artic.edu/api/v1/artworks?ids=27992,28560&fields=id,title,image_id";
fetch(url)
.then(response => response.json())
.then(data => {
let artworksDiv = document.getElementById("artworks");
data.data.forEach(artwork => {
let artworkDiv = document.createElement("div");
artworkDiv.classList.add("artwork");
 let artworkImg = document.createElement("img");
artworkImg.src = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`;
const artworkTitle = document.createElement("h2");
artworkTitle.textContent = artwork.title;
    artworkDiv.appendChild(artworkImg);
    artworkDiv.appendChild(artworkTitle);
    artworksDiv.appendChild(artworkDiv);
 });
})
.catch(error => {
console.error(error);
});
}

window.addEventListener("load", fetchArtworks);
