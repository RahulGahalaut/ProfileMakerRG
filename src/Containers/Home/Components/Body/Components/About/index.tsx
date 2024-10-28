import Heading from "@/Components/DesignSystem/Heading";
import ImgCenter from "@/Components/DesignSystem/ImgCenter";
import InfoWrapper from "@/Components/DesignSystem/InfoWrapper";
import profilePic from "@/Assets/Images/profile.jpeg";
import ParaGroup from "@/Components/DesignSystem/ParaGroup";

const About = () => {
  const aboutParas = [
    "I'm a passionate software developer with expertise in React and JavaScript. I enjoy building web applications and creating user-friendly interfaces. With a strong focus on writing clean and maintainable code, I strive to deliver high-quality solutions. In my free time, I love exploring new technologies, contributing to open-source projects, and continuously learning to improve my skills. I'm excited about the endless possibilities in the world of software development and enjoy being part of a collaborative and innovative team.",
    "If you want to connect with me then just go to Contact section where i have provided my contact details."
  ];
  return (
    <InfoWrapper id="about">
      <div className="flex flex-col gap-2">
        <ImgCenter src={profilePic} />
        <article className="flex flex-col gap-2">
          <Heading>Hey, do you know me?</Heading>
          <ParaGroup
            paras={aboutParas}
            showWriteEffect={true}
          />
        </article>
      </div>
    </InfoWrapper>
  );
};

export default About;
