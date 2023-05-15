import { setUser } from "@/context/userSlice";
import store from "@/context/store";
import axios from "./axios";
import { RegisterBody, UserQueryResponse, loginBody } from "@/types/user.type";

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
    return;
  } catch (error) {
    // Handle error here
    console.log(error);
    throw new Error("algo salio mal :(");
  }
}

export async function authUser(): Promise<void> {
  try {
    const query : UserQueryResponse = await axios.get('/user/auth');
    
    if ('error' in query.data) throw new Error(query.data.error);
    store.dispatch(setUser(query.data.user));
    localStorage.setItem('tkn', query.data.token);
    return;
  } catch (error) {
    localStorage.removeItem('tkn');
    console.log(error);
  }
}

export async function logoutUser(): Promise<void> {
  localStorage.removeItem('token');
  store.dispatch(setUser(null));
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