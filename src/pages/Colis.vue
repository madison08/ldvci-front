<template>
    <div>


        <div class="colis-banner">
            
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <h1 class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus adipisci commodi.</h1>
                    </div>
                        
                    <div class="col-lg-6">
                        <div class="contact-form" style="opcaity: 0.2;">
                            <form action="">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="default-form-box mb-15">
                                            <label for="contact-name">Lieu de reception *</label>
                                            <select class="form-select selectl_location" aria-label="Default select example">
                                            <option selected>Commune</option>
                                            <option value="1">Plateau</option>
                                            <option value="2">Riviera</option>
                                            <option value="3">Yopougon</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="default-form-box mb-15">
                                            <label for="contact-name">Lieu de reception *</label>
                                            <select class="form-select selectl_location" aria-label="Default select example">
                                            <option selected>Commune</option>
                                            <option value="1">Plateau</option>
                                            <option value="2">Riviera</option>
                                            <option value="3">Yopougon</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="default-form-box mb-20">
                                            <label for="contact-subject">Tarif de livraison</label>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="default-form-box mb-20">
                                            <label for="contact-message">Designation de votre colis *</label>
                                            <textarea id="contact-message" cols="5" rows="5"></textarea>
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
            </div>
        </div>


    </div>
</template>
<script>
    export default{

    }
</script>
<style>
    .colis-banner{
        /* width: 10 */
        height: 100vh;
        padding-top: 70px;
        padding-bottom: 50px;
        /* background-color: #89898A; */
        background-image: url(../assets/delivery.jpg);
        background-size: cover;
    }
    .colis-banner h1{
        color: #fff;
        font-size: 45px;
        font-weight: bold;
    }
    .selectl_location:focus{
        border: 1px solid #EE521F;
        box-shadow: none;
    }

    @media (max-width: 768px){
        .colis-banner h1{
            font-size: 30px;
        }
    }
</style>