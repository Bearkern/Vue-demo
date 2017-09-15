var app = new Vue({
    // element
    el: '#app',
    // for data binding
    data: {
        todos: [],
        newTodo: '',
        message: 'hello world!!',
        score: 0,
        loading: true,
        show: true,
        colors: ['black', 'red', 'blue'],
        home: [{father:'Tom'}, {father:'Bob'}]
    },
    methods: {
        myFa: function(father) {
            alert("My father is" + father)
        },
        addTodo: function(todo) {
            this.todos.push({content:todo, completed: false})
        },
        removeTodo: function(todo) {
            this.todos.splice(this.todos.indexOf(todo), 1)
        }
    }
});

app.message = '1234';