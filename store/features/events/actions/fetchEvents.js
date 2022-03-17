import { createAsyncThunk } from '@reduxjs/toolkit'
import { FETCH_EVENTS } from '../types'
import { getEvents } from '../../../../helpers/requests'

export const fetchEvents = createAsyncThunk(
    FETCH_EVENTS,
    getEvents
)