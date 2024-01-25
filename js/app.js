console.log("javscript up")

const movies = ["Saving Private Ryan", "Matrix", "Marvel"]

movies.push("DC")
movies.push("Pixar")

ranking = movies.unshift("Up")
deranking = movies.shift("Marvel")


movies.splice(1, 1, "good will hunting", "home alone");

console.log(movies);

movies.forEach(function(movie){
    console.log(`Movies: ${movie}`);
});
