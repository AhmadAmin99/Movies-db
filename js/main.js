let navBarWidth = $(".nav-bar").innerWidth();
// console.log(navBarWidth);
$(".fa-bars").click(function(){
    let x = $(".nav-bar .menu").css("left");
   
    // console.log(x);
    if(x === "0px"){
        $(".nav-bar .menu").animate({left:"-240px"},500);

        $(".nav-part").animate({left:"0px"}, 500);
       
        $(".menu li").animate({ opacity: "0", paddingTop: "500px" }, 500);
        $(".fa-xmark").addClass("fa-bars").removeClass("fa-xmark");


    }else{
        $(".fa-bars").addClass("fa-xmark").removeClass("fa-bars");
        $(".nav-bar .menu").animate({left:"0px"}, 500);

        $(".nav-part").animate({left:"250px"}, 500);
        $(".item1").animate(
            { opacity: "1", paddingTop: "25px" },
            1100
          )
          $(".item2").animate(
            { opacity: "1", paddingTop: "25px" },
            1200
          )
          $(".item3").animate(
            { opacity: "1", paddingTop: "25px" },
            1300
          )
          $(".item4").animate(
            { opacity: "1", paddingTop: "25px" },
            1400
          )
          $(".item5").animate(
            { opacity: "1", paddingTop: "25px" },
            1500
          )
          $(".item6").animate(
            { opacity: "1", paddingTop: "25px" },
            1600
          )


    }
})


$(".fa-xmark").click(function(){
    let x = $(".nav-part").css("left");
    
    $(".fa-xmark").addClass("fa-bars").removeClass("fa-xmark");

    $(".nav-bar ul").animate({left:"-240"},500);
    $(".nav-part").animate({left:"0px"}, 500);

    
});

var row = document.querySelector(".rowData"),
  categorylinks = document.getElementsByClassName("nav-cat"),
  result = document.getElementById("res"),
  allMoviesByWord = document.getElementById("allMovies"),
  searchURL =
    "https://api.themoviedb.org/3/search/movie?query=mad&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&include_adult=false",
  trendingURL =
    "https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
  latestURL =
    "https://api.themoviedb.org/3/movie/latest?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
  popularURL =
    "https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
  topratedURL =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
  upcomingURL =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
  NowURL =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
  URL =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
  category = "",
  search_bar = document.getElementById("word");

  getMovies();

  for (var i = 0; i < categorylinks.length; i++)
  categorylinks[i].addEventListener("click", function (e) {
    "Now playing" == (category = e.target.innerHTML) &&
      ((URL = NowURL), getMovies()),
      "Popular" == category
        ? ((URL = popularURL), getMovies())
        : "Top Rated" == category
        ? ((URL = topratedURL), getMovies())
        : "Latest" == category
        ? ((URL = latestURL), getMovies())
        : "Trending" == category
        ? ((URL = trendingURL), getMovies())
        : "Upcoming" == category && ((URL = upcomingURL), getMovies());
  });

var allMovies;
async function getMovies(){
    let response = await fetch(URL);
    var finalRes = await response.json();
    allMovies = finalRes.results;
    console.log(allMovies.length)
    displayMovies();
    // var finalRes = await response.json();
    // console.log(finalRes.results);
}

async function getMoviesByWord(e) {
    var t =
        "https://api.themoviedb.org/3/search/movie?query=" +
        e +
        "&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&include_adult=false";
    let response = await fetch(t);
        var finalRes = await response.json();
        allMovies = finalRes.results;
        console.log(allMovies.length)
        displayMovies();
  }
  allMoviesByWord.onkeyup = function () {
    getMoviesByWord(allMoviesByWord.value);
  };
  
var imgPath = "https://image.tmdb.org/t/p/w500";

function displayMovies() {
    var e = ""; 
  for (var i = 0; i < allMovies.length; i++)
    e += `
    <div class="movie col-lg-4 col-md-6 col-sm-12">
    <div class="post">
      <img class="img-fluid" src="${imgPath + allMovies[i].poster_path}" alt="">
      <div class="movie-caption">
          <h2>${allMovies[i].original_title}</h2>
          <p>${allMovies[i].overview}</p>
          <p>rate: <span>${allMovies[i].vote_average}</span></p>
          <p>${allMovies[i].release_date}</p>
      </div>
    </div>
  </div>
    `
  row.innerHTML = e;
}



search_bar.onkeyup = function () {
  var e = search_bar.value,
    a = "";
  if ("" == e) return (result.innerHTML = " ");
  for (var i = 0; i < allMovies.length; i++)
  {
    //console.log(allMovies[i].original_title.includes(e));
    if(allMovies[i].original_title.toLowerCase().includes(e)){
        a+=`
        <div class="movie col-lg-4 col-md-6 col-sm-12">
        <div class="post">
          <img class="img-fluid" src="${imgPath + allMovies[i].poster_path}" alt="">
          <div class="movie-caption">
              <h2>${allMovies[i].original_title}</h2>
              <p>${allMovies[i].overview}</p>
              <p>rate: <span>${allMovies[i].vote_average}</span></p>
              <p>${allMovies[i].release_date}</p>
          </div>
        </div>
      </div>
        `
    }
  }
    (result.innerHTML = a);
};

// validations
let userName = document.getElementById("name"),
  userEmail = document.getElementById("email"),
  userPhone = document.getElementById("phone"),
  userAge = document.getElementById("age"),
  userPassword = document.getElementById("password"),
  userRePassword = document.getElementById("rePassword"),
  userNameAlert = document.getElementById("namealert"),
  userEmailAlert = document.getElementById("emailalert"),
  userPhoneAlert = document.getElementById("phonealert"),
  userAgeAlert = document.getElementById("agealert"),
  userpasswordAlert = document.getElementById("passwordalert"),
  userRepasswordAlert = document.getElementById("repasswordalert");

  function userNameValid() {
    var regex = /^[a-zA-Z-9]+$/
    if(regex.test(userName.value)){
        userNameAlert.style.display = "none";
    }else{
        userNameAlert.style.display = "block";

    }
  }
  function userEmailValid() {
    var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    if(regex.test(userEmail.value))
      userEmailAlert.style.display = "none"
      else
      userEmailAlert.style.display = "block"
  }
  function userPhoneValid() {
    var regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    if(regex.test(userPhone.value))
    userPhoneAlert.style.display = "none"
    else
    userPhoneAlert.style.display = "block"
  }
  function userAgeValid() {
    var regex = /^[1-9][0-9]?$|^100$/;
    if(regex.test(userAge.value)){
        userAgeAlert.style.display = "none"
    }else{
        userAgeAlert.style.display = "block"
    }
   
  }
  function userPasswordValid() {
    var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if(regex.test(userPassword.value)){
        userpasswordAlert.style.display = "none"
    }else{
        userpasswordAlert.style.display = "block"
    }
  }

  function userRePasswordValid() {
    if(userPassword.value === userRePassword.value){
        userRepasswordAlert.style.display = "none";
    }else{
        userRepasswordAlert.style.display = "block";
        
    }
    
  }



userName.addEventListener("keyup", userNameValid)
userEmail.addEventListener("keyup", userEmailValid)
userPhone.addEventListener("keyup", userPhoneValid)
userAge.addEventListener("keyup", userAgeValid)
userPassword.addEventListener("keyup", userPasswordValid)
userRePassword.addEventListener("keyup", userRePasswordValid)
