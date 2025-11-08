import React, { useState } from "react";
import Image from "../Image";
import signupimg from "../../assets/signupimg.png";
import Container from "../Container";
import Heading from "../Heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast, { Toaster } from "react-hot-toast";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { useNavigate } from "react-router";
import App from "../../../firebase.config";

const SignUp = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  //Name
  const handleNameInput = (e) => {
    setUserInfo((abc) => {
      return { ...abc, name: e.target.value };
    });
  };
  //Name
  //Email
  const handleEmailInput = (e) => {
    setUserInfo((abc) => {
      return { ...abc, email: e.target.value };
    });
  };
  //E-mail
  //Password
  const handlePasswordInput = (e) => {
    setUserInfo((abc) => {
      return { ...abc, password: e.target.value };
    });
  };
  //Password

  //signUpSubmitBtn

  const signUpSubmitBtn = (e) => {
    e.preventDefault();
    // console.log(userInfo.name, userInfo.email, userInfo.password);
    if (!userInfo.name || !userInfo.email || !userInfo.password) {
      toast.error("credintial is missing");
      return;
    }
    createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
      .then((userCredential) => {
        const user = userCredential.user;
        // Signed up
        sendEmailVerification(user)
          .then(() => {
            updateProfile(auth.currentUser, {
              displayName: userInfo.name,
              photoURL: "../../assets/userPhoto.png",
            }).then(() => {
              toast.success("Verification email sent! Please verify your email before loging in");
              setTimeout(()=>{
                navigate("/login");

              },4000)
            });
          })
          .catch((error) => {
            toast.error("Couldnot update your profile");
          })
          .catch((error) => {
            toast.error("Faild to send verification e-mail");
          });
      })
      .catch((error) => {
        toast.error(error.message);
    
      });
  };

  return (
    <>
      <Toaster />
      <div className="bg-gray-100">
        <Container className={"m-auto"}>
          <div className="flex items-center">
            <div className="w-1/2 ">
              <Heading
                text={"Get started with easily register"}
                as={"h3"}
                className="font-nunito font-bold text-[20px] text-[#11175D] text-center"
              />
              <h5 className="font-nunito text-[16px] text-[#000000] opacity-42 mb-8 text-center">
                Free register and you can enjoy it
              </h5>
              <Card className="w-full max-w-sm m-auto">
                <CardContent>
                  <form onSubmit={signUpSubmitBtn}>
                    <div className="flex flex-col gap-6">
                      <div className="grid gap-2">
                        <Label htmlFor="text">Name</Label>
                        <Input
                          type="text"
                          placeholder="Enter Your Name"
                          onChange={handleNameInput}
                        />
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
                      Sign Up
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="w-1/2">
              <Image
                ImgSrc={signupimg}
                ImgAlt={signupimg}
                className={"h-[500px]"}
              />
            </div>

            <input type="text" />
          </div>
        </Container>
      </div>
    </>
  );
};

export default SignUp;
