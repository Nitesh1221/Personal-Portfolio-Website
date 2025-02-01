import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoStackoverflow } from "react-icons/io5";
import { LinkBtn } from "./Button";


const SocialContact = (props) => {
  const SocialContact = [
    { platform: "linkedin", url: "https://www.linkedin.com/nitesh7627" },
    { platform: "facebook", url: "https://www.linkedin.com/nitesh7627" },
    { platform: "instagram", url: "https://www.linkedin.com/nitesh7627" },
    { platform: "github", url: "https://www.linkedin.com/nitesh7627" },
    { platform: "stackoverflow", url: "https://www.linkedin.com/nitesh7627" },
  ];
  return (
    <ul className={`flex justify-end items-center ${props.classname}`}>
      
      {SocialContact.map((item) => {
        return (
          <LinkBtn link={item.url}>
            {item.platform === "linkedin" && (
              <IoLogoLinkedin
                className={`text-blue-500 size-8  ${props.linkedin} `}
              />
            )}
            {item.platform === "facebook" && (
              <IoLogoFacebook
                className={`text-blue-500 size-8 ${props.facebook}`}
              />
            )}
            {item.platform === "instagram" && (
              <IoLogoInstagram className={`  size-8 ${props.instagram}`} />
            )}
            {item.platform === "github" && (
              <IoLogoGithub
                className={`text-blue-500 size-8 ${props.github}`}
              />
            )}
            {item.platform === "stackoverflow" && (
              <IoLogoStackoverflow
                className={`text-orange-400 size-8 ${props.stackoverflow}`}
              />
            )}
          </LinkBtn>
        );
      })}
    </ul>
  );
};

export default SocialContact;
