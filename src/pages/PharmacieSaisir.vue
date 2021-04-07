<template>
    <div>


        <div class="container">
            <h3>Entrez vos differents medicaments</h3>

            <!-- {{ medicaments.designation }} -->

            <div v-if="medicaments">

                <div class="btn btn-success" @click="addField">
                Ajouter un medicament
            </div>
            <div class="card mb3" v-for="{ medicament,index} in medicaments" :key="index">
                <span class="text-right">
                    X
                </span>
                <!-- {{ index }} -->
                <div class="med-form">
                    <input type="text" class="form-control" placeholder="designation ..." v-model="medicament.designation">
                    <input type="text" class="form-control" placeholder="nom" v-model="medicament.name">
                </div>
            </div>

            </div>

            
        </div>


    </div>
</template>
<script>
    export default{
        name: 'PharmacieSaisir',

        data(){
            return{
                defaultMed: null,
                medicaments: [
                    {
                        // designation: 'null',
                        // name: 'null'
                    }
                ]
            }
        },

        methods: {
            // addField(){
            //     this.medicaments.push(
            //         {
            //             designation: '',
            //             name: ''
            //         }
            //     )
            // }
        }
    }
</script>