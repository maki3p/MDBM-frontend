$(document).ready(function () {
$("#addDvd").on("click",function(){
    $("#section").append(`
    <label class="font-color">Number of DvD: &nbsp;</label><input type="text" style="width: 35px">
    &#360;<button type="button" class="btn btn-primary" id="addMovie">Add Movie</button`)
})
$(document).on("click","#addMovie", function(){
    $("#section").append(`<form>
    <label class="font-color" >Name of movie:&nbsp; </label><input type="text">
    <select name="sostojki" class="genre">
        <option id="default" selected disabled="" >
			<label for="default">Genre</label>
		 </option>>
		<option value="thriller" >Thriller</option>
		<option value="action">Action</option>
		<option value="horror">Horror</option>
        <option value="comedy">Comedy</option>
        <option value="romacne">Romacne</option>
        <option value="drama">Drama</option>
        <option value="musical">Musical</option>
        <option value="western">Western</option>
        <option value="adventure">Adventure</option>
        <option value="animation">Animation</option>
        <option value="scifi">Sci-Fi</option>          
	</select>
    <label class="font-color">Year:&nbsp; </label><input type="number">
    <label class="font-color">Time:&nbsp; </label><input type="number"><label class="font-color">Min.</label>.
    <br/>
    <label class="font-color" >Cast : &nbsp; </label>  <input type="text">&nbsp;<input type="text">&nbsp;<input type="text"><br/>
    <label class="font-color">Add Poster of the movie :</label><input type="file">
    <label class="font-color">Add video trailer:&nbsp;</label><input type="url">
    </form>`)
})

})