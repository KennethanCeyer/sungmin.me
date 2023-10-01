import Layout from "@/components/Layout";
import styled from "@emotion/styled";
import React from "react";

const HomeContainer = styled.main({
  display: "flex",
  flexDirection: "column",
  rowGap: 120,
  fontSize: 16,
});

const Section = styled.section({
  display: "flex",
  flexDirection: "row",
  columnGap: 20,
});

const SectionTitle = styled.h1({
  fontSize: 28,
  margin: 0,
  padding: 0,
  border: 0,
  lineHeight: 1,
});

const SectionHeader = styled.div({
  minWidth: 280,
});

const SectionBody = styled.div({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  rowGap: 40,
});

const SectionSubTitle = styled.h2({
  fontSize: 24,
  margin: 0,
  padding: 0,
  border: 0,
  lineHeight: 1,
});

const ContentGroup = styled.div({});

const ContentItem = styled.p({
  margin: 0,
  padding: 0,
  lineHeight: 2,
});

const Table = styled.table({
  width: "100%",
  margin: 0,
  textAlign: "left",
});

const TableBody = styled.tbody({});

const TableRow = styled.tr({
  verticalAlign: "top",
  "th, td": {
    paddingBottom: 20,
  },
  "&:last-child": {
    "th, td": {
      paddingBottom: 0,
    },
  },
});

const TableHeader = styled.th({
  paddingRight: 20,
});

const TableCell = styled.td({
  fontSize: 16,
});

const TextTight = styled.span({
  lineHeight: 1,
});

const TextDecoSub = styled.span({
  color: "#aaa",
  fontSize: 14,
  fontWeight: 400,
});

const TextDecoLight = styled.span({
  display: "block",
  color: "#555",
  fontWeight: 400,
  fontSize: 16,
  marginTop: -4,
});

const WorkList = styled.ul({
  listStyle: "none",
  fontSize: 14,
  color: "#555",
  padding: 0,
  margin: 0,
});
const WorkItem = styled.li({});
const WorkItemImportant = styled.span({
  fontWeight: 600,
  textDecoration: "underline",
  color: "#000",
});
const WorkDetails = styled.div({
  marginTop: 10,
  fontSize: 14,
  color: "#555",
});

const Link = styled.a({
  color: "#555",
  textDecoration: "underline",
  "&:hover": {
    color: "#000",
  },
});

