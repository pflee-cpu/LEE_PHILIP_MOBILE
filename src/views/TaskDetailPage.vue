<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar class="glass-toolbar">
        <ion-buttons slot="start">
          <ion-back-button default-href="/tabs/tasks"></ion-back-button>
        </ion-buttons>
        <ion-title>Task Detail</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding detail-bg">
      <div class="hero-header">
        <div class="hero-title-row">
          <ion-icon :icon="documentTextOutline" class="hero-icon"></ion-icon>
          <h1>Task Detail</h1>
        </div>
        <p>View task information</p>
      </div>
      <transition name="fade-up" appear>
        <ion-card v-if="task" class="detail-card">
          <ion-card-header>
            <ion-card-title>{{ task.name }}</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <div class="detail-row">
              <span class="detail-label">ID</span>
              <span class="detail-value">{{ task.id }}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Status</span>
              <span class="detail-value">
                {{ task.done ? 'Completed' : 'Pending' }}
              </span>
            </div>
          </ion-card-content>
        </ion-card>
        <ion-card v-else class="detail-card">
          <ion-card-content>
            Task not found.
          </ion-card-content>
        </ion-card>
      </transition>
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
  IonBackButton,
  IonIcon
} from '@ionic/vue'
import { documentTextOutline } from 'ionicons/icons'
import { useTaskStore } from '../stores/taskStore'
const route = useRoute()
const taskStore = useTaskStore()
const task = computed(() => {
  const id = Number(route.params.id)
  return taskStore.tasks.find(task => task.id === id)
})
</script>
<style scoped>
.detail-bg {
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
  color: #7c3aed;
}
.hero-header h1 {
  margin: 0;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: -0.6px;
  background: linear-gradient(135deg, #7c3aed, #a78bfa, #60a5fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-header p {
  margin: 8px 0 0;
  color: #6b7280;
  font-size: 14px;
}
.detail-card {
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.52);
  box-shadow: 0 10px 26px rgba(110, 76, 170, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}
.detail-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.58);
  border-radius: 14px;
  padding: 12px 14px;
  margin-bottom: 10px;
}
.detail-label {
  color: #7c3aed;
  font-size: 13px;
  font-weight: 600;
}
.detail-value {
  color: #1f2937;
  font-size: 15px;
  font-weight: 600;
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
</style>