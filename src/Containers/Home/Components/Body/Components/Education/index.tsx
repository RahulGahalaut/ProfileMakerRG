import Article from "../../../../../../Components/DesignSystem/Article";
import Heading from "../../../../../../Components/DesignSystem/Heading";
import InfoWrapper from "../../../../../../Components/DesignSystem/InfoWrapper";
import Paragraph from "../../../../../../Components/DesignSystem/Paragraph";
import WorkOrLearningPlace from "../../../../../../Components/DesignSystem/WorkOrLearningPlace";

const Education = () => {
  return (
    <InfoWrapper id={"education"}>
      <div className="flex flex-col gap-4">
        <Heading>Learn before execution</Heading>
        <Article>
          <section>
            <WorkOrLearningPlace
              title={"B.Tech (IT)"}
              place={"MNNIT Allahabad"}
              abbr={"Motilal nehru national institute of technology, Allahabad"}
              start={"July 2018"}
              end={"May 2022"}
            />
            <div className="flex flex-col gap-2 pl-4 pt-2">
              <Paragraph>
                I completed my B.Tech in Information Technology from Motilal
                Nehru National Institute of Technology (MNNIT). Renowned for its
                rigorous academic curriculum and vibrant campus life, MNNIT
                provided me with a robust foundation in both theoretical and
                practical aspects of IT. The institute's emphasis on hands-on
                projects, supported by state-of-the-art laboratories, allowed me
                to gain significant experience in software development, data
                structures, algorithms, and emerging technologies. My time at
                MNNIT was instrumental in honing my technical skills and
                fostering a deep interest in technology, effectively preparing
                me for a successful career in the IT industry.
              </Paragraph>
            </div>
          </section>
          <section>
            <WorkOrLearningPlace
              title={"6th - 12th"}
              place={"JNV Agra"}
              abbr={"Jawahar navodaya Vidyalaya, Agra"}
              start={"July 2010"}
              end={"May 2017"}
            />
            <div className="flex flex-col gap-2 pl-4 pt-2">
              <Paragraph>
                I completed my high school education at Jawahar Navodaya
                Vidyalaya, Agra, an esteemed institution renowned for its
                dedication to nurturing talent among rural students across
                India. At JNV Agra, I immersed myself in a vibrant academic
                environment that emphasized holistic development and excellence
                in education. This experience not only provided me with a solid
                academic foundation but also instilled in me values of
                perseverance, community, and leadership.
              </Paragraph>
              <Paragraph>
                Continuing my education at Jawahar Navodaya Vidyalaya, Agra for
                my 12th grade, I further deepened my academic pursuits in a
                supportive and enriching environment. This phase at JNV Agra
                allowed me to focus intensely on my studies, preparing me for
                the challenges and opportunities ahead in higher education and
                my career aspirations in technology.
              </Paragraph>
            </div>
          </section>
        </Article>
      </div>
    </InfoWrapper>
  );
};

export default Education;
