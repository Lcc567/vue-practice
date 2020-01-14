export default {
    data() {
        return { val: '' }
    },
    props: {
        type: {
            type: String
        }
    },
    methods: {
        input(e) {
            this.val = e.target.value
        }
    },
    render(h) {
        return (<div>
            {this.val}<input type='text' value={this.val} on-input={this.input} />
        </div>)
        // return h('h' + this.type, {}, [this.$slots.default, h('span', {
        //     on: {
        //         click() {
        //             alert(1)
        //         }
        //     }
        // }, 'world')])
    }
}