import { useContext, useState } from "react";
import { RegisterAPI } from "../api/auth";
import {
  AuthBase,
  AuthVisual,
  Button,
  Form,
  Input,
  TextRedirect,
} from "../components/AuthComponents";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/context";

const Daftar = () => {
  const navigate = useNavigate()
  const {setAndGetTokens} = useContext(AuthContext);
  const [data, setData] = useState({nama:"", email:"", password:""})
  const handleSubmit= async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res:any = await RegisterAPI(data.email, data.password, data.nama)
      setData({nama:"", email:"", password:""})
      console.log(res);
      localStorage.setItem("token", res?.user?.accessToken)
      localStorage.setItem("name", res?.user?.displayName)
      setAndGetTokens(res?.user?.accessToken, res?.user?.displayName)
      navigate("/",  { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <AuthBase>
        <div>
          <AuthVisual />
          <center>
            <Form action="" onSubmit={handleSubmit}>
              <Input placeholder="Nama" onChange={(e)=>setData({...data, nama:e.target.value})} required/>
              <Input placeholder="Email" type="email" onChange={(e)=>setData({...data, email:e.target.value})} required/>
              <Input placeholder="Password" type="password" onChange={(e)=>setData({...data, password:e.target.value})} required/>
              <Button type="submit">Daftar</Button>
              <TextRedirect>Sudah punya akun? <a href="/masuk">Masuk</a></TextRedirect>
            </Form>
          </center>
        </div>
      </AuthBase>
    </>
  );
};

export default Daftar;
