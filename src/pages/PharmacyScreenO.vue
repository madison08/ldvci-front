<template>
    <div>

        <div class="pharmacy-O-contain">

            <div class="container">
              blbl

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
<style lang="css">

/* .pharmacy-banner{
  position: relative;
  z-index: 0;
    padding-top: 30px;
    background-color: green;
    height: 100vh;
} */


.box {
  background-color: #fff;
  border: 1px solid #ddd;
  display: block;
  max-width: 30em;
  margin: 0 auto;
  border-radius: 4px;
}
.box header {
  border-bottom: 1px solid #ddd;
  padding: 0.5em 1em;
  margin-bottom: 1em;
}
.box .content {
  padding: 1em;
}

.btn, button {
  color: #fff;
  background-color: #09f;
  border: 1px solid #09f;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
  margin: 0.6em 0.6em 0.6em 0;
  padding: 0.35em 0.7em 0.4em;
  text-decoration: none;
  width: auto;
  position: relative;
  border-radius: 4px;
  user-select: none;
  outline: none;
  -webkit-transition: all, 0.25s, ease-in;
  -moz-transition: all, 0.25s, ease-in;
  transition: all, 0.25s, ease-in;
}
.btn:hover, button:hover {
  background-color: #ddd;
  color: #333;
  -webkit-transition: all, 0.25s, ease-in;
  -moz-transition: all, 0.25s, ease-in;
  transition: all, 0.25s, ease-in;
}
.btn:active, button:active {
  background-color: #ccc;
  box-shadow: 0 !important;
  top: 2px;
  -webkit-transition: background-color, 0.2s, linear;
  -moz-transition: background-color, 0.2s, linear;
  transition: background-color, 0.2s, linear;
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}

form {
  display: table;
}

input {
  border: 2px solid #eee;
  padding: 1em 0.25em;
  width: 96%;
  color: #999;
  border-radius: 4px;
}

.left, .right {
  display: table-cell;
  vertical-align: middle;
}

.left {
  width: 6em;
  min-width: 6em;
  padding-right: 1em;
}
.left img {
  width: 100%;
}

.img-holder {
  display: block;
  /* vertical-align: middle; */
  width: 2em;
  height: 2em;
}
.img-holder img {
  width: 100%;
  max-width: 100%;
}

.file-wrapper {
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  position: relative;
}
.file-wrapper:hover .btn {
  background-color: #33adff !important;
}

.file-wrapper input {
  cursor: pointer;
  font-size: 100px;
  height: 100%;
  filter: alpha(opacity=1);
  -moz-opacity: 0.01;
  opacity: 0.01;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 9;
}

</style>