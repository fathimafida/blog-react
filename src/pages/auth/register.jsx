import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import { MdEmail, MdPerson } from "react-icons/md";
import { Checkbox } from "@nextui-org/checkbox";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {  registerWithEmailAndPassword } from "../../redux/slice/AuthSlice";
import { toast } from "sonner";
import { FaLock } from "react-icons/fa";

const RegisterPage = () => {


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {

      await dispatch(registerWithEmailAndPassword({ email, password,name } ,)).unwrap();
      toast.success("registered Successfully");
      navigate("/login");
    } catch (error) {
      toast.error("Register failed: " + error.message);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-200 to-purple-300">
      <form
        id="register"
        className="flex flex-col gap-6 border-2 p-10 rounded-2xl shadow-lg bg-white max-w-lg w-full"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        <Input
          name="name"
          required
          autoFocus
          endContent={
            <MdPerson className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          label="Name"
          placeholder="Enter your name"
          variant="bordered"
          className="w-full"
        />
        <Input
          name="email"
          required
          autoFocus
          endContent={
            <MdEmail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          label="Email"
          placeholder="Enter your email"
          variant="bordered"
          className="w-full"
        />
        <Input
          name="password"
          required
          endContent={
            <FaLock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          label="Password"
          placeholder="Enter your password"
          type="password"
          variant="bordered"
          className="w-full"
        />
        <div className="flex justify-between w-full">
          <Checkbox
            classNames={{
              label: "text-small",
            }}
          >
            Remember me
          </Checkbox>
          <Link className="text-sm text-blue-500 hover:underline" to="/forgot-password">
            Forgot password?
          </Link>
        </div>
        <div className="flex justify-between gap-4 w-full">
          
          <Button form="register" color="primary" type="submit" className="w-full">
            Sign up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
