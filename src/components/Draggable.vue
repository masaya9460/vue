<template>
  <ul id="app">
    <button @click="doAdd">追加</button>
    <draggable v-model="items">
      <li v-for="item in items" :key="item.no">
        {{item.name}}-(No.{{item.no}})
        <span class="del" @click="doDelete(item)">[削除]</span> 
      </li>
    </draggable>
  </ul>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  name: 'Draggable',
  components: {
    draggable,
  },
  data() {
    return {
      items:[
        {no:1, name:'キャベツ', categoryNo:'1'},
        {no:2, name:'ステーキ', categoryNo:'2'},
        {no:3, name:'リンゴ', categoryNo:'3'}
      ],
      newNo: ''
    }
  },
  methods: {
    /**
     * リストに追加
     */
    doAdd() {
      let no = 1
      if(this.items.length > 0){
        no = Math.max.apply(null, this.items.map(item => item.no)) + 1
      }
      this.newNo = this.newNo < no ? no : this.newNo
      this.items.push(
        {
          no: this.newNo,
          name: '追加リスト' + this.newNo,
          categoryNo: '' + this.newNo
        }
      )
    },
    /**
     * リストから削除
     */
    doDelete(item) {
      this.items = this.items.filter(l => l !== item)
    }
  }
}
</script>

<style>
.app {
  padding: 15px;
}

.box {
  width: 50%;
  float: left;
  padding: 20px 0;
}
#box1 {
  background-color: #fdd;
}
#box2 {
  background-color: #ddf;
}

li {
  cursor: pointer;
  padding: 10px;
  border: solid #ddd 1px;
  background-color: #fff;
}
.del {
  color: #f00;
}
</style>