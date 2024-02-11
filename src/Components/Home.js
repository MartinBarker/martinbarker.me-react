import React, { useEffect, useState } from 'react';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('pink');

  useEffect(() => {
    // Function to fetch colors from local JSON file
    const fetchColors = async () => {
        /*
      try {
        const response = await fetch('/colors.json'); // Assuming colors.json is in public folder
        console.log('response=',response)
        if (!response.ok) {
          throw new Error('Failed to fetch colors');
        }
        const colorsData = await response.json();
        console.log('colorsData=',colorsData);
        const randomColor = Object.values(colorsData)[Math.floor(Math.random() * Object.keys(colorsData).length)].color1;
        setBackgroundColor(randomColor);
      } catch (error) {
        console.error('Error fetching colors:', error);
      }
      */
    };

    fetchColors();
  }, []);

  return (
    <>
About me
I am a Seattle software developer who graduated from 2019 with a BS in Applied Computer Science (Cybersecurity) from Oregon State University. In my spare time I create free open-source software to help improve the preservation and digitization of music online.

Details
Name:
Martin Anthony Barker
Age:
26 years
Location:
Seattle, WA
Education
Oregon State University
September 2015 - July 2019
Bachelor - Applied Computer Science (Focus: Cybersecurity)
My applied CS degree gave me the unique perspective of software development from a cybersecurity view. My courses included programming in languages such as Python, C++, C, as well as bash and linux command line experience. I also took courses on web development using NodeJS, HTML, CSS, Javascript, and Django. As well as database setup / management with SQL and PostgreSQL. My cybersecurity courses taught me computer networking protocols and security, as well as threat detection / response. place Corvallis, OR
Careers
Philips Ultrasound
February 2022 - Current
Senior DevOps Engineer
Designed, implemented, and released a Python script to migrate work items from IBM RTC to ADS.
Managing nightly automated builds, supporting NuGet / Artifactory packaging of .net apps.
place Bothell, WA | Philips

Alaska Airlines
September 2021 - November 2021
Software Developer Contractor
Working at Alaska Airlines, I help to develop and maintain the E-Commerce suite of web and mobile products, as well as increased the accessibility score for Alaska Airlines web/mobile web products. Contract ended due to uncertainty involving the Omicron variant within the Airline Industry. place Seattle, WA | Alaska Airlines

Bungee Tech
January 2020 - August 2021
Software Engineer
Bungee Tech empowers retailers and brands to compete effectively in an ever-changing landscape by collecting competitor product data, and visualizing that data to the clients online. Some of my responsibilities at Bungee Tech included:
Adding front-end features to Bungee websites which display millions of rows of data to the user that can be filtered, exported, and sorted.
Week long on-call rotations where infrastructure and DevOps issues are solved in a timely manner.
Writing PostgreSQL queries, setting up and managing databases to monitor the health of our data.
Responding to client feedback / bug reports.
place Seattle, WA | Bungee Tech

Zume, Inc
September 2019 - January 2020
DevOps Engineer (Software Engineer I)
Working at Zume before the Seattle office was laid off, I gained hands-on experience with the full DevOps pipeline of code deployment from a local environment to production clusters. I created Kubernetes clusters from scratch in Google Cloud Platform (GCP) and installed Helm as well as ingress load balancers. I wrote my own Helm charts and Dockerfiles and created webhooks to trigger the Docker image build process in Jenkins. The process of installing services to different cluster environments (dev / perf / staging / prod) was automated by Spinnaker pipelines that I wrote. I carried a security mindset throughout all my work, setting up alert monitoring and handling cluster authorization. place Seattle, WA | Zume, Inc

MoxiWorks
June 2018 - August 2019
Quality Assurance Engineer Intern
MoxiWorks is a real estate tech startup located in Seattle, WA. As a QA engineer, I wrote automated testing software in Java to cover the Moxi suite of web products as well as their external API. Our workflow utilized agile development and sprints to push out new features, as well as git to maintain the shared repo we all worked in. This position helped strengthen my programming habits for writing scalable code meant to be reused/revisited by different people. It also gave me more experience communicating with a team through daily standup meetings. place Seattle, WA | moxiworks.com

KBVR FM / TV
September 2016 - April 2018
Full Time - Student Engineer At Orange Media Network I worked as student engineer for OSU's TV / Radio station KBVR FM / TV. I was in charge of learning and teaching state-of-the-art media software / hardware used in our daily TV productions and radio broadcasts. I ran audio for on-location OSU football broadcasts, and was sent to the National Association of Broadcasters convention in Las Vegas by my college in 2015 / 2016. The position helped me gain experience in learning new tech outside my comfort zone, and teaching that technology to students in an understandable way devoid of technical jargon. place Corvallis, OR | orangemedianetwork.com
    </>
  );
};
export default App;
