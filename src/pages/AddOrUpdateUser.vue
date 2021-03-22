<template>
    <master-layout :pageTitle="pageTitle">
        <ion-card v-if="userInfo">
            <ion-item>
                <ion-label position="floating">User Name</ion-label>
                <ion-input v-model="userInfo.name"></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Email</ion-label>
                <ion-input v-model="userInfo.email"></ion-input>
            </ion-item>
            <ion-button expand="full" @click="saveorupdateusers()">{{ btnText }}</ion-button>
        </ion-card>
    </master-layout>
</template>

<script>
import { mapActions } from 'vuex';
import { IonCard, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
export default {
    components: { IonCard, IonItem, IonLabel, IonInput, IonButton  },

    data(){
        return {
            routeId: Number(this.$route.params.id),
            pageTitle: '',
            btnText: "",
            userInfo: null
        }
    },

    mounted(){
        if(this.routeId === 0){
            this.pageTitle = 'Add New User';
            this.btnText = "Add";
            this.userInfo = {
                id: 0,
                name: '',
                email: ''
            }
        } else {
            this.pageTitle = 'Update User';
            this.btnText = "Update";
        }
    },

    methods:{
        ...mapActions('users', {
            saveuser: 'saveuser'
        }),

        saveorupdateusers(){
            if(this.routeId == 0){
                this.saveuser(this.userInfo);
                this.$router.push("/users");
            }
        }
    }
}
</script>