<template>
    <div class="mb-2">
        <label v-if="label" class="form-label" :for="id">{{ label }}:</label>
       
        <input style="--tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); border-radius: 0;" :id="id" ref="input" v-bind="$attrs" class="form-input shadow-none m-0" :class="error ? 'form-input-error' : 'form-input'" :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
        <div v-if="error" class="form-error">{{ error }}</div>
    </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default() {
        return `text-input-${this._uid}`
      },
    },
    type: {
      type: String,
      default: 'text',
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    label: String,
    error: String,
  },
  methods: {
    focus() {
      this.$refs.input.focus()
    },
    select() {
      this.$refs.input.select()
    },
    setSelectionRange(start, end) {
      this.$refs.input.setSelectionRange(start, end)
    },
  },
}
</script>
