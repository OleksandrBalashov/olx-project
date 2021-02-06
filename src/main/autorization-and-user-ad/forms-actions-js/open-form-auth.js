import submitForm from './submit-form';
import formRegistr from '../authorization/templates/form-registration.hbs';
import modalFormCall from '../user-ad/template/modal-form-call.hbs';
import pnotify from '../pnotify/pnotify';

const rootRef = document.querySelector('#root');

function handlerOpenFormAuth(event) {
    const value = event.target.name;
    let markup = null;
    
    if (!localStorage.getItem('accessToken') && value === "user-ad") return pnotify.noAuthMessage();

    value === 'user-ad'
        ? markup = modalFormCall()
        : markup = formRegistr({ isAuth: value === "auth" });
    
    rootRef.insertAdjacentHTML('beforeend', markup);
    
    submitForm();
};

export default handlerOpenFormAuth;