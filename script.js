$(document).ready(function () {
  let movies = []
  class Movie {
    constructor(number, name, genre, year, time, cast, poster, video) {
      this.number = number,
        this.name = name,
        this.genre = genre,
        this.year = year,
        this.cast = cast,
        this.poster = poster,
        this.video = video,
        this.time = time
    }
  }

  $(document).on("click", "#addMovie", function () {
    let numberM = $("#numOfDvd").val()
    let nameM = $("#nMovie").val();
    let genreM = $("#genre1").val();
    let yearM = $("#year").val();
    let timeM = $("#time").val();
    let castM = $("#cast").val();
    let posterM = $("#poster").val();
    let videoM = $("#video").val();
    let videoYouTube = videoM.substr(videoM.indexOf("=") + 1);
     nameM = new Movie(numberM, nameM, genreM, yearM, timeM, castM, posterM, videoYouTube);
    movies.push(nameM)
    $("#list1").prepend(`
       <tr> 
       <td>${nameM.number}</td>
       <td><a href="#" id="oks">${nameM.name}</a></td>
       <td>${nameM.genre}</td>
       <td>${nameM.year}</td>
       <td>${nameM.time}</td>  
       <td><button type="button" class="btn btn-info" id="editBtn">Edit</button></td>
       <td><button type="button" class="btn btn-danger" id="delBtn">Delete</button></td>
       </tr>`)
    document.forms.form1.reset();
    $("#oks").on("click", function () {
      $("#fullD").show()
      $("#list1").hide();
      $("#form1").hide()
      $("#fullD").append(`
           <div class="container-fluid">
    
      
      <div class="col-md-4"> <br/>
        <img id="posterMov" src="./img/nocover.jpg"  alt="${nameM.name}"   width="320px">
      </div>
      
      <div class="col-md-2">
        <h1>#</h1>
      </div>
      <div class="col-md-6">
        <h1 id="nameMov">${nameM.name}</h1>
      </div>
      <div class="col-md-1">

      </div>
      <div class="col-md-2">
        <h3 id="genreMov">${nameM.genre}</h3>
      </div>
      <div class="col-md-2">
        <h3 id="yearMov">Year : ${nameM.year}</h3>
      </div>
      <div class="col-md-2">
        <h3 id="timeMov">Time : ${nameM.time} min</h3>
      </div>

      <div class="col-md-6">
        <h3 id="castMov">Cast : ${nameM.cast}</h3>
      </div>
      <div class="col-md-12"><br/>
      </div>
      <div class="col-md-2">
      </div>
      <div class="col-md-6">
        <iframe width="720px" height="480px" title="YouTube" src="https://www.youtube.com/embed/${nameM.video}"  allowfullscreen id="videoMov">
        </iframe>
      </div>
      
    </div> `)
    })


  });


  $("#addDvd").on("click", function () {
    $("#form1").show()
    $("#list1").show()
    $("#fullD").hide()
    $("#fullD").html("");
    $("#addMovie").show()
    $("#saveEdit").hide()
  });
  $("#movieLibery").on("click", function () {
    $("#list1").show()
    $("#form1").hide()
    $("#fullD").hide()
    $("#fullD").html("");
    $("#addMovie").show()
    $("#saveEdit").hide()
  });
$("#saveEdit").hide()
  $(document).on("click", "#editBtn", function () {
    let pass = 1111;
    let passInput = prompt("Enter Password")
    if (pass == passInput) {
      $("#form1").show()
      $("#saveEdit").show()
      $("#addMovie").hide()
      $("#nMovie").val()
      $("#genre1").val()
      $("#year").val()
      $("#time").val()
      $("#cast").val()
      $("#poster").val()
      $("#video").val()

    } else {
      alert("Wrong Password")
    }
  })
  $(document).on("click", "#delBtn", function () {
    let pass = 1234;
    let passInput = prompt("Enter Password")
    if (pass == passInput) {
      $(this).closest('tr').remove();
     return false;
      alert("Movie Deleted")
    } else {
      alert("Wrong Password")
    }
  })
     
});


