import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './components/GlobalStyles';
import reportWebVitals from './reportWebVitals';
import { AuthProvider, NotifyProvider, VideoProvider } from './components/Store';
//Fake comments

function emitComment(id) {
    setInterval(() => {
        window.dispatchEvent(
            new CustomEvent(`lesson-${id}`, {
                detail: `nội dung comment của lesson ${id}`,
            }),
        );
    }, 2000);
}

emitComment(1);
emitComment(2);
emitComment(3);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>

    <AuthProvider>
        <VideoProvider>
            <NotifyProvider>
                <GlobalStyles>
                    <App />
                </GlobalStyles>
            </NotifyProvider>
        </VideoProvider>
    </AuthProvider>,
    // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
