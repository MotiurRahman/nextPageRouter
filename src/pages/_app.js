import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { SessionProvider } from "next-auth/react";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

export default function App({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </SessionProvider>
  );
}
