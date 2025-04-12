import ReactDOM from 'react-dom/client';
import App from './DeveloperExamples';
import "7.css/dist/7.css";

const root = ReactDOM.createRoot(document.getElementById('root'))

const render = (Component) => {
    root.render(<Component />);
};

render(App);
/**
 * @type {object}
 */
var module = module || {};

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./DeveloperExamples').default;
        render(NextApp);
    });
}
