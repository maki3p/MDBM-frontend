$(document).ready(function () {
$("#addDvd").on("click",function(){
    $("#section").append(`
    <label class="font-color">Number of DvD <br/></label><input type="text" style="width: 35px">
    <button type="button" class="btn btn-primary" id="addMovie">Add Movie</button`)
})
$(document).on("click","#addMovie", function(){
    $("#section").append(`<form>
    <label>Name of movie</label><input type="text"></input>
    </form>`)
})

})