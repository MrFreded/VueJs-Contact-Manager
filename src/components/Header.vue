<template>
    <header class="container">
        <h1>
            {{title}}
        </h1>
        <Button @toggle-add-list-contact="$emit('toggle-add-list-contact')" :btnText="showAddLayout? 'Contact List': 'Add a Contact'" />
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from './Button.vue'

export default defineComponent({
name:'Header',
components:{
    Button
},
props:{
    title: String,
    showAddLayout: Boolean

}
})
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>