<template>
    <div>


        <div class="colis-banner">
            
            <div class="container">
                    <h4 class="colis-text">Avec <span>LDV-CI</span> , Faite vous livrer tous vos colis !</h4>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="mt-bg">

                        </div>
                        <!-- <h1 class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus adipisci commodi.</h1> -->
                    </div>
                        
                    <div class="col-lg-6">
                        <div class="contact-form">
                            <form action="">
                                <div class="row">
                                    
                                    <div class="col-lg-12">
                                        <div class="row">
                                            <h4 class="colis-title-bloc">Information client</h4>
                                            <div class="col-lg-6 col-md-6">
                                                <div class="default-form-box mb-15">
                                                    <!-- <label for="contact-name"> Votre Nom </label> -->
                                                    <input type="text" id="contact-name" class="inputColis" placeholder="Ex: Kouadio daniel" required="required">
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6">
                                                <div class="default-form-box mb-15">
                                                    <!-- <label for="contact-name"> Votre numero</label> -->
                                                    <input type="text" id="contact-name" class="inputColis" placeholder="Ex: +225 00 00 00 00" required="required">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="row">
                                                <h4 class="colis-title-bloc">Information fournisseur</h4>
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="default-form-box mb-15">
                                                        <!-- <label for="contact-name"> Votre Nom </label> -->
                                                        <input type="text" id="contact-name" class="inputColis" placeholder="Ex: Kouadio daniel" required="required">
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="default-form-box mb-15">
                                                        <!-- <label for="contact-name"> Votre numero</label> -->
                                                        <input type="text" id="contact-name" class="inputColis" placeholder="Ex: +225 00 00 00 00" required="required">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="row">
                                                <h4 class="colis-title-bloc">Information sur le colis</h4>
                                                
                                                <div class="col-lg-12">
                                                    <div class="default-form-box mb-20">
                                                        <label for="contact-message">Designation de votre colis *</label>
                                                        <textarea id="contact-message" class="inputColis" cols="5" rows="5"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            
                                            <div class="col-lg-4 col-md-4">
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
                                                <div class="col-lg-8 col-md-8">
                                                    <div class="default-form-box mb-15">
                                                        <label for="contact-name"> Preciser le quartier * </label>
                                                        <input type="text" id="contact-name" class="inputColis" placeholder="Ex: Adjame 220 lgts" required="required">
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-12">
                                        <div class="row">
                                            <div class="col-lg-4 col-md-4">
                                            <div class="default-form-box mb-15">
                                                <label for="contact-name">Lieu de livraison *</label>
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
                                                <label for="contact-name"> Preciser le quartier * </label>
                                                <input type="text" id="contact-name" class="inputColis" placeholder="Ex: Yopougon gabriel gare" required="required">
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-12">
                                        <div class="default-form-box mb-20">
                                            <label for="contact-subject">Tarif de livraison *</label>
                                            <span style="color: red;">Ce prix peut etre majoré en fonction du quartier </span>
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
<style lang="scss">
    .colis-banner{
        /* width: 10 */
        /* height: 100vh; */
        padding-top: 90px;
        padding-bottom: 50px;
        /* background-color: #89898A; */
        /* background-image: url(../assets/colis.jpg); */
        background-position: left;
        background-size: contain;
        background-repeat: no-repeat;
        /* background-size: cover; */
    }
    .mt-bg{
        background-image: url(../assets/colis.jpg);
        background-size: cover;
        background-position: center;
        /* border: 1px solid red; */
        width: 100%;
        height: 650px;
    }
    .colis-title-bloc{
        background-color: #a69f9f;
        color: #fff;
        display: inline-block!important;
        font-size: 20px;
    }
    .colis-text{
        width: 70%;
        margin: 0 auto;
        position: relative;
        top: -25px;
        padding-bottom: 40px;
        text-align: center;
        font-style: italic;

        span{
            color: #EE521F;
            font-size: 27px;
            font-weight: bold;

        }
    }
    .inputColis{
        background-color: #fff!important;
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