<template>
    <div>
        <div>a: {{a}}</div>
        <div>b: {{b}}</div>
        <div>count: {{count}}</div>
        <input type="button" value="a+5" @click="addA(5)"/>
        <input type="button" value="b+3" @click="addB(3)"/>
        <hr>
        <input type="button" value="张三出现" @click="setOnline(5)"/>
        <ul>
            <li v-for="user in onlineUsers">
                名字：{{user.name}}
                年龄：{{user.age}}
            </li>
        </ul>
        <hr>
        str: {{$store.state.str}}<br>
        a_str: {{str_a}}<br>
        b_str: {{str_b}}<br>
        <input type="button" value="设置A" @click="set_a('aaa')">
        <input type="button" value="设置B" @click="set_b('bbb')">
    </div>
</template>

<script>
    import {mapState, mapActions, mapGetters} from 'vuex';
    export default {
        name: 'Index',
        async created() {
            await this.readUsers();
        },
        methods: {
            ...mapActions(['addA', 'addB', 'readUsers', 'setOnline']),
            ...mapActions({
                set_a: 'mod_a.setStr',
                set_b: 'mod_b.setStr'
            })
        },
        computed: {
            ...mapState(['a', 'b']),
            ...mapState({
                str_a: state => state.mod_a.str,
                str_b: state => state.mod_b.str,
            }),
            ...mapGetters(['count', 'onlineUsers'])
        }
    }
</script>

<style scoped>

</style>
