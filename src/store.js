import Vue from 'vue'
import Vuex from 'vuex'
import jsonData from './resource/animalLoadFile.json'

Vue.use(Vuex)

/* eslint-disable */

const state = {
  animals: [],
  delconfirmDialog: false,
  tempDelItem: {}
}

const mutations = {
  setAnimals: (state, animals) => {
    Vue.set(state, 'animals', animals)
  },
  setDelconfirmDialog (state, delconfirmDialog) {
    Vue.set(state, 'delconfirmDialog', delconfirmDialog)
  },
  addItem (state, payload) {
    console.log('addItem step_2')
    console.log('payload', payload)
    state.animals.push(payload)
  },
  deleteItem (state, payload) {
    console.log('deleteItem step_2')
    console.log('state',state)
    console.log('payload',payload)
    const index = this.state.animals.indexOf(payload)
    state.animals.splice(index, 1)
  }

}

const actions = {
  loadJsonData: () => {
  },

  initAnimalData: (context) => {
    console.log('initAnimalData')
    // 宣告
    let animals = []
    
    //取值
    //TODO 目前直接在store.js import json檔, 後續改成用axois

    //塞值
    animals = jsonData
    context.commit('setAnimals', animals)
  },
  deleteItem: (context, item) => {
    console.log('deleteItem step_1')
    console.log('context',context)
    context.commit('deleteItem', item)
  },
  save: (context) => {
    console.log('save')
    console.log('context', context)
  },
  addItem: (context, item) => {
    console.log('addItem step_1')
    console.log('context', context)
    console.log('item', item)
    context.commit('addItem', item)
  },
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
