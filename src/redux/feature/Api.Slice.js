"use client"

import { createSlice } from "@reduxjs/toolkit"


const initialState = {
   destination:null,
   days:null,
   dateTo:null,
   dateFrom:null,
   guest:null
   }
   
   export const FormData = createSlice({
   
       name:'form',
       initialState,
       reducers:{
        Destination(state,action) {
            state.destination=action.payload
            console.log(state.destination)
          },
          Days(state,action) {
            state.days=action.payload
            console.log(state.days)
          },
          DATETO(state,action) {
            state.dateTo=action.payload
            console.log(state.dateTo)
          },
          DATEFROM(state,action) {
            state.dateFrom=action.payload
            console.log(state.dateFrom)
          },
         
        Guest(state,action) {
            state.guest=action.payload
            console.log(state.guest)
          },
       },
   
   })
    export default FormData.reducer
    export const { Destination, Days, Guest,DATETO , DATEFROM} = FormData.actions