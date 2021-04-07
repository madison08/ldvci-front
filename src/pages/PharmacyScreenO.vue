<template>
    <div>

        <div class="pharmacy-O-contain">

            <div class="container">

              <div class="center">
                <div class="form-input">
                  <label for="fileIn">Photo de l'ordonnance ou medicaments</label>
                  <input type="file" id="fileIn" accept="image/*" @change="showPreview">

                  <div class="preview">
                    <img id="fileIn-prev" src="" alt="">
                    <div @click="showForm" class="valid">
                      <div class="mt-3 btn btn-dark">
                        confirmer
                      </div>
                    </div>

                    <div class="valid-form">
                      <form action="">
                                <div class="row">
                                    
                                    <div class="col-lg-12">
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6">
                                                <div class="default-form-box mb-15">
                                                    <input type="text" id="contact-name" class="inputColis" placeholder="Nom et prenom" required="required">
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6">
                                                <div class="default-form-box mb-15">
                                                    <input type="text" id="contact-name" class="inputColis" placeholder="contact" required="required">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            
                                            <div class="col-lg-4 col-md-4">
                                                <div class="default-form-box mb-15">
                                                    <select class="form-select selectl_location" aria-label="Default select example">
                                                    <option selected>Commune</option>
                                                    <option value="1">Plateau</option>
                                                    <option value="2">Riviera</option>
                                                    <option value="3">Yopougon</option>
                                                    </select>
                                                </div>
                                                </div>
                                                <div class="col-lg-8 col-md-8">
                                                    <div class="default-form-box mb-15">
                                                        <input type="text" id="contact-name" class="inputColis" placeholder="Quartier" required="required">
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <button class="contact-submit-btn" type="submit">Envoyez</button>
                                    </div>
                                </div>
                            </form>
                    </div>
                  </div>
                </div>
                <div>
                  
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
              // alert('hhhh')

              var validbutton = document.getElementsByClassName('valid');
              console.log(validbutton)
              validbutton[0].style.display = "block"; 
            }
          },

          showForm(){
            var validbutton = document.getElementsByClassName('valid-form');
              console.log(validbutton)
              validbutton[0].style.display = "block"; 
          }


        },


        mounted(){


        }
    }
</script>
<style lang="css">

.valid,.valid-form{
  display: none;
}
.valid{
  margin-bottom: 20px;
}


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

.form-input input#fileIn{
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