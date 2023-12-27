let btn= document.getElementById("btn");
let title= document.getElementById("title");
let year= document.getElementById("year");
let director= document.getElementById("director");
let imdb_rating= document.getElementById("imdb_rating");
let released= document.getElementById("released");


btn.onclick=function(){
	let s= document.querySelector('input').value;

 	const xhr= new XMLHttpRequest();
 	xhr.open("GET",`https://www.omdbapi.com/?t=${s}&apikey=3aee82df`, true);
 	 
 	xhr.onload = function(){
 	
 		console.log(xhr)
 		console.log(xhr.responseText)
 		
	    s=JSON.parse(xhr.responseText)
	    console.log(s)
	    
	    
		title.innerText="Title :-- "+s.Title;
		year.innerText="Year :-- "+s.Year;
		director.innerText="Director :-- "+s.Director;
		imdb_rating.innerText="imdbRating :-- "+s.imdbRating;
		released	.innerText="Released :-- "+s.Released;
		
		title.innerText=s;
;
			
 	}
 	xhr.send(); 
}
