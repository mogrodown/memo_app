let items = [
{
    name: '鉛筆',
    price: 300,
    quantity: 0
},
{
    name: 'ノート',
    price: 400,
    quantity: 0
},
{
    name: '消しゴム',
    price: 500,
    quantity: 0
},
]

vm1 = new Vue({
    el: '#app',
    data: {
        items: items
    },
    filters: {
        numberWithDelimiter: function (value) {
            if (!value) {
                return '0'
            }
            return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
        }
    },
    computed: {
        totalPrice: function () {
            return this.items.reduce(function(sum, item) {
                return sum + (item.price * item.quantity)
            }, 0)
        },
        totalPriceWithTax: function() {
            return Math.floor(this.totalPrice * 1.08)
        },
        canBuy: function() {
            return this.totalPrice >= 1000
        },
        errorMessageStyle: function() {
            return {
                border: this.canBuy ? '' : '1px solid red',
                color: this.canBuy ? '' : 'red'
            }
        }
    }
});

vm2 = new Vue({
    el: '#b-button',
    data: {
        loggedInButton: 'ログイン済みのため、購入できます。'
    }
});

vm_debug = new Vue({
    el:'#debug',
    data: {
        doDebug: false
    }
})
