<template>
    <div>

        <div class="pharmacy-O-contain">

            <div class="container">

              <div class="center">
                <div class="form-input">
                  <label for="fileIn">Photo de l'ordonnance</label>
                  <input type="file" id="fileIn" accept="image/*" @change="showPreview">

                  <div class="preview">
                    <img id="fileIn-prev" src="" alt="">
                  </div>
                </div>

                
              </div>

            </div>

        </div>

    </div>
</template>
<script>
// import $ from 'jquery'
    export default{
        name: 'PharmacyScreenO',


        methods:{
          showPreview(e){
            if(e.target.files.length > 0){
              var src = URL.createObjectURL(e.target.files[0]);
              var preview = document.getElementById('fileIn-prev');
              preview.src = src;
              preview.style.display = "block";
              console.log(e)
            }else{
              alert('null')
            }
          }
        },


        mounted(){


        }
    }
</script>
<style lang="css">


.pharmacy-O-contain .center{
  /* height: 50vh; */
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-input{
  width: 500px;
  padding: 20px;
  background: #fff;
  border: 2px solid #000;
}

.form-input input{
  display: none;
}

.form-input label{
  text-align: center;
  display: block;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #333;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  /* border-radius: 10px; */
  cursor: pointer;
}

.preview img{
  width: 100%;
  display: none;
  margin-top: 10px;
}

</style>