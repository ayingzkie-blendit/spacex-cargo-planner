import App from "next/app";
import React from "react";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import createStore from "../redux/store";
import MainLayout from "../layouts/MainLayout";
import "../styles/styles.css";
class MyApp extends App {
  render() {
    const { Component, pageProps, store } = this.props;

    const getLayout =
      Component.getLayout || ((page) => <MainLayout children={page} />);

    return (
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    );
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
