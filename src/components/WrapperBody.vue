<template>
    <div id="wrapper-body">
       <div id="body-hdr">
           <div @click="someFunc()" id="sort">sort</div>
           <div class="list-name">
               {{currentlySelected}}
            </div>
           <div id="add-to-list">+</div>
       </div>
       <div id="body-inner">
           <div id="body-inner-list">
               <ul>
                   
                   <li :key="item.id" v-for="item in selectedList.listItems">
                       <div class="list-item-text">
                           <button @click="item.isDone = !item.isDone" :class="{done: item.isDone}" class="item-done"><i v-if="item.isDone" class="fas fa-check"></i></button>
                           <p :class="{'text-done' : item.isDone}">{{item.task}}</p>
                       </div>
                       <div @click="item.importance = !item.importance" class="importance-star"><i :class="{fas: item.importance, far: !item.importance}" class="fa-star"></i></div>
                   </li>
               </ul>
           </div>
       </div>
    </div>
</template>

<script>
export default {
    computed: {
        selectedList() {
            return this.$store.state.lists.find(list => list.currentlySelected == true)
        },
        currentlySelected() {return this.$store.state.lists.find(list => list.currentlySelected == true).name}
    }
}
</script>

<style lang="sass">


#wrapper-body
    display: inline-block
    height: 100%
    width: 100%
    #body-hdr
        width: 100%
        display: flex
        justify-content: space-between
        align-items: center
        height: 70px
        padding: 0 30px
        background: linear-gradient(.25turn, #F0F6FE, #fff, #F0F6FE)
    #body-inner
        padding: 30px
        &-list
            ul
                background: #F8F8FA
                margin: 0
                padding: 0
                border-radius: 6px
                li
                    display: flex
                    justify-content: space-between
                    align-items: center
                    list-style: none
                    padding: 10px 15px
                    border-bottom: 1px #e9e9e9 solid
                    .list-item-text
                        display: flex
                        align-items: center
                        .item-done
                            background: #fff
                            height: 25px
                            width: 25px
                            border-radius: 50%
                            border: 1px #000 solid
                            &:hover
                                filter: brightness(.9)
                            .fa-check
                                color: #fff
                        .done
                            background: #81f03c
                            border: 0
                        p
                            display: inline-block
                            margin-bottom: 0
                            margin-left: 15px
                            font-size: 1.12em
                            font-weight: 500
                        .text-done
                            text-decoration: line-through
                            color: #999
                    .importance-star
                        display: inline-block
                        &
                            .fas
                                color: #F2BD61
                    &:last-child
                        border-bottom: none  

</style>