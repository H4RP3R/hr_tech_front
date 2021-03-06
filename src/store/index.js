import Vue from 'vue'
import Vuex from 'vuex'
import { bus } from '../main'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        userData: {},
        questionToEdit: null,
        questionnaireToEdit: null,
        includedQuestions: [],
        startQuestionnaireId: null,
    },
    getters: {
        USER_DATA: state => {
            return state.userData
        },
        CURRENT_QUESTION_ID: state => {
            return state.questionToEdit
        },
        CURRENT_QUESTIONNAIRE_ID: state => {
            return state.questionnaireToEdit
        },
        INCLUDED_QUESTIONS: state => {
            return state.includedQuestions
        },
        START_QUESTIONNAIRE_ID: state => {
            return state.startQuestionnaireId
        }
    },
    mutations: {
        SET_USER_DATA: (state, payload) => {
            state.userData = payload
            bus.$emit('haveUserData')
        },
        SET_CURRENT_QUESTION_ID: (state, payload) => {
            state.questionToEdit = payload
            if (state.questionToEdit) {
                bus.$emit('haveQuestionId')
            }
        },
        SET_CURRENT_QUESTIONNAIRE_ID: (state, payload) => {
            state.questionnaireToEdit = payload
            if (state.questionnaireToEdit) {
                bus.$emit('haveQuestionnaireId')
            }
        },
        SET_INCLUDED_QUESTIONS: (state, payload) => {
            state.includedQuestions = payload
        },
        SET_START_QUESTIONNAIRE_ID: (state, payload) => {
            state.startQuestionnaireId = payload
        }
    },
})
