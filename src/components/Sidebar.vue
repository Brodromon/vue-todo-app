<template>
    <div id="sidebar">
        <div id="sidebar-inner">
            <div id="sidebar-lists">
                <ul>
                    <li @click="selectList(item.name, item.currentlySelected, i)" :class="{selected : item.currentlySelected}" :key="item.name" v-for="(item, i) in lists">
                        <div class="li-name">
                            <i class="fas fa-list"></i>
                            <p>{{item.name}}</p>
                        </div>
                        <div class="li-undone">{{unDoneTasks(i)}}</div>
                    </li>
                </ul>
            </div>
            <div id="sidebar-footer">
                    <input v-if="adding" type="text">
               <div id="buttons">
                    <button id="btn-add-list" v-if="!adding" @click="adding = true">+</button>
                    <button id="btn-cancel" v-if="adding" @click="adding = false" >Cancel</button>
               </div>
            </div>
        </div>    
    </div>
</template>

<script>
export default {
    data() {
        return {
            adding: false
        }
    },
    methods: {
        unDoneTasks(i) {
            if(this.$store.state.lists[i].listItems.filter(x => x.isDone === false).length)
                return this.$store.state.lists[i].listItems.filter(x => x.isDone === false).length
        },
        selectList(name, selected, i) {
            for (let x = 0; x < this.$store.state.lists.length; x++) {
                this.$store.state.lists[x].currentlySelected = false
            }
            this.$store.state.lists[i].currentlySelected = true
        },
        click(i) {
            i === 1 ? console.log('1') : console.log('2')
        }
    },
    computed: {
        lists() {
            return this.$store.state.lists
        }
        
    }
}
</script>

<style lang="sass">
    #sidebar
        display: inline-block
        height: 100%
        background: linear-gradient(.7turn, #479AF1, #7063DF)
        #sidebar-inner
            height: 100%
            display: flex
            flex-direction: column
            align-items: center
            width: 250px
            color: #fff
            font-size: 1.2em
            font-weight: bold
            #sidebar-hdr
                width: 100%
                padding: 50px 15px 15px 15px 
                ul
                    margin: 0
                    li
                        list-style: none
            #sidebar-lists
                border-top: 1px #547EE1 solid
                width: 100%
                padding: 15px
                ul
                    li
                        list-style: none
                        display: flex
                        justify-content: space-between
                        padding: 10px
                        .li-name
                            display: inline-block
                            p
                                display: inline-block
                                margin-left: 10px
                                margin-bottom: 0
                        .li-undone
                            opacity: .8
                    &:hover
                        cursor: pointer
                    .selected 
                        background: rgba(0, 0, 0, .2)
                        border-radius: 5px
            #sidebar-footer
                #buttons
                    display: flex
                    justify-content: center
                    margin-top: 30px
                    width: 100%
                    button
                        height: 30px
                        width: 30px
                        line-height: 31px
                        border-radius: 50%
                        border: 0
                        background: #fff
                        color: #528CED
                        font-size: 35px
                        margin: 0 10px
                    button#btn-cancel
                        width: 40%
                        border-radius: 4px
                        font-size: 15px
                              
</style>