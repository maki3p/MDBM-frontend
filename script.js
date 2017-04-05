$(document).ready(function () {

class Movie{
    constructor(number,name,genre,year,time,cast,poster,video){
        this.number = number,
        this.name= name,
        this.genre = genre,
        this.year = year,
        this.cast = cast,
        this.poster = poster,
        this.video = video,
        this.time = time
    }
}
$(document).on("click","#addMovie", function(){
    let numberM =$("#numOfDvd").val()
    let nameM = $("#nMovie").val();
    let genreM = $("#genre1").val();
    let yearM = $("#year").val();
    let timeM = $("#time").val();
    let castM = $("#cast").val();
    let posterM = $("#poster").val();
    let videoM = $("#video").val();

    numberM = new Movie(numberM,nameM,genreM,yearM,timeM,castM,posterM,videoM)
  
    $("#list1").prepend(`
       <tr> 
       <td>${numberM.number}</td>
       <td><a href="#" id="oks">${numberM.name}</a></td>
       <td>${numberM.genre}</td>
       <td>${numberM.year}</td>
       <td>${numberM.time}</td>  
       </tr>`)
       document.forms.form1.reset();     
     $("#oks").on("click", function(){
         $("#fullD").show()
         $("#list1").hide();
         $("#form1").hide()
           $("#fullD").append(`
           <div class="container-fluid">
      <div class="col-md-4">
        <img src="./poster/betman.jpg" alt="" id="posterMov" width="320px">
      </div>
      <div class="col-md-2">
        <h1>#${numberM.number}</h1>
      </div>
      <div class="col-md-6">
        <h1 id="nameMov">${numberM.name}</h1>
      </div>
      <div class="col-md-1">

      </div>
      <div class="col-md-2">
        <h3 id="genreMov">${numberM.genre}</h3>
      </div>
      <div class="col-md-2">
        <h3 id="yearMov">Year : ${numberM.year}</h3>
      </div>
      <div class="col-md-2">
        <h3 id="timeMov">Time : ${numberM.time} min</h3>
      </div>

      <div class="col-md-6">
        <h3 id="castMov">Cast : ${numberM.cast}</h3>
      </div>
      <div class="col-md-12"><br/>
      </div>
      <div class="col-md-2">
      </div>
      <div class="col-md-6">
        <iframe width="720px" height="480px" src="https://www.youtube.com/embed/XGSy3_Czz8k" id="videoMov">
        </iframe>

      </div>
    </div>
           `)
           
       })
});
    
})
$("#addDvd").on("click", function(){
    $("#form1").show()
    $("#fullD").hide()
    $("#fullD").html("");
})
$("#movieLibery").on("click", function(){
    $("#list1").show()
    $("#form1").hide()
    $("#fullD").hide()
    $("#fullD").html("");
})




