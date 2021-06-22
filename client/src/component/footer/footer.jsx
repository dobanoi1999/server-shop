import React from "react";
import { ImLocation, ImPhone, ImFacebook, ImLinkedin2 } from "react-icons/im";
import { FiMail, FiGithub } from "react-icons/fi";
import {
  Footer,
  Container,
  Contact,
  ContactItem,
  About,
} from "./footer.element";
const footer = () => {
  return (
    <Footer>
      <Container>
        <Contact>
          <ContactItem>
            <div>
              <ImLocation size={30} />
            </div>
            <p>
              135B, Tran Hung Dao street, district 1, <strong>HCM city</strong>
            </p>
          </ContactItem>
          <ContactItem>
            <div>
              <ImPhone size={30} />
            </div>
            <p>+84 394 742 274</p>
          </ContactItem>
          <ContactItem>
            <div>
              <FiMail size={30} />
            </div>
            <p>dobanoi1999@gmail.com</p>
          </ContactItem>
        </Contact>
        <About>
          <p>About the company</p>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            quibusdam unde, quisquam repellat, veritatis et officiis nisi
            voluptatibus neque necessitatibus fugit. Hic vel accusantium itaque
            iure, qui repellat natus ex.0
          </span>
          <div>
            <a href="https://www.facebook.com/dobanoimap">
              <ImFacebook size={30} />
            </a>
            <a href="https://www.linkedin.com/in/do-noi-2a371b201/">
              <ImLinkedin2 size={30} />
            </a>
            <a href="https://github.com/dobanoi">
              <FiGithub size={30} />
            </a>
          </div>
        </About>
      </Container>
    </Footer>
  );
};

export default footer;
