<template>
<span>
     <Contact  :key="contact.id" v-for="contact in contacts" :contact="contact" @edit-contact="updateContact" @delete-contact="$emit('delete-contact', contact)" />      

</span>

           
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Contact from './Contact.vue'
import contactType from '../interfaces/contact'

export default defineComponent({
name:'Contacts',


components:{
    Contact
},
props:{
    contacts:Array as PropType<contactType[]>
    
},
methods:{
updateContact(contact: contactType){
  this.$emit('update-contact', contact)
 }
},
emits:['update-contact', 'delete-contact']
})
</script>
<style lang="scss" scoped>
#add-contact-wrapper,
.edit-contact {
  min-width: 320px;
  margin-bottom: 20px;
  margin-right: auto;
}
.contacts-wrapper {
  margin-top: 30px;
}
.contact {
  border-bottom: 1px solid $grayColor2;
}
.contacts-wrapper .contact:first-child {
  border-top: 1px solid $grayColor2;
}
</style>