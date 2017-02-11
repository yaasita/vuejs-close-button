var vm = new Vue({
    el: '#box-list',
    data: {
        boxes: [
            { name: 'a' },
            { name: 'b' },
            { name: 'c' },
            { name: 'd' },
            { name: 'e' },
            { name: 'f' },
            { name: 'g' },
            { name: 'h' },
            { name: 'i' },
            { name: 'j' },
            { name: 'k' },
            { name: 'l' },
        ]
    },
    methods: {
        closeBox1: function (index) {
            var answer = confirm("close?" + index);
            if (answer == true){
                this.boxes.splice(index,1);
            }
        }
    }
});
