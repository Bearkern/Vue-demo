var apiURL = 'https://api.github.com/users/Bearkern/repos';
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
        home: [{father:'Tom'}, {father:'Bob'}],
        repositories: null
    },

    created: function () {
        this.fetchData()
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
        },
        fetchData: function () {
            var xhr = new XMLHttpRequest()
            var self = this
            xhr.open('GET', apiURL)
            xhr.onload = function () {
                self.repositories = JSON.parse(xhr.responseText)
            }
            xhr.send()
        }
    }
});

app.message = '1234';