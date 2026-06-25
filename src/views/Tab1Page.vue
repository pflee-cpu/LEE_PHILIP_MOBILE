<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar class="glass-toolbar">
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding tasks-bg">
      <div class="hero-header">
        <div class="hero-title-row">
          <ion-icon :icon="listCircle" class="hero-icon"></ion-icon>
          <h1>My Tasks</h1>
        </div>
        <p>Stay organized and productive</p>
      </div>
      <transition name="fade-up" appear>
        <ion-card class="stats-card">
          <ion-card-content>
            <div class="stats-grid">
              <div class="stat-box">
                <span class="stat-label">Total</span>
                <span class="stat-value">{{ totalCount }}</span>
              </div>
              <div class="stat-box">
                <span class="stat-label">Done</span>
                <span class="stat-value">{{ doneCount }}</span>
              </div>
              <div class="stat-box">
                <span class="stat-label">Pending</span>
                <span class="stat-value">{{ pendingCount }}</span>
              </div>
            </div>
          </ion-card-content>
        </ion-card>
      </transition>
      <transition name="fade-up" appear>
        <ion-item class="add-task-item" lines="none">
          <ion-input
            v-model="newTaskName"
            placeholder="Add a new task..."
            @keyup.enter="handleAdd"
          />
          <ion-button class="handleAdd" @click="handleAdd">
            Add
          </ion-button>
        </ion-item>
      </transition>
      <transition name="fade-up" appear>
        <ion-card v-if="tasks.length === 0" class="empty-card">
          <ion-card-content class="ion-text-center">
            No tasks yet. Add a Task!
          </ion-card-content>
        </ion-card>
      </transition>
      <ion-list class="task-list">
        <transition-group name="task">
          <ion-item
            v-for="task in tasks"
            :key="task.id"
            class="task-item"
            lines="none"
          >
            <ion-checkbox
              slot="start"
              :checked="task.done"
              @ionChange="toggleTask(task.id)"
            />
            <ion-label
              @click="goToDetail(task.id)"
              :style="{
                textDecoration: task.done ? 'line-through' : 'none',
                cursor: 'pointer'
              }"
            >
              <div class="task-label-wrap">
                <span>{{ task.name }}</span>
                <img v-if="task.photo" :src="task.photo" class="task-thumb" />
              </div>
            </ion-label>
            <ion-button color="danger" fill="clear" @click="removeTask(task.id)">
              <ion-icon :icon="trash"></ion-icon>
            </ion-button>
          </ion-item>
        </transition-group>
      </ion-list>
      <ion-fab vertical="bottom" horizontal="end" slot="fixed" class="task-fab">
        <ion-fab-button @click="handleAdd">
          <ion-icon :icon="add" />
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonCheckbox,
  IonFab,
  IonFabButton,
  IonIcon,
  IonInput,
  IonCard,
  IonCardContent
} from '@ionic/vue'
import { add, trash, listCircle } from 'ionicons/icons'
import { useTaskStore } from '../stores/taskStore'
const taskStore = useTaskStore()
const router = useRouter()
const { tasks, totalCount, doneCount, pendingCount } = storeToRefs(taskStore)
const { addTask, toggleTask, removeTask } = taskStore
const newTaskName = ref('')
function handleAdd() {
  addTask(newTaskName.value)
  newTaskName.value = ''
}
function goToDetail(id: number) {
  router.push(`/tabs/tasks/${id}`)
}
</script>
<style scoped>
.tasks-bg {
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
  font-size: 32px;
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
.stats-card,
.add-task-item,
.empty-card,
.task-item {
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}
.stats-card {
  border-radius: 24px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.42);
  box-shadow: 0 12px 30px rgba(110, 76, 170, 0.12);
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.stat-box {
  background: rgba(255, 255, 255, 0.58);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 18px;
  padding: 14px 10px;
  text-align: center;
}
.stat-label {
  display: block;
  font-size: 12px;
  color: #6d28d9;
  margin-bottom: 5px;
  font-weight: 600;
}
.stat-value {
  font-size: 19px;
  font-weight: 700;
  color: #1f2937;
}
.add-task-item {
  --background: rgba(255, 255, 255, 0.55);
  --border-radius: 20px;
  margin-bottom: 20px;
  box-shadow: 0 10px 24px rgba(110, 76, 170, 0.1);
}
.handleAdd {
  min-width: 76px;
  --border-radius: 14px;
  font-weight: 600;
}
.empty-card {
  border-radius: 20px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.45);
  box-shadow: 0 8px 20px rgba(110, 76, 170, 0.08);
  color: #7c3aed;
}
.task-list {
  background: transparent;
  padding-bottom: 12px;
}
.task-item {
  --background: rgba(255, 255, 255, 0.62);
  --border-radius: 20px;
  margin-bottom: 12px;
  box-shadow: 0 8px 20px rgba(110, 76, 170, 0.08);
}
ion-label {
  font-size: 15px;
  color: #1f2937;
}
ion-checkbox {
  --checkbox-background-checked: #7c3aed;
  --border-color-checked: #7c3aed;
}
.task-fab {
  margin-bottom: 82px;
}
ion-fab-button {
  --background: #7c3aed;
  --background-activated: #6d28d9;
  --box-shadow: 0 10px 24px rgba(124, 58, 237, 0.35);
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
.task-label-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.task-thumb {
  width: 42px;
  height: 42px;
  object-fit: cover;
  border-radius: 10px;
  flex-shrink: 0;
}


</style>