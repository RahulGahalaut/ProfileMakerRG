import Article from "../../../../../../Components/DesignSystem/Article";
import Heading from "../../../../../../Components/DesignSystem/Heading";
import InfoWrapper from "../../../../../../Components/DesignSystem/InfoWrapper";
import Paragraph from "../../../../../../Components/DesignSystem/Paragraph";
import WorkOrLearningPlace from "../../../../../../Components/DesignSystem/WorkOrLearningPlace";

const Experience = () => {
  return (
    <InfoWrapper id="experience">
      <div className="flex flex-col gap-4">
        <Heading>How I got so far?</Heading>
        <Article>
          <section>
            <WorkOrLearningPlace
              title={"Software Engineer"}
              place={"BYJU'S"}
              href="https://byjus.com/"
              abbr={"Think and Learn Private Limited"}
              start={"June 2022"}
              end={"March 2023"}
            />
            <div className="flex flex-col gap-2 pl-4 pt-2">
              <Paragraph>
                During my tenure at BYJU's, I spearheaded multiple critical
                infrastructure projects that underscored my proficiency in React
                JS and security management. One of my primary responsibilities
                was developing an Employee Access Management Dashboard, aimed at
                centralizing and enhancing access controls organization-wide.
                This project involved designing intuitive interfaces and
                integrating robust authentication mechanisms, including
                multi-factor authentication, to ensure secure user access.
              </Paragraph>
              <Paragraph>
                Concurrently, I led the development of a Team-Based AWS Secret
                Management System, leveraging React JS to streamline credential
                management across teams. This system integrated role-based
                access controls and OAuth authentication, enhancing security
                while simplifying access management workflows. These initiatives
                not only fortified BYJU's security posture but also optimized
                operational efficiency, showcasing my ability to innovate and
                deliver impactful solutions in a dynamic corporate environment.
              </Paragraph>
            </div>
          </section>
          <section>
            <WorkOrLearningPlace
              title={"SDE-1"}
              place={"DotPe"}
              abbr={"DotPe Private Limited"}
              start={"October 2023"}
              end={new Intl.DateTimeFormat("en-US", {
                month: "long",
                year: "numeric",
              }).format(new Date())}
            />
            <div className="flex flex-col gap-4 pl-4 pt-2">
              <Paragraph>
                During my tenure at Dotpe, I spearheaded several key projects
                that significantly enhanced the functionality and user
                experience of our merchant websites. One of my notable
                contributions was the implementation of an email-based login
                system, which provided a secure and user-friendly authentication
                method. Additionally, I integrated Facebook Pixel to enable
                precise tracking of user interactions, thereby helping merchants
                optimize their advertising efforts and measure the effectiveness
                of their campaigns. I also developed SEO best practices tooltips
                to guide merchants during product creation, ensuring that their
                listings were optimized for better search engine visibility.
              </Paragraph>
              <Paragraph>
                Another major project I undertook was the design and
                implementation of an exit gating popup for the merchant's
                website, aimed at retaining users who were about to leave the
                page. To complement this, I built an editor within the
                merchant's dashboard, allowing merchants to easily customize and
                preview their exit popups. Furthermore, I worked on introducing
                infinite loading across various pages, enhancing user experience
                by enabling continuous content scrolling without interruptions.
                I also ensured that our web applications were webview-friendly,
                providing a seamless experience for users accessing the site via
                mobile apps and embedded browsers.
              </Paragraph>
              <Paragraph>
                My role also involved implementing best practices for Google
                Shopping to optimize product listings for better visibility and
                performance. Additionally, I developed a comprehensive path flow
                for website themes, including theme demos and the theme purchase
                process. This initiative made it easier for merchants to
                preview, select, and purchase themes, thereby improving the
                overall user experience on their stores. These projects allowed
                me to leverage my frontend development skills and contribute to
                the ongoing improvement of Dotpe's merchant platforms, ensuring
                they remain robust, user-friendly, and competitive in the
                market.
              </Paragraph>
            </div>
          </section>
        </Article>
      </div>
    </InfoWrapper>
  );
};

export default Experience;
