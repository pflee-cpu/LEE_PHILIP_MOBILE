<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" class="custom-tab-bar">
        <ion-tab-button tab="tasks" href="/tabs/tasks">
          <ion-icon aria-hidden="true" :icon="list" />
          <ion-label>Tasks</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="completed" href="/tabs/completed">
          <ion-icon aria-hidden="true" :icon="checkmarkDone" />
          <ion-label>Completed</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="settings" href="/tabs/settings">
          <ion-icon aria-hidden="true" :icon="cog" />
          <ion-label>Settings</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>
<script setup lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet
} from '@ionic/vue'
import { checkmarkDone, cog, list } from 'ionicons/icons'
</script>
<style scoped>
.custom-tab-bar {
  --background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.45);
}
</style>