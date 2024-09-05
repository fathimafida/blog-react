import { Button } from "@nextui-org/button";
import { FaHiking, FaLock } from "react-icons/fa";

import { Input } from "@nextui-org/input";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";

import { useState } from "react";
import { MdEmail, MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { Checkbox } from "@nextui-org/checkbox";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const handleSignUpOpen = () => setIsSignUpOpen(true);
  const handleSignUpClose = () => setIsSignUpOpen(false);
  return (
    <div className="w-full  h-16 flex  items-center justify-between  p-6 bg-transparent">
    <div className="flex items-center gap-2">
      <FaHiking className="text-2xl  text-black" />
      <h2 className="text-2xl font-bold  text-black">Traveler</h2>
    </div>
    <div className="justify-center">
      <ul className="flex   space-x-6 ml-8 text-black ">
        <li>Hotel</li>
        <li>Flight</li>
        <li>Train</li>
        <li>Travel</li>
        <li>Car Rental</li>
      </ul>
    </div>
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search destination..."
        className="px-4 py-2 bg-black bg-opacity-25 text-white rounded-md placeholder-white"
      />
    </div>
    <div>
      <Button onClick={handleOpen} className="bg-transparent text-black text-lg">Login</Button>
      <Button onClick={handleSignUpOpen} className=" text-lg">Sign Up</Button>
    </div>
    <Modal
        isOpen={isOpen}
        onClose={handleClose}
        placement="top-center"
      >
        <ModalContent>
          {(handleClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <MdEmail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                />
                <Input
                  endContent={
                    <FaLock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={handleClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleClose}>
                  Login
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal
        isOpen={isSignUpOpen}
        onClose={handleSignUpClose}
        placement="top-center"
      >
        <ModalContent>
          {(handleSignUpClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
              <Input
                  autoFocus
                  endContent={
                    <MdOutlineDriveFileRenameOutline className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Name"
                  placeholder="Enter your name"
                  variant="bordered"
                />
                <Input
                  autoFocus
                  endContent={
                    <MdEmail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                />
                <Input
                  endContent={
                    <FaLock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={handleSignUpClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleSignUpClose}>
                  Sign up
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
  </div>
  );
};

export default Navbar;
