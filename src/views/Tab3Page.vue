<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>⚙️ Settings</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Settings</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-card>
        <ion-card-content>
          <h2>Taskflow App</h2>
          <p>This is a simple Ionic Vue task manager app.</p>
          <p>Total Tasks: {{ totalCount }}</p>
          <p>Completed Tasks: {{ doneCount }}</p>
          <p>Pending Tasks: {{ pendingCount }}</p>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent
} from '@ionic/vue'
import { useTaskStore } from '../stores/taskStore'
const taskStore = useTaskStore()
const { totalCount, doneCount, pendingCount } = storeToRefs(taskStore)
</script>