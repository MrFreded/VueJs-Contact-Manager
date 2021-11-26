<template>
    <div class="utility-wrapper" id="sorting-order-wrapper">
      <form id="sort-form">
            <label for="sortName">Sort by Name</label>
            <input  @change="onSortOrderChange" v-model="sortOption" type="radio" id="sortName" name="sort-radio" value='fullName' >
            <label for="sortNumber">Sort by Number</label>
            <input @change="onSortOrderChange"  v-model="sortOption" type="radio" id="sortNumber" name="sort-radio" value='contactNo'>    
        </form>
        <form>
            <select @change="onSortOrderChange" v-model="orderOption" name="order-select" id="order-select">
                <option value="asc">Asc</option>
                <option value="desc">Desc</option>
            </select>
        </form>
    </div>

        
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
 name:"SortOrder",
 data(){
return{
    orderOption:'asc',
    sortOption: 'fullName',
}
 },
 methods:{
        onSortOrderChange:function(){
            this.$emit('sort-order', {order: this.orderOption, sort: this.sortOption})
        }   
 },
 emits:['sort-order']
})
</script>

<style lang="scss" scoped>
#sorting-order-wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    #order-select {
        height: 25px;
        min-width: 113px;
        border: 1px solid #6e6e6e;
} 
  
}

#sort-form label {
  margin-right: 10px;
}
#sort-form input {
  margin-right: 17px;
}


</style>