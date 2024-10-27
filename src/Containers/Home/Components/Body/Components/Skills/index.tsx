import Article from "../../../../../../Components/DesignSystem/Article";
import Heading from "../../../../../../Components/DesignSystem/Heading";
import HeadingSecondary from "../../../../../../Components/DesignSystem/HeadingSecondary";
import InfoWrapper from "../../../../../../Components/DesignSystem/InfoWrapper";
import Paragraph from "../../../../../../Components/DesignSystem/Paragraph";
import WorkOrLearningPlace from "../../../../../../Components/DesignSystem/WorkOrLearningPlace";

const Skills = () => {
  return (
    <InfoWrapper id={"skills"}>
      <Heading>What makes me stronger?</Heading>
      <Article>
        <section>
          <HeadingSecondary>Tech stack</HeadingSecondary>
          <div className="flex flex-col gap-2 pl-4 pt-2">
            <Paragraph>
              During my tenure at BYJU's, I spearheaded multiple critical
              infrastructure projects that underscored my proficiency in React
              JS and security management. One of my primary responsibilities was
              developing an Employee Access Management Dashboard, aimed at
              centralizing and enhancing access controls organization-wide. This
              project involved designing intuitive interfaces and integrating
              robust authentication mechanisms, including multi-factor
              authentication, to ensure secure user access.
            </Paragraph>
            <Paragraph>
              Concurrently, I led the development of a Team-Based AWS Secret
              Management System, leveraging React JS to streamline credential
              management across teams. This system integrated role-based access
              controls and OAuth authentication, enhancing security while
              simplifying access management workflows. These initiatives not
              only fortified BYJU's security posture but also optimized
              operational efficiency, showcasing my ability to innovate and
              deliver impactful solutions in a dynamic corporate environment.
            </Paragraph>
          </div>
        </section>
      </Article>
    </InfoWrapper>
  );
};

export default Skills;
