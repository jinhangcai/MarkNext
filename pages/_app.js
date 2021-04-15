import App from "next/app";
import WithRedux from "../store/withRedux";
import { Provider } from "react-redux";
import '../styles/globals.css'

function MyApp({ Component, pageProps, ReduxStore  }) {
  return <Provider store={ReduxStore}><Component {...pageProps} /></Provider>
  // return <Component {...pageProps} />
}
MyApp.getInitialProps = async appContext => {
    const appProps = await App.getInitialProps(appContext);
    /* 获取store并初始化 */
    const store = appContext.ReduxStore;
    store.subscribe(() => {
        // console.log("store change", store.getState());
    });
    store.dispatch({ type: "add" });

    return { ...appProps };
};
export default WithRedux(MyApp);
