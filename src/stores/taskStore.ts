import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { Preferences  } from '@capacitor/preferences'
interface Task {
  id: number
  name: string
  done: boolean
  photo?: string
}
export const useTaskStore = defineStore('tasks', () => {
  const tasks = ref<Task[]>([
    { id: 1, name: 'Test 1', done: false },
    { id: 2, name: 'Test 2', done: true },
    { id: 3, name: 'Test 3', done: false }
  ])
  const nextId = ref(4)
  const totalCount = computed(() => tasks.value.length)
  const doneCount = computed(() => tasks.value.filter(task => task.done).length)
  const pendingCount = computed(() => tasks.value.filter(task => !task.done).length)

async function saveTasks () {
  await Preferences.set({
    key: 'tasks',
    value: JSON.stringify(tasks.value)
  })
}

async function loadTasks() {
  const { value } = await Preferences.get ({ key: 'tasks'})
  if (value) {
    tasks.value = JSON.parse(value)
    const maxID =
      tasks.value.length > 0
        ? Math.max(...tasks.value.map(task => task.id))
        :0
      nextId.value = maxID + 1
    }
  
}
  async function addTask(name: string) {
    if (!name.trim()) return
    tasks.value.push({
      id: nextId.value++,
      name: name.trim(),
      done: false
    })
    await saveTasks()
  }
 async function toggleTask(id: number) {
    const task = tasks.value.find(task => task.id === id)
    if (task) {
      task.done = !task.done
      await saveTasks()
    }
  }
  async function removeTask(id: number) {
    tasks.value = tasks.value.filter(task => task.id !== id)
    await saveTasks()
  }
 async function addPhotoToTask(id: number, path: string) {
    const task = tasks.value.find(task => task.id === id)
    if (task) {
      task.photo = path
      await saveTasks()
    }
  }
  return {
    tasks,
    totalCount,
    doneCount,
    pendingCount,
    addTask,
    toggleTask,
    removeTask,
    addPhotoToTask,
    saveTasks,
    loadTasks
  }
}
)