<template>
  <Form @onSubmit="handleSubmit" />
  <List v-if="notes" @onRemove="handleRemove" :items="notes" />
</template>

<script>
import Form from "@/components/Notes/Form.vue";
import List from "@/components/Notes/List";

export default {
  components: { Form, List },
  computed: {
    notes() {
      return this.$store.state.notes;
    },
  },
  mounted() {
    this.$store.dispatch("loadNotes");
  },
  methods: {
    // * submit note
    handleSubmit(title, activeTags) {
      const note = {
        title: title,
        tags: activeTags,
      };
      this.$store.dispatch("pushNote", note);
    },
    // * remove note
    handleRemove(index) {
      this.$store.dispatch("removeNote", index);
    },
  },
};
</script>