const Home: React.FC = () => {
  return (
    <Layout header={false}>
      <HomeContainer>
        <Section>
          <SectionHeader>
            <SectionTitle>Sungmin Han</SectionTitle>
          </SectionHeader>
          <SectionBody>
            <ContentGroup>
              <ContentItem>MLOps Lead at Riiid</ContentItem>
              <ContentItem>
                Google Developer Experts(GDE) for Machine Learning
              </ContentItem>
              <ContentItem>
                Google Developer Groups(GDG) for Golang Korea
              </ContentItem>
            </ContentGroup>
            <ContentGroup>
              <ContentItem>
                Currently living in <b>Seoul, South Korea</b>
              </ContentItem>
              <ContentItem>
                (Need support for Visa for overseas relocation)
              </ContentItem>
            </ContentGroup>
            <ContentGroup>
              <ContentItem>+82 1036167981</ContentItem>
              <ContentItem>
                <Link
                  className="text-slate-500"
                  href="mailto://kenneth@pigno.se"
                  target="_blank"
                >
                  kenneth@pigno.se
                </Link>
              </ContentItem>
            </ContentGroup>
            <ContentGroup>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeader>LinkedIn</TableHeader>
                    <TableCell>
                      <Link
                        href="https://www.linkedin.com/in/sungmin-han-768419133/"
                        target="_blank"
                      >
                        https://www.linkedin.com/in/sungmin-han-768419133/
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeader>GitHub</TableHeader>
                    <TableCell>
                      <Link
                        href="https://github.com/kennethanceyer"
                        target="_blank"
                      >
                        https://github.com/kennethanceyer
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeader>Speaker Deck</TableHeader>
                    <TableCell>
                      <Link
                        href="https://speakerdeck.com/kennethanceyer"
                        target="_blank"
                      >
                        https://speakerdeck.com/kennethanceyer
                      </Link>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ContentGroup>
          </SectionBody>
        </Section>
        <Section>
          <SectionHeader>
            <SectionSubTitle>Career</SectionSubTitle>
          </SectionHeader>
          <SectionBody>
            <Table>
              <TableBody>
                <TableRow>
                  <TableHeader style={{ width: 240 }}>
                    <TextTight>
                      <b>Riiid</b>
                      <TextDecoSub>&nbsp;-&nbsp;2.8 years</TextDecoSub>
                      <br />
                      <TextDecoLight>as MLOps Lead</TextDecoLight>
                    </TextTight>
                  </TableHeader>
                  <TableCell>
                    <TextDecoLight>2021.01 ~ Current</TextDecoLight>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHeader style={{ width: 240 }}>
                    <TextTight>
                      <b>Naver Clova</b>
                      <TextDecoSub>&nbsp;-&nbsp;2.5 years</TextDecoSub>
                      <br />
                      <TextDecoLight>as Research Engineer</TextDecoLight>
                    </TextTight>
                  </TableHeader>
                  <TableCell>
                    <TextDecoLight>2018.07 ~ 2020.12</TextDecoLight>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHeader style={{ width: 240 }}>
                    <TextTight>
                      <b>IGAWorks</b>
                      <TextDecoSub>&nbsp;-&nbsp;2.8 years</TextDecoSub>
                      <br />
                      <TextDecoLight>as Software Engineer</TextDecoLight>
                    </TextTight>
                  </TableHeader>
                  <TableCell>
                    <TextDecoLight>2015.11 ~ 2018.05</TextDecoLight>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHeader>
                    <TextTight>
                      <b>JisikLog</b>
                      <TextDecoSub>&nbsp;-&nbsp;0.7 years</TextDecoSub>
                      <br />
                      <TextDecoLight>as Software Engineer</TextDecoLight>
                    </TextTight>
                  </TableHeader>
                  <TableCell>
                    <TextDecoLight>2015.02 ~ 2015.08</TextDecoLight>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </SectionBody>
        </Section>
        <Section>
          <SectionHeader>
            <SectionSubTitle>Tech Stack</SectionSubTitle>
          </SectionHeader>
          <SectionBody>
            <Table>
              <TableBody>
                <TableRow>
                  <TableHeader style={{ width: 260 }}>Language</TableHeader>
                  <TableCell>
                    Python, Golang, Typescript, Kotlin, and C#
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHeader style={{ width: 260 }}>
                    ML Engineering
                  </TableHeader>
                  <TableCell>
                    Kubeflow, BentoML, MLFlow, Feature Store, Pytorch,
                    Tensorflow, and Keras
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHeader style={{ width: 260 }}>
                    Data Engineering
                  </TableHeader>
                  <TableCell>
                    <ContentItem>
                      Spark, Kafka, Databricks, BigQuery, Athena, Redshift,
                      Confluent, Airflow, and Fivetran
                    </ContentItem>
                    <ContentItem>
                      Has experience in CDC-based pipelines and ETL/ELT and
                      leads architecture design.
                    </ContentItem>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHeader style={{ width: 260 }}>
                    Backend Engineering
                  </TableHeader>
                  <TableCell>
                    GitHub (w/ Actions), Docker, CI/CD, Clean code (w/ Quality
                    gate), Software architecture, and Testing (w/ Unit and
                    Integrated test)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHeader style={{ width: 260 }}>Cloud</TableHeader>
                  <TableCell>
                    <ContentItem>AWS, GCP, and Azure</ContentItem>
                    <ContentItem>
                      Adopted and used all three CSPs in my work.
                    </ContentItem>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHeader style={{ width: 260 }}>
                    Infrastructure
                  </TableHeader>
                  <TableCell>
                    <ContentItem>AWS, GCP, and Azure</ContentItem>
                    <ContentItem>
                      Kubernetes, Helm chart, Terraform, Ansible, ArgoCD,
                      APMs(Grafana, Prometheus)
                    </ContentItem>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHeader style={{ width: 260 }}>
                    Domain knowledge
                  </TableHeader>
                  <TableCell>
                    Education, Chatbot (w/ NLU and NLP), and Dialog system (w/
                    Telephony network, SIP, SDP, and RTP)
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </SectionBody>
        </Section>
        <Section>
          <SectionHeader>
            <SectionSubTitle>Education</SectionSubTitle>
          </SectionHeader>
          <SectionBody>
            <Table>
              <TableBody>
                <TableRow>
                  <TableHeader style={{ width: 160 }}>Bachlor</TableHeader>
                  <TableCell>
                    <ContentItem>Soongsil University</ContentItem>
                    <ContentItem>Media (Graphics Programming)</ContentItem>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHeader style={{ width: 160 }}>Audit</TableHeader>
                  <TableCell>
                    <ContentItem>
                      Korea Advanced Institute of Science &amp; Technology
                      (KAIST)
                    </ContentItem>
                    <ContentItem>
                      Deep Learning course completion (AI502)
                    </ContentItem>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </SectionBody>
        </Section>
        <Section>
          <SectionHeader>
            <SectionSubTitle>Language</SectionSubTitle>
          </SectionHeader>
          <SectionBody>
            <Table>
              <TableBody>
                <TableRow>
                  <TableHeader style={{ width: 160 }}>English</TableHeader>
                  <TableCell>Upper-intermediate</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeader style={{ width: 160 }}>Korean</TableHeader>
                  <TableCell>Native</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeader style={{ width: 160 }}>Japanese</TableHeader>
                  <TableCell>Intermediate</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </SectionBody>
        </Section>
        <Section>
          <SectionHeader>
            <SectionSubTitle>Certifications</SectionSubTitle>
          </SectionHeader>
          <SectionBody>
            <Table>
              <TableBody>
                <TableRow>
                  <TableHeader style={{ width: 240 }}>
                    CCNP Routing
                    <span className="font-normal text-slate-500 ml-2">
                      (Cisco)
                    </span>
                  </TableHeader>
                  <TableCell>
                    <TextDecoLight>2015.07</TextDecoLight>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHeader style={{ width: 240 }}>
                    OCJP
                    <span className="font-normal text-slate-500 ml-2">
                      (Oracle)
                    </span>
                  </TableHeader>
                  <TableCell>
                    <TextDecoLight>2012.10</TextDecoLight>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHeader style={{ width: 240 }}>
                    CCNA
                    <span className="font-normal text-slate-500 ml-2">
                      (Cisco)
                    </span>
                  </TableHeader>
                  <TableCell>
                    <TextDecoLight>2012.07</TextDecoLight>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </SectionBody>
        </Section>
        <Section>
          <SectionHeader>
            <SectionSubTitle>Work</SectionSubTitle>
          </SectionHeader>
          <SectionBody>
            <Table>
              <TableBody>
                <TableRow>
                  <TableHeader style={{ width: 240 }}>
                    <TextTight>
                      <b>Riiid</b>
                      <br />
                      <TextDecoLight>MLOps</TextDecoLight>
                    </TextTight>
                  </TableHeader>
                  <TableCell>
                    <WorkList>
                      <WorkItem>
                        [1]{" "}
                        <WorkItemImportant>
                          Leading the product team and the MLOps team
                        </WorkItemImportant>
                        .
                      </WorkItem>
                      <WorkItem>
                        [2] Serving a total of{" "}
                        <WorkItemImportant>8+ ML models</WorkItemImportant>{" "}
                        (Knowledge Tracing, Score prediction, and Recommender
                        System) and supporting 3 B2C and 6 B2B businesses.
                      </WorkItem>
                      <WorkItem>
                        [3] Creating and leading a product team for a generative
                        service with an LLM. (
                        <Link href="https://quizium.ai" target="_blank">
                          https://quizium.ai
                        </Link>
                        )
                      </WorkItem>
                      <WorkItem>
                        [4]{" "}
                        <WorkItemImportant>
                          Primary English language communication
                        </WorkItemImportant>{" "}
                        with team members based in the US and Portugal.
                      </WorkItem>
                      <WorkItem>
                        [5]{" "}
                        <WorkItemImportant>
                          Leading a collaborative project in Brazil.
                        </WorkItemImportant>
                      </WorkItem>
                    </WorkList>
                    <WorkDetails>
                      details:
                      <WorkList>
                        <WorkItem>
                          [a] Designing data structures and configuring CDC
                          pipelines based on Databricks and Confluent.
                        </WorkItem>
                        <WorkItem>
                          [b] Build and Operate an A100 SXM5 GPU Cluster.
                        </WorkItem>
                        <WorkItem>
                          [c] Configure Airflow 2.4.x with Kubernetes Executor.
                        </WorkItem>
                        <WorkItem>
                          [d] For Databricks, read through the entire Spark and
                          DeltaLake configuration and Unity Catalog
                          configuration.
                        </WorkItem>
                      </WorkList>
                    </WorkDetails>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHeader style={{ width: 240 }}>
                    <TextTight>
                      <b>Naver Clova</b>
                      <br />
                      <TextDecoLight>Clova AICall</TextDecoLight>
                    </TextTight>
                  </TableHeader>
                  <TableCell>
                    <WorkList>
                      <WorkItem>
                        [1] Served as a{" "}
                        <WorkItemImportant>core engineer</WorkItemImportant>{" "}
                        during the initial team-building phase of the voiced
                        chatbot system
                      </WorkItem>
                      <WorkItem>
                        [2] Experienced the entire process from initial design
                        to launch, and monetized the product by integrating it
                        with a Japanese courier service.
                      </WorkItem>
                    </WorkList>
                    <WorkDetails>
                      details:
                      <WorkList>
                        <WorkItem>
                          [a] Developed a dialogue engine connecting TTS, STT,
                          and NLU.
                        </WorkItem>
                        <WorkItem>
                          [b] Developed services for VoIP technologies including
                          RTP and SIP/SDP in Go language and implement encoding
                          algorithms such as G.711.
                        </WorkItem>
                        <WorkItem>
                          [c] Design and operate a high-availability
                          architecture that is structured to withstand 2,000 RPS
                          or more.
                        </WorkItem>
                        <WorkItem>
                          [d] Participated in TensorRT and Pytorch serving
                          optimization work.
                        </WorkItem>
                        <WorkItem>
                          [e] Leading Japanese engineers and collaborative
                          projects with Japanese engineers.
                        </WorkItem>
                      </WorkList>
                    </WorkDetails>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHeader style={{ width: 240 }}>
                    <TextTight>
                      <b>IGAWorks</b>
                      <br />
                      <TextDecoLight>Campaign Intelligence</TextDecoLight>
                    </TextTight>
                  </TableHeader>
                  <TableCell>
                    <WorkList>
                      <WorkItem>
                        [1] Participated in major development from{" "}
                        <WorkItemImportant>
                          initial team building to launching
                        </WorkItemImportant>
                        .
                      </WorkItem>
                      <WorkItem>
                        [2] A BI solution that requires pivoting, aggregation,
                        and visualization of the required data in the format
                        requested by the UI, with approximately 100 million data
                        sets per customer.
                      </WorkItem>
                      <WorkItem>
                        [3] Distributed processing for interactive queries and
                        query builder development that changes depending on the
                        database type are the main features.
                      </WorkItem>
                      <WorkItem>
                        [4] Required a lot of review on the distributed query
                        engine (Impala with Kudu, Presto, Hive on Tez, Tajo).
                      </WorkItem>
                      <WorkItem>
                        [5] 2016, 2017 released to G-Star (Korea's largest game
                        advertising partner B2B conference).
                      </WorkItem>
                    </WorkList>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </SectionBody>
        </Section>
      </HomeContainer>
    </Layout>
  );
};

export default Home;
