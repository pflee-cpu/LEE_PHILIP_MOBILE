<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/tabs/tasks"></ion-back-button>
                </ion-buttons>
                <ion-title>Task Detail</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-card v-if="task">
                <ion-card-header>
                    <ion-card-title>{{  task.name  }}</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    <p><strong>ID:</strong> {{ task.id }}</p>
                    <p><strong>Status: </strong>{{ task.done ? 'Completed' : 'Pending' }}</p>
                </ion-card-content>
            </ion-card>
            <ion-card v-else>
                <ion-card-content>
                    Task not found.
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButtons,
    IonBackButton
} from '@ionic/vue'
import { useTaskStore  } from '../stores/taskStore'

const route = useRoute()
const taskStore = useTaskStore()
const task = computed (() =>  {
    const id = Number(route.params.id)
    return taskStore.tasks.find(task => task.id === id)
})

</script>
