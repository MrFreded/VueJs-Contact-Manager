<template>
     <div class="display-contact utility-wrapper row">          
                <img :src=" contact.imgUrl? contact.imgUrl : require('../assets/images/avatar.jpg')" :alt="contact.fullName ? contact.fullName: 'Avatar'">
                <div class="contact-number-name column">
                    <h3 class="contact-name">{{contact.fullName}}</h3>
                    <p class="contact-number">{{contact.contactNo}}</p>
                    <button @click="$emit('delete-contact')" class="delete-btn">Delete</button>
                </div>
                <button @click="$emit('edit-toggle')" class="edit-btn" > {{editBtnText}}</button>
        </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ContactType from './../interfaces/contact'

export default defineComponent({
name: 'ContactDetails',
props:{
    contact: Object as PropType<ContactType>,
    editBtnText: String
},
methods:{
  
},
 emit:['edit-toggle', 'delete-task']

})
</script>

<style lang="scss" scoped>
.display-contact,
.contact {
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
.display-contact {
  min-height: 120px;
  position: relative;
}
 img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
}

.contact-number-name {
  flex: 2;
  min-height: 100px;
  align-items: flex-start;
}
.edit-btn,
.delete-btn {
  font-style: italic;
  font-size: 12px;
  text-transform: lowercase;
}
.edit-btn {
  color: $grayColor1;
}
.delete-btn {
  color: red;
  position: absolute;
  bottom: 13px;
}
</style>
