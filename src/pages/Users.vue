<template>
<master-layout pageTitle="All Users">
    <div>
        <ion-button expand="full" @click="showUsers()">Show Users</ion-button>
        <ion-card v-for="user in allusers" :key="user.id">
            <ion-card-content>
                <ion-card-title>{{user.name}}</ion-card-title>
            </ion-card-content>
            <ion-item>
                <ion-label>Email</ion-label>
                <ion-label>{{user.email}}</ion-label>
            </ion-item>
        </ion-card>
    </div>
</master-layout>
    
</template>

<script>
import {IonButton, IonCard, IonCardContent, IonCardTitle, IonItem, IonLabel} from '@ionic/vue';
import { mapActions, mapGetters } from 'vuex';
export default {
    components: {
        IonButton, IonCard, IonCardContent, IonCardTitle, IonItem, IonLabel
    },

    computed:{
        ...mapGetters('users', {
            allusers:'allusers'
        })
    },

    methods:{
        ...mapActions('users', {
            fetchUsers:'fetchUsers'
        }),

        showUsers(){
            this.fetchUsers()
        }
    }
}
</script>