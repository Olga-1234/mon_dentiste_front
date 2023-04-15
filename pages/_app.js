import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Head from 'next/head';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-pro-sidebar/dist/css/styles.css';

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <script
                    src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
                    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
                    crossorigin="anonymous"></script>
                <script
                    src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
                    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
                    crossorigin="anonymous"></script>
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
                    integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
                    crossorigin="anonymous"></script>

                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                    crossOrigin="anonymous"
                />
                ;<title>Mon dentiste</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
                    rel="stylesheet"
                />
                ;
                <link
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    rel="stylesheet"
                />
                ;
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/#[[latestVersion]]#/mdb.min.css"
                    rel="stylesheet"
                />
                ;
              
                <script
                    type="text/javascript"
                    src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/#[[latestVersion]]#/mdb.min.js"></script>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Sail&display=swap"
                    rel="stylesheet"></link>
            </Head>

            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    );
};

export default MyApp;
