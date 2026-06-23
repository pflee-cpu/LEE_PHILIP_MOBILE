<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>📝 Tasks</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tasks</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-card>
        <ion-card-content class="ion-text-center">
          <p>Total: {{ totalCount }}
          Done: {{ doneCount }}
          Pending: {{ pendingCount }}</p>
        </ion-card-content>
      </ion-card>
      <ion-item>
        <ion-input
          v-model="newTaskName"
          placeholder="New task..."
          @keyup.enter="handleAdd"
        />
        <ion-button class="handleAdd" expand="block"> 
          Add Task 
        </ion-button>
         
      </ion-item>
      <ion-list>
        <ion-item v-for="task in tasks" :key="task.id">
          <ion-checkbox
            slot="start"
            :checked="task.done"
            @ionChange="toggleTask(task.id)"
          />
          <ion-label :style="{ textDecoration: task.done ? 'line-through' : 'none' }">
            {{ task.name }}
          </ion-label>
          <ion-button color="danger" fill="clear" @click="removeTask(task.id)">
            <ion-icon :icon="trash"></ion-icon>
          </ion-button>
        </ion-item>
      </ion-list>
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button @click="handleAdd">
          <ion-icon :icon="add" />
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>



<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
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
  IonCardContent,
  
} from '@ionic/vue'
import { add, trash } from 'ionicons/icons'
import { useTaskStore } from '../stores/taskStore'
const taskStore = useTaskStore()
const { tasks, totalCount, doneCount, pendingCount } = storeToRefs(taskStore)
const { addTask, toggleTask, removeTask } = taskStore
const newTaskName = ref('')
function handleAdd() {
  addTask(newTaskName.value)
  newTaskName.value = ''
}
</script>

<style>

.handleAdd {
  white-space: nowrap;
  width: max-content;
  min-width: 80px;
}




</style>