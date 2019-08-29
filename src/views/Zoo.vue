<template lang="html">
  <div class="zoo">
    <h1>This is a zoo page</h1>
    <v-btn small color="normal" @click="addItemDailogShow = true"><font face="微軟正黑體" size="3">新增</font></v-btn>
    <app-save/> <!-- 測試按鈕放在Save.vue -->
    <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
    <v-data-table :headers="headers" :items="this.$store.state.animals" :search="search">
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.level }}</td>
        <td>{{ props.item.description }}</td>
        <td>
          <v-btn small color="normal" @click="editItemDailogShow = true; clickEditItem(props.item)"><font face="微軟正黑體" size="3">編輯</font></v-btn>
          <v-btn small color="error" @click="delconfirmDialog = true; tempDelItem = props.item"><font face="微軟正黑體" size="3">刪除</font></v-btn>
        </td>
      </template>
    </v-data-table>

    <!-- 新增視窗 -->
    <v-dialog v-model="addItemDailogShow" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">新增動物</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6>
                <v-text-field label="名字*" required v-model="newItem.name"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="[1, 2, 3, 4, 5]"
                  label="等級*"
                  required
                  v-model="newItem.levelSelected"
                ></v-select>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="說明" hint="說明欄位，非必填" v-model="newItem.description"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*號為必填欄位</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="normal" flat @click="addItemDailogShow = false">關閉</v-btn>
          <v-btn color="info" flat @click="addItemDailogShow = false; addItem(newItem)">確定</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 編輯視窗 -->
    <v-dialog v-model="editItemDailogShow" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">編輯動物</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6>
                <v-text-field label="名字*" required v-model="editItem.name"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="[1, 2, 3, 4, 5]"
                  label="等級*"
                  required
                  v-model="editItem.levelSelected"
                ></v-select>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="說明" hint="說明欄位，非必填" v-model="editItem.description"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*號為必填欄位</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="normal" flat @click="editItemDailogShow = false">關閉</v-btn>
          <v-btn color="info" flat @click="editItemDailogShow = false; submitEditItem(editItem)">確定</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 刪除視窗 -->
        <v-dialog
        v-model="delconfirmDialog"
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline">確認刪除</v-card-title>
          <v-card-text>
            你確定要刪除{{tempDelItem.name}}這筆資料嗎？
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              flat="flat"
              @click="delconfirmDialog = false"
            >
              否
            </v-btn>
            <v-btn
              flat="flat"
              @click="delconfirmDialog = false; deleteItem(tempDelItem)"
            >
              是
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import Save from './Save.vue'

export default {
  components: {
    'app-save': Save,
  },
  data: () => ({
    headers: [
      { text: '名字', value: 'name', align: 'center', sortable: false },
      { text: '等級', value: 'level', align: 'center', sortable: false },
      { text: '說明', value: 'description', align: 'center', sortable: false }
    ],
    search: '',
    pagination: {},
    addItemDailogShow: false,
    editItemDailogShow: false,
    delconfirmDialog: false,
    tempDelItem: {},
    newItem: {
      name: '',
      levelSelected: '',
      description: ''
    },
    editItem: {
      name: '',
      levelSelected: '',
      description: ''
    },
  }),

  computed: {
    ...mapState({
    }),
  },

  created () {
    this.initAnimalData();
  },

  methods: {
    ...mapActions([
      'initAnimalData',
      'deleteItem',
      'save',
      'addItem'
    ]),
    /* eslint-disable */
    ...mapMutations([
      // 通常是呼叫action, 比較少直接呼叫mutataion, mutation用來改變值
    ]),
    clickEditItem (item) {
      console.log('item', item)
      console.log('this.editItem', this.editItem)
      this.editItem = item
      this.editItem.levelSelected = item.level
    },
    submitEditItem: (editItem) => {
      console.log('submitEditItem')
      console.log('editItem', editItem)
    },
    clickImg: (aaa) => {
      console.log(aaa)
    }
  }
}
</script>

<style lang='css' scoped>
.zoo {
  margin-left: 30px;
  margin-right: 30px;
}
</style>
