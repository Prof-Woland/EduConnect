import axios from "axios";
import {useNavigate} from "react-router-dom";
import "./Register.css"
import useInput from "../hooks/useInput";
// import { redirect } from "react-router-dom";

export default function Register(){
    const inputName=useInput("");
    const inputSurname=useInput("");
    const userNameInput=useInput("");
    const inputEmail=useInput("");
    const inputPassword=useInput("");
    const history=useNavigate();
   async function submitBtnClicked(inputName,inputSurname,userNameInput,inputEmail,inputPassword){
        console.log({
            inputName:inputName,
            inputSurname:inputSurname,
            userNameInput:userNameInput,
            inputEmail:inputEmail,
            inputPassword:inputPassword,
        })
        await axios.post("/register",
            {
            name:inputName,
            surname:inputSurname,
            userName:userNameInput,
            email:inputEmail,
            password:inputPassword,
        }
        
    );
        history('/login');

        // <redirect/>
        // debugger;
        // axios.get("",{
        //     inputName:inputName,
        //     inputSurname:inputSurname,
        //     userNameInput:userNameInput,
        //     inputEmail:inputEmail,
        //     inputPassword:inputPassword,
        // })
    }
    return(
        <div id="layoutAuthentication" >
        <div id="layoutAuthentication_content">
            <main>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                         
                            <div className="card shadow-lg border-0 rounded-lg mt-5">
                                <div className="card-header">
                                    <h3 className="text-center font-weight-light my-4">Создать аккаунт</h3>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="small mb-1" htmlFor="inputFirstName">Имя</label>
                                                    <input required={true} {...inputName} className="form-control py-4" id="inputFirstName" type="text" placeholder="Введите имя" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="small mb-1" htmlFor="inputLastName">Фамилия</label>
                                                    <input required={true} {...inputSurname} className="form-control py-4" id="inputLastName" type="text" placeholder="Введите фамилию" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label className="small mb-1" htmlFor="inputUsername">Имя пользователя</label>
                                                <input required={true} {...userNameInput} className="form-control py-4" id="inputUsername" type="text" aria-describedby="usernameHelp" placeholder="Введите имя пользователя" />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="small mb-1" htmlFor="inputEmailAddress">Адрес электронной почты</label>
                                                <input required={true} {...inputEmail} className="form-control py-4" id="inputEmailAddress" type="email" aria-describedby="emailHelp" placeholder="Введите адрес эл. почты" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="small mb-1" htmlFor="inputPassword">Пароль</label>
                                                    <input required={true} {...inputPassword} className="form-control py-4" id="inputPassword" type="password" placeholder="Введите пароль" />
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="form-group mt-4 mb-0">
                                            <input className="btn btn-primary btn-block" type="submit" onClick={()=>
                                            {if( inputSurname.value.toLowerCase()!==""&&
                                            userNameInput.value.toLowerCase()!==""&&
                                            inputEmail.value.toLowerCase()!==""&&
                                            inputPassword.value.toLowerCase()!==""){
                                            submitBtnClicked(inputName.value.toLowerCase(),
                                            inputSurname.value.toLowerCase(),
                                            userNameInput.value.toLowerCase(),
                                            inputEmail.value.toLowerCase(),
                                            inputPassword.value.toLowerCase()
                                            )}}} value="Создать аккаунт"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
        )
}