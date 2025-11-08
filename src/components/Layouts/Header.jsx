import React from "react";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import logo from "../../assets/logo.png";
import { Link } from "react-router";
import Container from "../Container";


const Header = () => {
  return (
    <>
      <div className="py-3 bg-gray-100">
        <Container className="m-auto">
          <div className="flex justify-between items-center">
            <div className="">
              <img src={logo} alt="logo" className="w-8 " />
            </div>
            <div className="">
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>
                    <Link to="/">Home</Link>
                  </MenubarTrigger>
                  <MenubarTrigger>
                    <Link to="/signup">SignUp</Link>
                  </MenubarTrigger>
                  <MenubarTrigger>
                    <Link to="/login">Login</Link>
                  </MenubarTrigger>
                </MenubarMenu>
              </Menubar>
            </div>
            <div className="">
              <button className="py-3 px-4 bg-[#201746] text-white font-semibold rounded-lg">
                SignUp
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
