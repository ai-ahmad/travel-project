import React, { useState, useRef } from "react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";

const MyModal = (props) => {
  console.log(props);
  const [openModal, setOpenModal] = useState(undefined); // Initialize state
  const emailInputRef = useRef(null);

  return (
    <>
      {props.openModal && (
        <Modal
          show={props.openModal === "initial-focus"}
          size="md"
          popup
          onClose={() => props.setOpenModal(undefined)}
          initialFocus={props.emailInputRef}
        >
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Sign in to our platform
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput
                  id="email"
                  ref={props.emailInputRef}
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput id="password" type="password" required />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Remember me</Label>
                </div>
                <a
                  href="/modal"
                  className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
                >
                  Lost Password?
                </a>
              </div>
              <div className="w-full">
                <Button>Log in to your account</Button>
              </div>
              <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?&nbsp;
                <a
                  href="/modal"
                  className="text-cyan-700 hover:underline dark:text-cyan-500"
                >
                  Create account
                </a>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default MyModal;
