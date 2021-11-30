import Keycloak, { KeycloakTokenParsed, KeycloakPromiseCallback, KeycloakInitOptions } from 'keycloak-js'
import rootStore from '@/services/StoreService'
import { setToken } from '@/services/authReducer'

export interface ITokenParsed extends KeycloakTokenParsed {
  // eslint-disable-next-line camelcase
  preferred_username: string | undefined
}

const initOptions: KeycloakInitOptions = {
  onLoad: 'check-sso',
  silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
  pkceMethod: 'S256'
}

const instance = Keycloak({
  clientId: import.meta.env.VITE_KC_RESOURCE as string,
  realm: import.meta.env.VITE_KC_REALM as string,
  url: import.meta.env.VITE_KC_AUTH_SERVER_URL as string
})

const init = (onAuthenticationCallback?: KeycloakPromiseCallback<void>) => {
  instance.init(initOptions).then(authenticated => {
    if (!authenticated) {
      if (onAuthenticationCallback) onAuthenticationCallback()
    } else {
      instance.updateToken(70).catch(console.error)
    }

    rootStore.dispatch(setToken({
      raw: instance.token ?? null,
      parsed: instance.tokenParsed as ITokenParsed
    }))
  }).catch(error => {
    console.error('Authentication Error: ', error)
    rootStore.dispatch(setToken({
      raw: null,
      parsed: null
    }))
  })
}

const login = instance.login

const logout = instance.logout

const AuthService = {
  init,
  login,
  logout
}

export default AuthService
