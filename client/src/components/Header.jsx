import { Button, Navbar, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineSearch} from 'react-icons/ai'

export default function Header() {
  return (
    <Navbar className="border-b-2">
      <Link to="/dashboard">
        <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white">
          Rehnuma's Blog
        </span>
      </Link>
      <form>
        <TextInput
        type="text"
        placeholder="Search..."
        rightIcon={AiOutlineSearch}
        // className="hidden lg:inline"
        />
      </form>
      <Button gradientDuoTone="redToYellow">Red to Yellow</Button>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
