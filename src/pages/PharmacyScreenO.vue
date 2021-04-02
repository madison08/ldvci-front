<template>
    <div>

        <div class="pharmacy-banner">

            <div class="container text-center">

                <div class="box">
                    
                    <div class="content">

                        <form id="form1" runat="server">
                        <div class="left">
                        <img id="img-uploaded" src="http://placehold.it/350x350" alt="your image" />
                        </div>
                        <div class="right">
                            <input type="text" class="img-path" placeholder="">
                        <span class="file-wrapper">
                        <input type="file" accept="image/" name="photo" id="imgInp" class="uploader" />
                        <!-- <span class="btn btn-large btn-alpha">Upload Image</span> -->
                        </span>
                        </div>
                        </form>
                    </div>
                </div>

            </div>

        </div>

    </div>
</template>
<script>
import $ from 'jquery'
    export default{
        name: 'PharmacyScreenO',


        mounted(){
            

var SITE = SITE || {};

SITE.fileInputs = function() {
  var $this = $(this),
      $val = $this.val(),
      valArray = $val.split('\\'),
      newVal = valArray[valArray.length-1],
      $button = $this.siblings('.btn'),
      $fakeFile = $this.siblings('.file-holder');
  if(newVal !== '') {
    $button.text('Photo Chosen');
    if($fakeFile.length === 0) {
      $button.after('<span class="file-holder">' + newVal + '</span>');
    } else {
      $fakeFile.text(newVal);
    }
  }
};


$('.file-wrapper input[type=file]').bind('change focus click', SITE.fileInputs);

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    var tmppath = URL.createObjectURL(event.target.files[0]);

    reader.onload = function (e) {
      $('#img-uploaded').attr('src', e.target.result);
      $('input.img-path').val(tmppath);
    }

    reader.readAsDataURL(input.files[0]);
  }
}

$(".uploader").change(function(){
  readURL(this);
});


        }
    }
</script>
<style>
/* .pharmacy-banner{
  position: relative;
  z-index: 0;
    padding-top: 30px;
    background-color: green;
    height: 100vh;
} */
    #img-uploaded{
        max-height: 500px;
        max-width: 500px;
    }
    .box{
      position: relative;
      z-index: 99;
        border: 1px solid red;
        display: inline-block;
        margin: 0 auto;
    }

</style>