import { FC } from 'react'
import { Provider } from 'react-redux'
import store from '@/services/StoreService'

const ReduxProvider: FC = props => {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}

export default ReduxProvider
