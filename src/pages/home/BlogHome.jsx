import { FaHiking, FaLock } from "react-icons/fa";
import Hiking from "../../assets/hiking2.jpeg";

import HeroSection from "./HeroSection";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";

import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { Checkbox } from "@nextui-org/checkbox";
import { Link } from "react-router-dom";
import Navbar from "../../components/NavBar";

const BlogHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="relative h-screen bg-cover bg-center">
       
      <div className="absolute inset-0 bg-black opacity-60">
        
        <img className="w-full h-full object-cover" src={Hiking} alt="Hiking" />
      </div>
      <Navbar/>
      <div className="relative  mx-auto flex flex-col justify-end h-full px-6 py-20 text-white">
        <div className="flex justify-between items-center">
          <div className=" max-w-xl">
            <div className="bg-gray-900 bg-opacity-75 py-1 px-3 rounded-full text-sm font-semibold inline-block mb-4">
              Destination
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Exploring the Wonders of Hiking
            </h1>
            <p className="text-lg md:text-xl">
              {`An iconic landmark, this post unveils the secrets that make this destination a traveler's paradise.`}
            </p>
          </div>
          <div className="mt-6 flex items-center">
            <img
              className="w-12 h-12 rounded-full mr-4"
              src={Hiking}
              alt="Author"
            />
            <div>
              <p className="font-bold text-lg">Theodore Reginald</p>
              <p className="text-sm text-white">24 Jan 2024 • 10 mins read</p>
            </div>
          </div>
        </div>
      </div>
      <HeroSection />

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
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default BlogHome;

