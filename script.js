$(document).ready(function () {
$("#addDvd").on("click",function(){
    $("#section").append(`
    <label class="font-color">Number of DvD: &nbsp;</label><input type="text" style="width: 35px" id="numOfDvd">
    &#360;<button type="button" class="btn btn-primary" id="addMovie">Add Movie</button>
    &#360;<button type="button" class="btn btn-danger" id="save">Save</button>`)
})
$(document).on("click","#addMovie", function(){
    $("#section").append(`<form id="form1">
    <label class="font-color" >Name of movie:&nbsp; </label><input type="text" id="nMovie">
    <select name="sostojki" class="genre" id="genre1">
        <option id="default" selected disabled="" >
			<label for="default">Genre</label>
		 </option>>
		<option value="Thriller" >Thriller</option>
		<option value="Action">Action</option>
		<option value="Horror">Horror</option>
        <option value="Comedy">Comedy</option>
        <option value="Romacne">Romacne</option>
        <option value="Drama">Drama</option>
        <option value="Musical">Musical</option>
        <option value="Western">Western</option>
        <option value="Adventure">Adventure</option>
        <option value="Animation">Animation</option>
        <option value="Sci-fi">Sci-Fi</option>          
	</select>
    <label class="font-color">Year:&nbsp; </label><input type="number" id="year">
    <label class="font-color">Time:&nbsp; </label><input type="number" id="time"><label class="font-color">Min.</label>.
    <br/>
     <br/>
    <label class="font-color" >Cast : &nbsp; </label>  <input type="text" id="cast">
    <br/>
     <br/>

    <label class="font-color">Add Poster of the movie :</label><input type="file" id="poster">
     <br/>
      <br/>
    <label class="font-color">Add video trailer:&nbsp;</label><input type="url" id="video">
     <br/> 
     <br/>
    </form>`)
})

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
$(document).on("click","#save", function(){
    let numberM =$("#numOfDvd").val()
    let nameM = $("#nMovie").val();
    let genreM = $("#genre1").val();
    let yearM = $("#year").val();
    let timeM = $("#time").val();
    let castM = $("#cast").val();
    let posterM = $("#poster").val();
    let videoM = $("#video").val();

    movie = new Movie(numberM,nameM,genreM,yearM,timeM,castM,posterM,videoM)
    console.log(movie)
    $("#list1").append(`
       <tr> 
       <td>${movie.number}</td>
       <td>${movie.name}</td>
       <td>${movie.genre}</td>
       <td>${movie.year}</td>
       <td>${movie.time}</td>  
       </tr>`)
       $( "input:reset" )
})

})