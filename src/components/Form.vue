<template>
       <form @submit="onSubmit" class="form-group column">
        <input type="text" placeholder="Contact Name" v-model="fullName" name="fullName"  maxlength="20" required>
        <input type="number" placeholder="Contact Phone Number" :value="contactNo" name="contactNo" @input="updateValue"  data-maxlength="10">
        <label for="img">Select Avatar:</label>
        <input type="file" id="img" name="img" accept="image/*" @change="getImage($event.target.files[0])" >
        <input type="submit" class="contact-save-btn" value="Save">
    </form>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import contactType from '../interfaces/contact'


export default defineComponent({
    name:'Form',
    props:{
        oldContact: Object as PropType<contactType>
    },
    data(){
    
        return{
            fullName:'' as string,
            contactNo: '' as number | string,
            imgUrl: '' as string | ArrayBuffer | null ,
            id: '' as string
        }    
    },
    methods:{
        uniID: function (): string {
            return "_" + Math.random().toString(36).substr(2, 9);
        },
      ucwords: function(str:string): string {
            return (str + "").replace(/^([a-z])|\s+([a-z])/g, function ($1) {
         return $1.toUpperCase();
      });
    },
      updateValue(event:Event) {
        const inputNo = (event.target as HTMLInputElement)
        const dataLength = Number(inputNo.dataset.maxlength)
        const newValue =  inputNo.value.slice(0, dataLength)
        this.contactNo = newValue
        return inputNo.value = newValue;
       
      },
    
        getImage(file:Blob) {
            return new Promise((resolve, reject) => {
                const fReader = new FileReader();
                fReader.onload = () => {
                    this.imgUrl = fReader.result;
                    // rememeber to clear input after reading
                }
                fReader.readAsDataURL(file);
            })
        },
        onSubmit(e:Event){
            
            e.preventDefault()
            const newContact = {
                fullName: this.ucwords(this.fullName),
                contactNo: this.contactNo,
                imgUrl:this.imgUrl,
                id: this.id
        }

            this.$emit('get-inputs', newContact )
            this.fullName = ''
            this.contactNo = ''
            this.imgUrl = ''
            this.id = ''
        }
    },  emits:['get-inputs'],
    created(){
       
        if(this.$props.oldContact){
            this.fullName = this.$props.oldContact.fullName? this.$props.oldContact.fullName : ''
            this.contactNo = this.$props.oldContact.contactNo? this.$props.oldContact.contactNo: ''
            this.imgUrl =  this.$props.oldContact.imgUrl?  this.$props.oldContact.imgUrl: ''
            this.id =  this.$props.oldContact.id.trim() !== " " ?  this.$props.oldContact.id : this.uniID()
          
        }else{
            this.id =  this.uniID()
        }
        
    }
})
</script>
<style lang="scss" scoped>
*{

}
</style>