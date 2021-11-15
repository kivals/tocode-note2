import { createStore } from "vuex";
import storage from "../../helpers/storage";

export default createStore({
  state: {
    notes: null,
  },
  mutations: {
    setNotes(state, notes) {
      state.notes = notes;
    },
    pushNote(state, note) {
      state.notes.push(note);
    },
    removeByIndex(state, index) {
      state.notes.splice(index, 1);
    },
  },
  actions: {
    loadNotes({ commit }) {
      const notes = storage.getItem("notes") || [];
      commit("setNotes", notes);
    },
    pushNote({ commit, state }, payload) {
      commit("pushNote", payload);
      storage.setItem("notes", state.notes);
    },
    removeNote({ commit, state }, payload) {
      commit("removeByIndex", payload);
      storage.setItem("notes", state.notes);
    },
  },
  getters: {
    notes: (s) => s.notes,
  },
});
