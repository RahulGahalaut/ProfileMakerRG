import Heading from "../../../../../../Components/DesignSystem/Heading";
import ImgCenter from "../../../../../../Components/DesignSystem/ImgCenter";
import InfoWrapper from "../../../../../../Components/DesignSystem/InfoWrapper";
import ParasWrap from "../../../../../../Components/DesignSystem/ParasWrap";
import Paragraph from "../../../../../../Components/DesignSystem/Paragraph";
import profilePic from "../../../../../../Assets/Images/profile.jpeg";

const About = () => {
  return (
    <InfoWrapper id="about">
      <div className="flex flex-col gap-2">
        <ImgCenter src={profilePic} />
        <article className="flex flex-col gap-2">
          <Heading>Hey, Do you know me?</Heading>
          <ParasWrap>
            <Paragraph>
              I'm a passionate software developer with expertise in React and
              JavaScript. I enjoy building web applications and creating
              user-friendly interfaces. With a strong focus on writing clean and
              maintainable code, I strive to deliver high-quality solutions. In
              my free time, I love exploring new technologies, contributing to
              open-source projects, and continuously learning to improve my
              skills. I'm excited about the endless possibilities in the world
              of software development and enjoy being part of a collaborative
              and innovative team.
            </Paragraph>
            <Paragraph>
              If you want to connect with me then just go to Contact section
              where i have provided my contact details.
            </Paragraph>
          </ParasWrap>
        </article>
      </div>
    </InfoWrapper>
  );
};

export default About;
