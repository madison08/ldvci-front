<template>
    <div class="notfound">
        
            <!-- ...:::: Start Breadcrumb Section:::... -->
    <div class="breadcrumb-section">
        <div class="breadcrumb-wrapper" style="margin-bottom: 10px">
            <div class="container">
                <div class="row">
                    <div class="col-12 d-flex justify-content-between justify-content-md-between  align-items-center flex-md-row flex-column">
                        <h3 class="breadcrumb-title"><img height="70" src="assets/images/logo/logo.png" alt=""></h3>
                        <div class="breadcrumb-nav">
                            <nav aria-label="breadcrumb">
                                <ul>
                                    <li><router-link to="/">Acceuil</router-link></li>
                                    <li class="active" aria-current="page">Page introuvable</li>
                                     <!-- <input type="file" accept="image/*"> -->

                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> <!-- ...:::: End Breadcrumb Section:::... -->

    <!-- ...:::: Start Error Section :::... -->
    <div class="error-section">
        <div class="container">
            <div class="row">
                <div class="error_form" style="margin-bottom: 40px">
                    <h1>404</h1>
                    <h4>Oups! PAGE NON TROUVABLE</h4>
                    <p>Désolé mais la page que vous recherchez n'existe pas</p>
                    <div class="row">
                        <div class="col-10 offset-1 col-md-6 offset-md-3">
                            <!-- <div class="default-search-style d-flex">
                                <input class="default-search-style-input-box border-around border-right-none" type="search" placeholder="Search entire store here ..." required>
                                <button class="default-search-style-input-btn" type="submit"><i class="icon-search"></i></button>
                            </div> -->
                            <router-link to="/">Retour a l'acceuil</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> <!-- ...:::: End Error Section :::... -->


    </div>
</template>
<script>
    export default{
        name: 'NotFound'
    }
</script>