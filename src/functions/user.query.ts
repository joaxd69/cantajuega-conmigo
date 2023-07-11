import { setUser } from "@/context/userSlice";
import store from "@/context/store";
import axios from "./axios";
import { RegisterBody, UserQueryResponse, loginBody } from "@/types/user.type";
import { authResponse, authenticated } from "@/types/auth.type";
import { setAuth } from "@/context/authSlice";
import { setLoading } from "@/context/loadingSlice";


export async function registerUser(body: RegisterBody) : Promise<void> {
  try {
    const query: UserQueryResponse = await axios.post("/user/register", body);
    if ("error" in query.data) throw new Error(query.data.error);
    localStorage.setItem("tkn", query?.data.token);
    store.dispatch(setUser(query?.data.user));
    return;
  } catch (error) {
    console.log(error);
  }
}

export async function loginUser(body: loginBody) : Promise<void> {
  try {
    const petition: UserQueryResponse = await axios.post("/user/login", body);
    if ("error" in petition.data) throw new Error(petition.data.error);
    localStorage.setItem("tkn", petition?.data.token);
    store.dispatch(setUser(petition?.data.user));
    store.dispatch(setAuth(true))
    alert(`bienvenido ${petition.data.user.firstName}`)
    return;
  } catch (error) {
    // Handle error here
    console.log(error);
    throw new Error("algo salio mal :(");
  }
}

export async function authUser(): Promise<void> {
  try {
    const query :authResponse = await axios.get('/user/auth');
  
    if ('message' in query.data){ 
      store.dispatch(setAuth(false))
    }
    if('user' in query.data&&'token' in query.data){
       store.dispatch(setUser(query.data.user))
       store.dispatch(setAuth(true))
      }
    return;
  } catch (error) {
    localStorage.removeItem('tkn');
    console.log(error);
  }
}

export async function logoutUser(): Promise<void> {  
  localStorage.removeItem('tkn');
  store.dispatch(setUser(null));
  store.dispatch(setAuth(false))
  return;
}

export async function updateUser(body: RegisterBody): Promise<void> {
  try {
    const query: UserQueryResponse = await axios.patch("/user/update", body);
    if ("error" in query.data) throw new Error(query.data.error);
    store.dispatch(setUser(query.data));
    return;
  } catch (error) {
    console.log(error);
  }
}


export async function loginwithGoogle(): Promise<void> {
  try {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
    return;
  } catch (error) {
    console.log(error);
  }
}