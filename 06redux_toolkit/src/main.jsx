import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
//The Provider component makes the Redux store available to any nested components that need to access the Redux store
    // It uses the store prop to pass the store to the components
    // The store is created using the configureStore function from Redux Toolkit
    // The store is passed to the Provider component
    // The Provider component is imported from react-redux
    // The Provider component is used to wrap the App component
