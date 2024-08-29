import { useContext, useState } from "react";
import {
  AuthBase,
  AuthVisual,
  Button,
  Form,
  Input,
  TextRedirect,
} from "../components/AuthComponents";
import { LoginAPI } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/context";
import styled from "styled-components";

const ErrText = styled(TextRedirect)`
color:red;
`;

const Masuk = () => {
  const navigate = useNavigate()
  const {setAndGetTokens} = useContext(AuthContext);
  const [data, setData] = useState({email:"", password:""})
  const [isError, setError] = useState<boolean>(false);
  
  const handleSubmit= async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res:any = await LoginAPI(data.email, data.password)
      setData({email:"", password:""})
      console.log(res?.user);
      localStorage.setItem("token", res?.user?.accessToken)
      localStorage.setItem("name", res?.user?.displayName)
      setAndGetTokens(res?.user?.accessToken, res?.user?.displayName)
      navigate("/",  { replace: true });
    } catch (error) {
      console.log(error);
      setError(true)
    }
  };
  return (
    <>
      <AuthBase>
        <div>
          <AuthVisual />
          <center>
            <Form action="" onSubmit={handleSubmit}>
              <Input placeholder="Email" type="email" onChange={(e)=>setData({...data,email:e.target.value})} required/>
              <Input placeholder="Password" type="password" onChange={(e)=>setData({...data, password:e.target.value})} required/>
              <Button type="submit">Masuk</Button>
              <TextRedirect>Belum punya akun? <a href="/daftar">Daftar</a></TextRedirect>
              {isError && <ErrText>Periksa kembali email dan password Anda</ErrText>}
            </Form>
          </center>
        </div>
      </AuthBase>
    </>
  );
};

export default Masuk;
