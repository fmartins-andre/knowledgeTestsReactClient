import { createSlice } from '@reduxjs/toolkit'
import store from 'store2'
import { ITokenParsed } from './AuthService'
import { TOKEN_STORAGE } from '@/types/Constants'

type Tokens = {
  parsed: ITokenParsed | null,
  raw: string | null
}

type InitialState = {
  token: Tokens
}

type SetTokenAction = {
  payload: Tokens;
  type: string;
}

const initialState: InitialState = {
  token: store.get(TOKEN_STORAGE, null)
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: SetTokenAction) => {
      store.set(TOKEN_STORAGE, action.payload)
      state.token = action.payload
    }
  }

})

export const usernameSelector = (state:any): string => state.auth.token.parsed?.preferred_username
export const isAuthenticatedSelector = (state:any): Boolean => Boolean(state.auth.token?.raw)
export const { setToken } = authSlice.actions
export default authSlice.reducer
