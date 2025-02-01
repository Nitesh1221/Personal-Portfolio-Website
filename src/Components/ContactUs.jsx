import React from "react";
import InputBox, { TextareaBox } from "./InputBox";
import Group from "./Group";
import Button, { FormBtn } from "./Button";

const ContactUs = () => {
  return (
    <form action="" method="post" className="flex justify-center ">
      <Group className="  ">
        <div>
          <table>
            <InputBox labelText="name" type="text" name="name" id="name" />
            <InputBox labelText="e-mail" type="email" name="email" id="email" />
            <InputBox labelText="Phone no." type="text" name="name" id="name" />
            <InputBox labelText="name" type="text" name="name" id="name" />
            <TextareaBox labelText="About youself" name="aboutyourself" id="yourself" />
          </table>

          <div className=" pt-5 flex gap-5 justify-end ">
            <FormBtn
              type="reset"
              text="reset form"
              className="bg-red-500  "
            ></FormBtn>
            <FormBtn type="submit" text="submit now"></FormBtn>
          </div>
        </div>
      </Group>
    </form>
  );
};

export default ContactUs;
