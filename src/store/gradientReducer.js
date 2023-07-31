import { createReducer, createAction } from '@reduxjs/toolkit'

import randomHexColor from '../utils/randomHexColor';


const initialState = {
    firstColor: '#e367a4',
    lastColor: '#48b1f3',
    direction: '90deg',
    nbColors: 0,
};

export const changeFirstColor = createAction('gradient/changeFirstColor')
export const changeLastColor = createAction('gradient/changeLastColor')
export const changeAllColor = createAction('gradient/changeAllColor')
export const changeDirection = createAction('gradient/changeDirection')

const gradientReducer = createReducer(initialState, (builder) => {

    builder.addCase(changeFirstColor, (state) => {

        state.firstColor = randomHexColor();
        state.nbColors += 1;

    }).addCase(changeLastColor, (state) => {

        state.lastColor = randomHexColor();
        state.nbColors += 1;

    }).addCase(changeAllColor, (state) => {

        state.firstColor = randomHexColor();
        state.lastColor = randomHexColor();
        state.nbColors += 2;

    }).addCase(changeDirection, (state, action) => {

        state.direction = action.payload

    })
})

export default gradientReducer;