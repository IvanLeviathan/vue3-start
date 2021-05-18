const App = {
  data() {
    return {
      title: 'Notes',
      input: {
        value: '',
        placeholder: 'Type ur note'
      },
      notes: ['task 1', 'task 2', 'task 3'],
      editingIndex: false
    }
  },
  mounted(){
    this.getNotes();
  },
  methods: {
    updateTask(index, newValue, event){
      this.notes[index] = newValue;
      this.editingIndex = false;
      this.$refs['task'+index].disabled = true;
    },
    editTask(index){
      this.$refs['task'+index].disabled = false;
    },
    getNotes(){
      const localNotes = localStorage.getItem('notes');
      if(localNotes){
        this.notes = JSON.parse(localNotes);
      }
    },
    onSubmit() {
      this.notes.push(this.input.value);

      //reset
      this.input.value = '';
    },
    remove(index){
      console.log(`note: ${index + 1} has been removed`);
      this.notes.splice(index, 1);
    }
  },
  watch: {
    notes: {
      handler(updatedList) {
        localStorage.setItem('notes', JSON.stringify(updatedList));
      },
      deep: true
    }
  }
}
Vue.createApp(App).mount('#app');