<template>
<div class="questionnaire-form">
    <button class="close" @click="closeForm">X</button>
    <h2>New Questionnaire</h2>
    <form @submit="sendForm" action="" method="post">
        <label for="title">Title</label>
        <input v-model="title" type="text" name="title" id="title" value=""><br>

        <input class="submit-bttn" type="submit" name="submit" value="Create">
    </form>
</div>
</template>

<script>
import axios from 'axios'


const URL = 'http://127.0.0.1:8000/questionnaire/'

export default {
    name: 'questionnaire-form',

    data() {
        return {
            title: '',
        }
    },

    methods: {
        closeForm: function() {
            document.querySelector('.questionnaire-form').style.display = 'none'
            this.$emit('closeForm')
        },

        sendForm: function(event) {
            event.preventDefault()

            const headers = {
                Authorization: `Token ${this.$store.getters.USER_DATA.token}`
            }

            axios({
                method: 'post',
                url: URL,
                data: {
                    'title': this.title,
                },
                'headers': headers
            }).then(() => {
                this.title = ''
            }).catch(err=>{
                console.error(err)
            })
        }
    }
}
</script>

<style scoped>
h2 {
    margin: 24px;
}

.questionnaire-form {
    display: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 380px;
    border: solid 1px rgba(0, 0, 0, 0.3);
    background: rgba(255, 255, 255, 0.82);
    padding: 0 8px;
    font-size: 14px;
}

.close {
    position: relative;
    float: right;
    margin-top: 6px;
    border: none;
    color: rgb(206, 20, 20);
    background-color: white;
    font-size: 18px;
}

.close:focus {
    outline: none;
}

label {
    margin: 0 4px 0 16px;
}

input[type=text] {
    margin-top: 8px;
    border: solid 1px rgba(0, 0, 0, 0.3);
}

input[type=text]:focus {
    outline: none;
    border: solid 1px rgb(31, 137, 229);
}

input[type=submit] {
    margin: 20px;
    border: solid 1px rgb(85, 76, 185);
    padding: 0 2px;
    background-color: white;
    transition: 1s;
}

input[type=submit]:hover {
    color: white;
    background-color: rgb(85, 76, 185);
    transition: 1s;
}


input[type=submit]:focus {
    outline: none;
}
</style>