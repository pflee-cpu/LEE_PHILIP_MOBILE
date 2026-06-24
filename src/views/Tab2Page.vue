<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar class="glass-toolbar">
        <ion-title>Completed</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding completed-bg">
      <div class="hero-header">
        <div class="hero-title-row">
          <ion-icon :icon="checkmarkDoneCircle" class="hero-icon"></ion-icon>
          <h1>Completed Tasks</h1>
        </div>
        <p>Tasks you’ve already finished</p>
      </div>
      <transition name="fade-up" appear>
        <ion-card v-if="completedTasks.length === 0" class="empty-card">
          <ion-card-content class="ion-text-center">
            No completed tasks yet.
          </ion-card-content>
        </ion-card>
      </transition>
      <ion-list class="completed-list">
        <transition-group name="task">
          <ion-item
            v-for="task in completedTasks"
            :key="task.id"
            class="completed-item"
            lines="none"
          >
            <ion-icon slot="start" :icon="checkmarkDone" color="success"></ion-icon>
            <ion-label class="completed-label">
              {{ task.name }}
            </ion-label>
          </ion-item>
        </transition-group>
      </ion-list>
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
import { checkmarkDone, checkmarkDoneCircle } from 'ionicons/icons'
import { useTaskStore } from '../stores/taskStore'
const taskStore = useTaskStore()
const completedTasks = computed(() =>
  taskStore.tasks.filter(task => task.done)
)
</script>
<style scoped>
.completed-bg {
  --background: linear-gradient(180deg, #ece7ff 0%, #f8f6ff 48%, #eef2ff 100%);
}
.glass-toolbar {
  --background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}
.hero-header {
  padding: 10px 4px 18px;
}
.hero-title-row {
  display: flex;
  align-items: center;
  gap: 10px;
}
.hero-icon {
  font-size: 32px;
  color: #16a34a;
}
.hero-header h1 {
  margin: 0;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: -0.6px;
  background: linear-gradient(135deg, #16a34a, #4ade80, #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-header p {
  margin: 8px 0 0;
  color: #6b7280;
  font-size: 14px;
}
.empty-card {
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.45);
  box-shadow: 0 10px 24px rgba(110, 76, 170, 0.08);
  color: #7c3aed;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  margin-bottom: 20px;
}
.completed-list {
  background: transparent;
  padding-bottom: 10px;
}
.completed-item {
  --background: rgba(255, 255, 255, 0.62);
  --border-radius: 20px;
  margin-bottom: 12px;
  box-shadow: 0 8px 20px rgba(110, 76, 170, 0.08);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}
.completed-label {
  text-decoration: line-through;
  color: #6b7280;
  font-size: 15px;
}
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.35s ease;
}
.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.task-enter-active,
.task-leave-active {
  transition: all 0.25s ease;
}
.task-enter-from,
.task-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>