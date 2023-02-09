import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";//extension que nos permite ver los estados
import thunk from "redux-thunk";
import rootReducer from "../reducer/index";




export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))//de esta manera le estoy aplicando middlewares a mi proyecto 

// a la extension le pasamos nuestro middleware. El applyMiddleware es nuestro intermediario, nos sirve para acer peticiones acincronas, lo nececitamos para hacer llamados a la api, nos sirve para poner varios middlewares

//Middleware: Es codigo que se ejecuta en medio de lo que pasa entre las action y el reducer 