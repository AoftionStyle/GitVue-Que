new Vue({
    el: '#app',
    data: {
        newOrder: '',
        queueOrders: ['ข้าวผัดปู', 'ก๋วยเตี๋ยวเป็ด'],
        cooking: ''
      },
    mounted() {
        this.chef()
    },
    methods: {
    addOrder() {
        this.queueOrders.push(this.newOrder)
        this.newOrder = ''
    },
    chef() {
        if (this.queueOrders.length > 0) {
        this.cooking = this.queueOrders.shift()
        } else {
            this.cooking = ''
        }
        setTimeout(this.chef, 5000)
    }
    }
})