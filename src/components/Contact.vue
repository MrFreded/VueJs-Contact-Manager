<template>
<div  class="contact column"  :id="contact.id">
  <ContactDetails :contact="contact" @edit-toggle="editToggle" @delete-contact="$emit('delete-contact')" :editBtnText="isEditing? 'close': 'edit'"/>
  <div  v-if="isEditing" class="edit-contact">
    <Form :id="'form-'+ contact.id" @get-inputs="onEditContact" :oldContact="contact"/> 
  </div> 

  </div>     
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Form from './Form.vue'
import ContactDetails from './ContactDetails.vue'
import contactType from './../interfaces/contact'


export default defineComponent({
name:'Contact',
components:{
  Form,
  ContactDetails
},
data(){
  return{
    isEditing: false as boolean
  }
},
props:{
    contact: Object as PropType<contactType>
},
methods:{
    editToggle(){
      this.isEditing =  !this.isEditing
    },
    onEditContact(newContact:contactType){
      this.$emit('edit-contact', newContact)
      this.isEditing = false;
      
    }
},
  emits:['edit-contact', 'get-inputs', 'delete-contact']


})
</script>

<style lang="scss" scoped>

*{

}
</style>
