import React, { useState } from "react";
import Image from "../Image";
import loginimg from "../../assets/loginimg.png";
import Container from "../Container";
import Heading from "../Heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";
import App from "../../../firebase.config";
import { FcGoogle } from "react-icons/fc";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  //Email
  const handleEmailInput = (e) => {
    setUserInfo((abc) => {
      return { ...abc, email: e.target.value };
    });
  };
  //Email
  //Password
  const handlePasswordInput = (e) => {
    setUserInfo((abc) => {
      return { ...abc, password: e.target.value };
    });
  };
  //Password

  // loginSubmitBtn

  const loginSubmitBtn = (e) => {
    e.preventDefault();
    if (userInfo.email && userInfo.password) {
      signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
        .then((userCredential) => {
           const user = userCredential.user;
           if(user.emailVerified){
            navigate("/dashboard")
           }else{
            toast.error("Verify your e-mail first")
           }
           
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  return (
    <>
      <Toaster />
      <div className="bg-gray-200">
        <Container className={"m-auto"}>
          <div className="flex items-center">
            <div className="w-1/2 ">
              <Heading
                text={"Login to your account!"}
                as={"h3"}
                className="font-nunito font-bold text-[20px] text-[#11175D] text-center"
              />
              <Card className="w-full max-w-sm m-auto">
                <CardContent>
                  <form onSubmit={loginSubmitBtn}>
                    <div className="flex flex-col gap-6">
                      <div className="flex gap-x-1 justify-center items-center">
                        <button
                          className="py-2 px-4 bg-gray-200 rounded-lg flex gap-x-1 items-center mt-8
                        "
                        >
                          <FcGoogle className="text-lg text-center " />
                          <span>Login with Google</span>
                        </button>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          type="email"
                          placeholder="m@example.com"
                          onChange={handleEmailInput}
                        />
                      </div>
                      <div className="grid gap-2">
                        <div className="flex items-center">
                          <Label htmlFor="password">Password</Label>
                        </div>
                        <Input
                          type="password"
                          placeholder="******"
                          onChange={handlePasswordInput}
                        />
                      </div>
                    </div>
                    <Button type="submit" className="w-full mt-8">
                      Login
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="w-1/2">
              <Image
                ImgSrc={loginimg}
                imgAlt={loginimg}
                className={"h-[400px]"}
              />
            </div>

            <input type="text" />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Login;
