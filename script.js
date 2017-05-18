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
    let posterM = $("#poster").val()
    let videoM = $("#video").val();
    let videoYouTube = videoM.substr(videoM.indexOf("=") + 1);
    if(nameM == false){
      alert("Enter Movie Name")
    }else if(numberM == false ){
      alert("Enter a DVD Number")
    }else{
      alert("Successfully Add")
    }

  
    nameM = nameM.toLowerCase().replace(/^[\u00C0-\u1FFF\u2C00-\uD7FF\w]|\s[\u00C0-\u1FFF\u2C00-\uD7FF\w]/g, function(letter) {
    return letter.toUpperCase();   
});
    castM = castM.toLowerCase().replace(/^[\u00C0-\u1FFF\u2C00-\uD7FF\w]|\s[\u00C0-\u1FFF\u2C00-\uD7FF\w]/g, function(letter) {
    return letter.toUpperCase();
});
    nameM = new Movie(numberM, nameM, genreM, yearM, timeM, castM, posterM, videoYouTube);
    movies.push(nameM)
    $("#list1").prepend(`
    
       <tr> 
       <td>${nameM.number}</td>
       <td><a href="#" id="oks">${nameM.name}</a></td>
       <td>${nameM.genre}</td>
       <td>${nameM.year}</td>
       <td>${nameM.time} Min.</td>  
       <td><button type="button" class="btn btn-info" id="editBtn">Edit</button></td>
       <td><button type="button" class="btn btn-danger" id="delBtn">Delete</button></td>
       </tr>
     
       `)
    document.forms.form1.reset();
    $("#oks").on("click", function () {
      $("#fullD").show()
      $("#list1").hide();
      $("#form1").hide()
      $("#fullD").append(`
           <div class="container-fluid">
    
      
      <div class="col-md-4"> <br/>
        <img id="posterMov" src="./poster/betman.jpg"  alt="${nameM.name}"   width="100%">
      </div>
      <div class="col-md-2">
        <h1># ${nameM.number}</h1>
      </div>
      <div class="col-md-6">
        <h1 id="nameMov">${nameM.name}</h1>

      </div>
      <div class="col-md-1">

      </div>
      <div class="col-md-2">
        <h4 id="genreMov">${nameM.genre}</h4>
      </div>
      <div class="col-md-2">
        <h4 id="yearMov">Year : ${nameM.year}</h4>
      </div>
      <div class="col-md-2">
        <h4 id="timeMov">Time : ${nameM.time} Min</h4>
      </div>

      <div class="col-md-6">
        <h4 id="castMov">Cast : ${nameM.cast}</h4>
      </div>
      <div class="col-md-12"><br/>
      </div>
      <div class="col-md-1">
      </div>
      <div class="col-md-10">
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
      return false,
       alert("Movie Deleted")
    } else {
      alert("Wrong Password")
    }
  })

  $('th').click(function () {
    var table = $(this).parents('table').eq(0)
    var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
    this.asc = !this.asc
    if (!this.asc) { rows = rows.reverse() }
    for (var i = 0; i < rows.length; i++) { table.append(rows[i]) }
  })
  function comparer(index) {
    return function (a, b) {
      var valA = getCellValue(a, index), valB = getCellValue(b, index)
      return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.localeCompare(valB)
    }
  }
  function getCellValue(row, index) { return $(row).children('td').eq(index).html() }
$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#upBtn:hidden').stop(true, true).fadeIn();
    } else {
        $('#upBtn').stop(true, true).fadeOut();
    }
});

$("#search").keyup(function() {
    var value = this.value;

    $("table").find("tr").each(function(index) {
        if (!index) return;
        var id = $(this).find("td").first().text();
        $(this).toggle(id.indexOf(value) !== -1);
    });
});
$('#randomMovie').click(function() {

     var count = $('#list1').children().length;
     for (i = 0; i < count; i++) {
    
     }
  
    var randomNum = Math.floor(Math.random() * count);

    // This brings you back up to a range of 1 to 16
    var actualNum = randomNum + 1;

    // Grabs and holds the table cell for that number
    // Example: number 10 would be third row, second column
    var randomtd = $('#board td').eq(randomNum);

    // Calculate and store which row
    // by dividing the generated number by the number of rows, and rounding up
    var whichRow = Math.ceil(actualNum / 4);

    // Calculate and store which column
   // by using modulo to find the remainder of the number divided by the rows
   // If the modulo result is '0', then set it to '4'
    var whichColumn = (actualNum % 4) == 0 ? 4 : (actualNum % 4);

    // Display results in an alert

    alert('theNumber: ' + actualNum + ' row: ' + whichRow + '  column: ' + whichColumn);

   // For fun, and to show that you have the td stored
   // Display the number in the correct td
   // and set the text color to grey, since the table is black
   randomtd.text(actualNum).css({color:'#DDD'});
});


});




