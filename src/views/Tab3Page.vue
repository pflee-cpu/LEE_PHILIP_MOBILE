<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar class="glass-toolbar">
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding settings-bg">
      <div class="hero-header">
        <div class="hero-title-row">
          <ion-icon :icon="settingsOutline" class="hero-icon"></ion-icon>
          <h1>Settings</h1>
        </div>
        <p>App info and task overview</p>
      </div>
      <transition name="fade-up" appear>
        <ion-card class="settings-card">
          <ion-card-content>
            <h2>Taskflow App</h2>
            <p>This is a simple Ionic Vue task manager app.</p>
            <div class="settings-stats">
              <div class="settings-stat">
                <span>Total</span>
                <strong>{{ totalCount }}</strong>
              </div>
              <div class="settings-stat">
                <span>Done</span>
                <strong>{{ doneCount }}</strong>
              </div>
              <div class="settings-stat">
                <span>Pending</span>
                <strong>{{ pendingCount }}</strong>
              </div>
            </div>
          </ion-card-content>
        </ion-card>
      </transition>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonCard,
  IonCardContent,
  IonIcon
} from '@ionic/vue'
import { settingsOutline } from 'ionicons/icons'
import { useTaskStore } from '../stores/taskStore'
const taskStore = useTaskStore()
const { totalCount, doneCount, pendingCount } = storeToRefs(taskStore)
</script>
<style scoped>
.settings-bg {
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
  background: linear-gradient(135deg, #7c3aed, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-header p {
  margin: 8px 0 0;
  color: #6b7280;
  font-size: 14px;
}
.settings-card {
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 10px 24px rgba(110, 76, 170, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}
.settings-card h2 {
  margin-top: 0;
  margin-bottom: 10px;
  color: #6d28d9;
  font-size: 22px;
}
.settings-card p {
  color: #4b5563;
  margin-bottom: 18px;
}
.settings-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.settings-stat {
  background: rgba(255, 255, 255, 0.58);
  border-radius: 16px;
  padding: 14px 10px;
  text-align: center;
}
.settings-stat span {
  display: block;
  font-size: 12px;
  color: #7c3aed;
  margin-bottom: 4px;
}
.settings-stat strong {
  font-size: 18px;
  color: #1f2937;
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