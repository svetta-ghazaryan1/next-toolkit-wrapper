import "@/styles/globals.css";
import { Provider } from "react-redux";
import { wrapper } from "../app/store";

export default function App({ Component, ...rest }: any) {
  const { store, props } = wrapper.useWrappedStore(rest);
  // console.log(store, props);

  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
}
