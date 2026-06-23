import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
interface Task {
  id: number
  name: string
  done: boolean
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
  function addTask(name: string) {
    if (!name.trim()) return
    tasks.value.push({
      id: nextId.value++,
      name: name.trim(),
      done: false
    })
  }
  function toggleTask(id: number) {
    const task = tasks.value.find(task => task.id === id)
    if (task) {
      task.done = !task.done
    }
  }
  function removeTask(id: number) {
    tasks.value = tasks.value.filter(task => task.id !== id)
  }
  return {
    tasks,
    totalCount,
    doneCount,
    pendingCount,
    addTask,
    toggleTask,
    removeTask
  }
})