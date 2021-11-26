  <template>
<span>
<Header @toggle-add-list-contact="toggleAddListContact" title="Contact Manager" :showAddLayout="showAddLayout"/>
    <div class="container column">
      <SortOrder v-if="!showAddLayout && sortedArray.length" @sort-order="sortOrderContact"/>
       <div v-if="!showAddLayout" class="contacts-wrapper utility-wrapper" id="contacts-wrapper">
      
         <Contacts  v-if="sortedArray.length" :contacts="sortedArray" @update-contact="updateContact"  @delete-contact="deleteContact"/>
         <h3 v-if="!contacts.length">Contact List is Empty</h3>
            </div>
            <div v-else class="add-contact-wrapper" id="add-contact-wrapper">
               <p>Please add contact details</p>
              <Form @get-inputs="addContact" />
        </div>

    </div>
</span>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue'
import Contacts from './components/Contacts.vue'
import Form from'./components/Form.vue'
import SortOrder from './components/SortOrder.vue'


import contactType from './interfaces/contact'
import { sortContacts } from './helper/sortContacts';
import { orderType, sortType } from './interfaces/contact';




export default defineComponent({
  name: 'App',
  components: {
    Header,
    Contacts,
    Form,
    SortOrder
  },
  data(){
    return {
      showAddLayout:false,
      contacts:[] as contactType[],
      sort:"fullName" as sortType,
      order:"asc" as orderType
    }
  },
  methods:{
    toggleAddListContact(){
      this.showAddLayout = !this.showAddLayout;
    },
      getContactsInStorage: function () : contactType[] {
         const unparsedContact = localStorage.getItem("contacts");
         let parsedContact;
         if(unparsedContact)
          parsedContact =  JSON.parse(unparsedContact)
          else{
            parsedContact = []
          }
          return parsedContact
        
      },
     setContactsInStorage: function (contacts:contactType[]) {
        localStorage.setItem("contacts", JSON.stringify(contacts));
      },
     addContact(newContact:contactType){
          this.contacts = [...this.contacts,newContact]
          this.showAddLayout = false;
      },
     updateContact(updContact:contactType){
        this.contacts = this.contacts.map((cont)=>
          cont.id === updContact.id?
          {...updContact} : {...cont})
       // this.setContactsInStorage(this.contacts)  
       
       },
       deleteContact(contact: contactType){
         if(confirm('Delete ' + contact.fullName + ' as contact?')){
           this.contacts = this.contacts.filter((cont)=> cont.id !== contact.id)
          // this.setContactsInStorage(this.contacts);
          }
       },
       sortOrderContact(data:{sort:sortType, order:orderType}){
          this.sort = data.sort;
          this.order = data.order;
       },
       
  },
  computed:{
    sortedArray: function():contactType[] {
   
       const newArray: contactType[] = sortContacts([...this.contacts], this.sort, this.order);
       this.setContactsInStorage(newArray);
      return newArray
   
     
  }

  },
   
    created(){
  
    this.contacts = this.getContactsInStorage()
  }
});
</script>

<style lang="scss">
#add-contact-wrapper,
.edit-contact {
  min-width: 320px;
  margin-bottom: 20px;
  margin-right: auto;
}
.contacts-wrapper {
  margin-top: 30px;
}

</style>