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
import { mapActions, mapGetters } from 'vuex';
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

    computed:{
        ...mapGetters('users', {
            userbyId: 'userbyId'
        }),
    },

    methods:{
        ...mapActions('users', {
            saveuser: 'saveuser',
            updateuser: 'updateuser'
        }),

        saveorupdateusers(){
            if(this.routeId == 0){
                this.saveuser(this.userInfo);
            } else {
                this.updateuser(this.userInfo);
            }
            this.$router.push("/users");
        }
    },
    ionViewDidEnter(){
        if(this.routeId === 0){
            this.pageTitle = 'Add New User';
            this.btnText = "Add";
            this.userInfo = {
                id: 0,
                name: "",
                email: ""
            }
        } else {
            this.pageTitle = 'Update User';
            this.btnText = "Update";
            this.userInfo = this.userbyId(this.routeId);
        }
    }
}
</script>