
import "./Login.css"
import useInput from "../hooks/useInput"
// import { useHistory } from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import axios from "axios";

export default function Login(){
    const nameInput=useInput("");
    const passwordInput=useInput("");
    const history = useNavigate();
   async function onBtnCLicked(inputName,inputPassword){
        console.log({
            inputName:inputName,
            inputPassword:inputPassword,
        });
        history("/home")
       await axios.post("/login",{ name:inputName,
        password:inputPassword}
        .then(response => {

            if (response.status != 201) return

            localStorage.setItem('accessToken', response.data.access);

            localStorage.setItem('refreshToken', response.data.refresh);

        })

        .catch(error => console.error(error)));
    }
    return(
        <div className="bg-primary">
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header">
                                        <h3 className="text-center font-weight-light my-4">Авторизация</h3>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                                <label className="small mb-1" htmlFor="inputEmailAddress">Имя пользователя</label>
                                                <input {...nameInput} className="form-control py-4" id="inputEmailAddress" type="text" placeholder="Введите имя пользователя" />
                                            </div>
                                            <div className="form-group">
                                                <label className="small mb-1" htmlFor="inputPassword">Пароль</label>
                                                <input {...passwordInput} className="form-control py-4" id="inputPassword" type="password" placeholder="Введите пароль" />
                                            </div>
                                           
                                            <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <a href="#">
                                                    <i className="fab fa-google fa-2x" style={{ color: '#d9503e' }}></i>
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-vk fa-2x" style={{ color: '#4a658b' }}></i>
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-github fa-2x" style={{ color: '#303030' }}></i>
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-facebook fa-2x" style={{ color: '#405794' }}></i>
                                                </a>
                                            </div>
                                        </form>
                                        <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                      
                                        <input onClick={()=>
                                            {
                                                if(nameInput.value.toLowerCase()!==""&&passwordInput.value.toLowerCase()!==""){
                                                    onBtnCLicked(nameInput.value.toLowerCase,passwordInput.value.toLowerCase)
                                                }
                                            }
                                         } class="btn btn-primary" type="submit" value="Авторизоваться"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        </div>
    )
}