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
           $("#fullD").append(`${numberM.name}`)
       })
});
    
})
$("#addDvd").on("click", function(){
    $("#form1").show()
})
$("#movieLibery").on("click", function(){
    $("#form1").hide()

  
})




