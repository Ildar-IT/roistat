export default {
    data() {
        return {
            show: false,
        }
    },
    methods: {
        showModal() {
            this.show = true;
        },
        hideModal() {
            this.show = false;
        }
    }
}
