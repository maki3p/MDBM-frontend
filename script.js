$(document).ready(function () {
$("#addDvd").on("click",function(){
    $("#section").append(`
    <label class="font-color">Number of DvD: &nbsp;</label><input type="text" style="width: 35px">
    &#360;<button type="button" class="btn btn-primary" id="addMovie">Add Movie</button`)
})
$(document).on("click","#addMovie", function(){
    $("#section").append(`<form>
    <label class="font-color" >Name of movie: <br/></label><input type="text" class="form-control">
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
	</select><br/>
    <label class="font-color" >Cast : <br/></label>  <input type="text">
    </form>`)
})

})