<template>
    <div>

        

          
          <div class="volaille-banner">

        <div class="container">

            <div class="volaille-banner-home-text">

                <h2 class="pt-50 animate__animated animate__bounce">Plusieur choix s'offre a vous</h2>
                <p class="pharmacy-subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis voluptatibus aut, iste rerum sit, nesciunt porro similique, suscipit magni optio veritatis pariatur dignissimos nam officiis!</p>
            </div>


            


            <div class="page-content">

                <div class="bref-explain">
                    Vous avez le libre choix parmi nos poulets <span>Africains</span>, <span>Pintades</span>, <span>Poulets hybride</span>
                </div>

                <div class="btn btn-success">
                    passer une commande
                </div>

            </div>

          </div>


        </div>

    </div>
</template>
<script>
    export default{
        name: 'Pharmacie'
    }
</script>
<style lang="scss">

.volaille-banner{
    background-image: url(../assets/volaille.jpg);
    background-size: cover;
    background-position: bottom;
    /* height: 100vh; */
}
.volaille-banner{


    .volaille-banner-home-text p, .volaille-banner-home-text h2{
        color: #fff;
    }

    .bref-explain{
        span{
            color: #fff;
            font-size: 25px;
            font-weight: bold;
        }
    }


}

</style>