import React from 'react';
import loupe from './loupe.png';
import notfound from './404.png';

export default function Search() {

    const handleclick= () => {
        var word = document.getElementById("word").value;
        var type = document.getElementById("type").value;
        console.log(word);
        console.log(type);
        if(type === "Deep search"){
        fetch('https://www.omdbapi.com/?i=tt3896198&apikey=6f33db8c&t='+word+"&plot=full")  
            .then(response => {
                // console.log(response)
                return response.json()
            }).then (data => {
                console.log(data.Response);
                if(data.Response === "True"){
                    console.log(data)
                    let poster = document.getElementById("poster");
                    let title = document.getElementById("title");
                    let plot = document.getElementById("plot");
                    let time = document.getElementById("Run-Time");
                    let date = document.getElementById("date");
                    let typeM = document.getElementById("type-m");
                    let imdb = document.getElementById("imdb");
                    let lang = document.getElementById("lang");
                    let actor = document.getElementById("actors");
                    let country = document.getElementById("country");
                    let genre = document.getElementById("genre");
                    let awards = document.getElementById("awards");
                    poster.src = data.Poster;
                    title.innerHTML= data.Title;
                    plot.innerHTML ="Description: </br>"+ data.Plot;
                    date.textContent="Date:  "+ data.Released;
                    time.textContent ="Run time: "+ data.Runtime;
                    typeM.textContent = "Type: "+ data.Type; 
                    lang.innerHTML = "Language: "+data.Language; 
                    actor.innerHTML= "Actors: </br>"+data.Actors;  
                    country.innerHTML= "Country: "+data.Country; 
                    genre.innerHTML= "Genre: </br>"+data.Genre;                   
                    imdb.innerHTML= "IMDB Rating: "+data.imdbRating+"/10"; 
                    awards.innerHTML = "Awards: </br>"+ data.Awards;
    
                }else if(data.Response === 'False') {
                    console.log("not found");
                    let img = document.createElement("img");
                    let text = document.createElement("p");
                    let div = document.createElement("div");
                    img.src = notfound;
                    text.textContent = "Not Found !";
                    img.classList= "not-found";
                    div.classList= "not-text";
                    var main = document.getElementById("result");
                    div.append(img);
                    div.append(text);
                    main.append(div);
                }
                })
            .catch(err => {
                console.error(err);
       });
        }else if(type === "Inception"){
            fetch('https://www.omdbapi.com/?i=tt3896198&apikey=6f33db8c&s='+word)  
            .then(response => {
                // console.log(response)
                return response.json()
            }).then (data => {
                console.log(data.Search);
                document.getElementById("imgone").src = data.Search[0].Poster;
                document.getElementById("imgtwo").src = data.Search[1].Poster;
                document.getElementById("imgtree").src = data.Search[2].Poster;
                document.getElementById("imgfour").src = data.Search[3].Poster;
                document.getElementById("imgfive").src = data.Search[4].Poster;
                document.getElementById("imgsex").src = data.Search[5].Poster;
                document.getElementById("imgseven").src = data.Search[6].Poster;
                document.getElementById("imgei").src = data.Search[7].Poster;
                document.getElementById("imgnine").src = data.Search[8].Poster;
                document.getElementById("imgten").src = data.Search[9].Poster;

                document.getElementById("titone").innerHTML = data.Search[0].Title;
                document.getElementById("tittwo").innerHTML = data.Search[1].Title;
                document.getElementById("tittree").innerHTML = data.Search[2].Title;
                document.getElementById("titfour").innerHTML = data.Search[3].Title;
                document.getElementById("titfive").innerHTML = data.Search[4].Title;
                document.getElementById("titsex").innerHTML = data.Search[5].Title;
                document.getElementById("titseven").innerHTML = data.Search[6].Title;
                document.getElementById("titei").innerHTML = data.Search[7].Title;
                document.getElementById("titnine").innerHTML = data.Search[8].Title;
                document.getElementById("titten").innerHTML = data.Search[9].Title;
            })
            .catch(err => {
                console.error(err);
       });
        }
           
    }

    return (
        <div className="search-com" >
            <form className="search">
                <input className="input" placeholder="Name of the Movie" id="word" required/>
                <button onClick={ handleclick}  type="button"><img  src={ loupe } alt="loupe" className="loupe" /></button>
            </form>
            <select id="type" className="type-input">
                    <option>Deep search</option>
                    <option>Inception</option>
                </select>
            <div className="result" id="result">
                <div className="elem-result">
                    <div className="main">
                    <p id="title"></p>
                    <img id="poster"/>
                    <p id="plot"></p>
                    </div>
                    <div>
                        <p className="item" id="type-m"></p>
                        <p className="item" id="genre"></p>
                        <p className="item" id="date"></p>
                        <p className="item" id="season"></p>
                        <p className="item" id="Run-Time"></p>
                        <p className="item" id="lang"></p>
                        <p className="item" id="country"></p>
                        <p className="item" id="actors"></p>
                        <p className="item" id="imdb"></p>
                        <p className="item" id="awards"></p>
                        <img id="imgone" />
                        <p id="titone"></p>
                        <img id="imgtwo" />
                        <p id="tittwo"></p>
                        <img id="imgtree" />
                        <p id="tittree"></p>
                        <img id="imgfour" />
                        <p id="titfour"></p>
                        <img id="imgfive" />
                        <p id="titfive"></p>
                        <img id="imgsex" />
                        <p id="titsex"></p>
                        <img id="imgseven" />
                        <p id="titseven"></p>
                        <img id="imgei" />
                        <p id="titei"></p>
                        <img id="imgnine" />
                        <p id="titnine"></p>
                        <img id="imgten" />
                        <p id="titten"></p>
                    </div>
                </div>
            </div>
        </div>
    );
}