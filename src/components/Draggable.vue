<template>
  <div>
    <ul id="app">
 <button v-on:click="doAdd">追加</button>
 <draggable v-model="myList">
   <li v-for="item in myList" :key="item.no">
       {{item.name}}-(No.{{item.no}})
       <span class="del" v-on:click="doDelete(item)">[削除]</span> 
   </li>
 </draggable>
</ul>
  </div>
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
  computed: {
      myList: {
         get() {
        return this.items;
      },
      set(value) {
        this.items = value;
      }
    }
  },
  methods: {
    doAdd:function(){
      let self = this;
      let no = 0;
      if(self.items.concat().length > 0){
        no =  Math.max.apply(null,self.items.concat().map(function(item){return item.no;})) +1;
        self.newNo = self.newNo < no ? no:self.newNo;
      }
      this.items.push(
        {
          no: this.newNo,
          name:'追加リスト'+ this.newNo,
          categoryNo:''+ self.newNo 
        }
      ); 
    },
    doDelete (item) {
      this.items = this.list.filter(l => l !==item)
    }
  }
}
</script>

<style>
.app {
  padding : 15px;
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
  cursor:pointer;
  padding: 10px;
  border: solid #ddd 1px;
  background-color: #fff;
}
.del {
  color: #f00;
}
</style>