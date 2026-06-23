<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>✅ Completed</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Completed</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list v-if="completedTasks.length > 0">
        <ion-item v-for="task in completedTasks" :key="task.id">
          <ion-icon slot="start" :icon="checkmarkDone" color="success"></ion-icon>
          <ion-label style="text-decoration: line-through;">
            {{ task.name }}
          </ion-label>
        </ion-item>
      </ion-list>
      <ion-card v-else>
        <ion-card-content class="ion-text-center">
          No completed tasks yet.
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonCard,
  IonCardContent,
  IonIcon
} from '@ionic/vue'
import { checkmarkDone } from 'ionicons/icons'
import { useTaskStore } from '../stores/taskStore'
const taskStore = useTaskStore()
const completedTasks = computed(() =>
  taskStore.tasks.filter(task => task.done)
)
</script>