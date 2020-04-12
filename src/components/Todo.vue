<template>
  <div>
    <h1>Todo List</h1>

    <input type="text" v-model="newTask" @keydown.enter="addTask">
    <input type="button" value="追加" @click="addTask">
    <div class="list">
      <draggable element="ul">
        <li v-for="item in list" :key="item.id">
          <span :class="{ complete: item.isComplete }">{{ item.value }}</span>
          <input type="button" value="達成" @click="item.isComplete=true">
          <input type="button" value="削除" @click="deleteTask(item)">
        </li>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  components: {
    draggable,
  },
  data() {
    return {
      list: [
        { id: 1, value: "たまご買う", isComplete: false },
        { id: 2, value: "図書館に本を返す", isComplete: false },
        { id: 3, value: "宅急便を受け取る", isComplete: false }
      ],
      nextId: 0,
      newTask: ""
    }
  } ,
  methods: {
    addTask() {
      if(!this.newTask.trim()) {
        return
      }
      this.list.push({
        id: this.nextId,
        value: this.newTask,
        isComplete: false
      })
      this.newTask = ""
    },
    deleteTask(item) {
      this.list = this.list.filter(l => l !== item)
    }
  }
}
</script>

<style scoped>
.complete {
    text-decoration: line-through;
}
</style>