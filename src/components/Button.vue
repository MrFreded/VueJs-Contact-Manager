<template>
    <button  @click="$emit('toggle-add-list-contact')"  class="add-show-contacts-btn">{{btnText}}</button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name:'Button',
    props:{
        btnText: String,
        
    },
    emit:['toggle-add-list-contact']
})
</script>
