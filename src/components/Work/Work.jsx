import React from "react";
import "./Work.css";
import fibonacciGif from "../../assets/fibonacci/fibonacci-copy.gif";
import fibonacciDesignUrl1 from "../../assets/fibonacci/mockup-1.PNG";
import fibonacciDesignUrl2 from "../../assets/fibonacci/mockup-2.PNG";
import fibonacciDesignUrl3 from "../../assets/fibonacci/mockup-3.PNG";
import fibonacciIntro from "../../assets/fibonacci/golden-spiral.png";
import fibonacciPara2_1 from "../../assets/fibonacci/fibonacci-1.jpg";
import fibonacciPara2_2 from "../../assets/fibonacci/fibonacci-2.jpg";
import typographicFormGif from "../../assets/typographicForm/typographicForm.gif";
import typeFormSketch from "../../assets/typographicForm/type-form-sketch.jpg";
import nuclearDawnFinal1 from "../../assets/nuclearDawn/mockup-spread2.png";
import nuclearDawnFinal2 from "../../assets/nuclearDawn/mockup-spread3.png";
import nuclearDawnFinal3 from "../../assets/nuclearDawn/mockup-spread4.png";
import nuclearDawnFinal4 from "../../assets/nuclearDawn/mockup-spread5.png";
import nuclearDawnFinal5 from "../../assets/nuclearDawn/mockup-spread6.png";
import nuclearDawnFinal6 from "../../assets/nuclearDawn/mockup-spread7.png";
import nuclearDawnSketch from "../../assets/nuclearDawn/nuclearDawnSketches.jpg";
import nuclearDawnCover from "../../assets/nuclearDawn/mockup-spread2.png";
import dataPortraitGif from "../../assets/dataPortrait/dataPortrait.gif";
import dataPortraitSketch from "../../assets/dataPortrait/dataPortraitSketch.jpg";
// import lightAndTimeGif from "../../assets/lightAndTime/lightAndTime.gif";
// import lightAndTimeSketch from "../../assets/lightAndTime/lightAndTimeSketch.jpg";
import echoesOfConflictGif from "../../assets/echoesOfConflict/clippedVid.gif";
import echoesOfConflictAnimationGif from "../../assets/echoesOfConflict/radialBarGif.gif";
import echoesOfConflictImg1 from "../../assets/echoesOfConflict/echoesOfConflict-1.jpg";
import echoesOfConflictImg2 from "../../assets/echoesOfConflict/echoesOfConflict-2.jpg";
import parsonsIntroImg from "../../assets/parsonsBenefit/groupPic.jpg";

const caseStudies = [
  {
    id: 1,
    title: "ECHOES OF CONFLICT",
    subtitle: `Used d3.js to create an interactive radial bar chart to illustrate the prevalence of war rhetoric in the State of the Union Addresses over the last century.`,
    tags: ["Data Viz"],
    link: "https://soumyakarwa.github.io/echoes-of-conflict/",
    role: `Designer, Developer, Data Analyst`,
    overview: `Created an interactive radial bar chart to illustrate the prevalence of war rhetoric in the State of the Union Addresses over the last century. This data-driven approach provides a revealing look at how war has ebbed and flowed as a subject in the annual addresses to Congress, reflecting the nation's entanglement with international and domestic conflicts over time.`,
    introductionTitle: `WHAT IS THE STATE OF THE UNION ADDRESS?`,
    introduction: `The State of the Union address is a yearly speech delivered by the President of the United States to Congress. It outlines the nation's condition in the past year and sets forth the legislative agenda for the following year.`,
    paragraph1Title: `DESCRIPTION`,
    paragraph1: `"Echoes of Conflict," uses a radial bar chart to depict each year's address, with the bar lengths showing the percentage of the speech dedicated to discussing war. According to the U.S. Department of Veteran Affairs, the U.S. has been involved in five wars in the 20th century: World War I, World War II, Korean War, Vietnam War and the Global War on Terror. I wanted to depict a comparison between the Addresses in war years and non-war years. It is interesting to note that, despite the U.S.'s long involvement in the Vietnam War, the porportion of Addresses dedicated to talking about it is far lesser compared to years of other wars. Maybe it was because of the number of anti-war protests during that time?`,
    paragraph2Title: `INITIAL SKETCHES`,
    paragraph2: `To effectively display over 100 data points in a way that emphasizes comparison without overwhelming the viewer, I opted for a radial bar chart. This design allows for an intuitive visual comparison of categories, as longer bars stand out prominently against shorter ones, clearly depicting differences without the need for specific numerical values. I thought this would simplify the viewer's experience by focusing on relative magnitudes rather than precise data.`,
    designHeading: `FINAL DESIGNS`,
    imageType: "image",
    imageUrl: echoesOfConflictGif,
    para1Type: ["image"],
    para1Url: [echoesOfConflictAnimationGif],
    para2Type: ["image", "image"],
    para2Url: [echoesOfConflictImg1, echoesOfConflictImg2],
    designsType: ["image"],
    designsUrl: [echoesOfConflictGif],
  },
  {
    id: 2,
    title: "PARSONS BENEFIT 2024",
    subtitle: `Used p5.js to design and code an animation video in line with the visual identity and branding for the 75th annual Parsons Benefit (2024).`,
    tags: ["Creative Coding"],
    link: "https://www.youtube.com/watch?v=B4-ECRn2xAs",
    role: `Designer, Creative Coder`,
    overview: `Used p5.js to design and code an animation video in line with the visual identity and branding for the 75th annual Parsons Benefit created by students of Professor Lucille Tenazas’ class, University Design Studio.`,
    introductionTitle: `TEAM`,
    introduction: `<span class="section-heading">Henry Wolf Professor of Communication Design,</span> Lucille Tenazas<br>
    <span class="section-heading">Students:</span> Win Bulbon, Soumya Karwa, Da Won Kim, Aarya Kini, Aparna Krishnan Reshmy, Sachi Mavinkurve, Muhammad Talha.<br><br>
    <span class="section-heading">Left to Right:</span> Muhammad Talha, Yvonne Watson, Ben Barry, Sachi Mavinkurve, Soumya Karwa, Aparna Krishnan, Win Bulbon`,
    paragraph1Title: `WHAT IS THE PARSONS BENEFIT`,
    paragraph1: `The Parsons Benefit is an annual celebration of the transformational role fashion, design, and the arts play in today’s world. The evening highlights the work of Parsons Fashion and Textile students. It gathers an esteemed assembly of industry leaders, Parsons alumni, and other luminaries from the Parsons global network to recognize the Parsons Table Award recipients. On the occasion of the 75th annual Parsons Benefit, we designed the branding, graphics, animation, and overall visual identity for the Parsons Benefit.`,
    paragraph2Title: `ANIMATION VIDEO`,
    paragraph2: `tbd`,
    designHeading: `LIVE AT PARSONS BENEFIT`,
    imageType: "iframe",
    imageUrl: "https://www.youtube.com/embed/B4-ECRn2xAs",
    introType: ["image"],
    introUrl: [parsonsIntroImg],
    para2Type: ["iframe"],
    para2Url: ["https://www.youtube.com/embed/B4-ECRn2xAs"],
    designsType: ["iframe", "iframe"],
    designsUrl: [
      "https://www.youtube.com/embed/jkPGUcxb8-s",
      "https://www.youtube.com/embed/bPpD8zsi0jY",
    ],
  },
  {
    id: 3,
    title: "FIBONACCI",
    subtitle: `Created two posters and a dynamic digital media interaction to illustrate the Fibonacci sequence, showcasing the interdependence of square sizes and their relation to the golden ratio.`,
    tags: ["Digital Media", "Poster Design"],
    link: "https://soumyakarwa.github.io/typography_poster/",
    role: `Designer, Developer`,
    overview: `Created a pair of posters and an accompanying dynamic digital media interaction to illustrate the Fibonacci sequence, showcasing the interdependence of square sizes and their relation to the golden ratio.`,
    introductionTitle: `SO, WHAT IS FIBONACCI?`,
    introduction: `The Fibonacci sequence is a series of numbers in which each number (Fibonacci number) is the sum of the two preceding ones, usually starting with 0 and 1. The sequence is 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on. Interestingly, this sequence appears in many different areas of mathematics and science. It's also known for its occurrence in biological settings; for example, in branching in trees, the arrangement of leaves on a stem, the flowering of artichokes, and the arrangement of a pine cone's bracts. Apple also used the Golden Spiral to design its logo.`,
    paragraph1Title: `SIGNIFICANCE`,
    paragraph1: `As someone who loves math, I find the Fibonacci sequence fascinating. It's amazing how it shows up in so many places, connecting things we wouldn't think are related. It's like finding a secret code in nature that links everything together.`,
    paragraph2Title: `INITIAL SKETCHES`,
    paragraph2: `I wanted to focus on the recursive nature of the sequence and decided to focus on the squares.`,
    designHeading: `FINAL DESIGNS`,
    imageType: "image",
    imageUrl: fibonacciGif,
    introType: ["image"],
    introUrl: [fibonacciIntro],
    para2Type: ["image", "image"],
    para2Url: [fibonacciPara2_1, fibonacciPara2_2],
    designsType: ["image", "image", "image", "image"],
    designsUrl: [
      fibonacciDesignUrl1,
      fibonacciDesignUrl2,
      fibonacciDesignUrl3,
      fibonacciGif,
    ],
  },
  {
    id: 4,
    title: "DATA PORTRAIT",
    subtitle: `Used p5.js in a data-driven design project exploring the essence of fiction, using word frequency analysis to dissect the writer's role in shaping narrative structure.`,
    tags: ["Digital Media", "Data Viz"],
    link: " https://soumyakarwa.github.io/5in5/",
    role: "Designer, Developer",
    overview: `Fiction is crafted through careful manipulation of structure, word choice, sentence length, and chapter organization, transforming a good story into a great book. In a data-driven design project using p5.js, I explored the essence of fiction by analyzing word frequency to understand how writers shape narrative structures`,
    introductionTitle: `CONCEPT`,
    introduction: `I made a data portrait highlighting the frequency of different words in “The Clockwork Angel” by Cassandra Clare. I further segregated the data by parts of speech.`,
    paragraph1Title: `INITIAL SKETCHES`,
    paragraph1: `I designed a minimalistic, book-inspired interface, utilizing a color-coded typography system to categorize words by frequency and part of speech.`,
    paragraph2Title: `SIGNIFICANCE`,
    paragraph2: `I love to read and write fiction. I've always wondered how authors create dynamic, individual characters, creating distinct people with real personalities, flaws, and characteristics using only words. And that's when it hit me: they do precisely that. They associate certain words, tones, and language with certain characters to create distinct fictitious personalities that make their plot real. 
    
    How could we believe that [SPOILER ALERT] Dr Sheppard killed Roger Ackroyd if we didn't think him capable of it? How could we believe that Harry Potter's fatal flaw was his "hero thing" if he didn't prove that to us? How could we believe that Sherlock Holmes was not a fraud if every instinct told us it couldn't be true? It's because of words.

    Each word tells us something distinct about the character it’s being used for. Using "distraught" instead of "heartbroken" or "dropped" instead of "fell," or even "hey there" instead of "hello:"`,
    designHeading: `FINAL DESIGN`,
    imageType: "image",
    imageUrl: dataPortraitGif,
    para2Type: ["image"],
    para2Url: [dataPortraitSketch],
    designsType: ["image"],
    designsUrl: [dataPortraitGif],
  },
  {
    id: 5,
    title: "NUCLEAR DAWN",
    subtitle: `Designed and curated content for a 120-page, 5x8" trade book on the nuclear age, covering key historical events from the Pacific War to current disarmament efforts.`,
    tags: ["Editorial Design"],
    link: "https://drive.google.com/file/d/1fFxxrMgDQABM_kg-FRuoAqCAiDIQYvDm/view?usp=sharing",
    role: "Designer, Editor",
    overview: `I designed and curated content for a 120-page, 5x8" trade book on the nuclear age, covering key historical events from the Pacific War to current disarmament efforts.`,
    introductionTitle: `WHY ATOMIC WEAPONS?`,
    introduction: `A short while ago, I learned the gravity of the nuclear age: the ability of global leaders to bring an end to civilization with the push of a button and how often we’ve come close to it since the detonation of the first atomic bomb in 1945. I curated content and designed a book to make this important issue more accessible and understandable. `,
    paragraph1Title: `DESIGN CHOICES`,
    paragraph1: `I crafted an intense visual narrative using a striking color palette of black, white, deep red, and orange, with historical imagery and distinctive red and black spreads to enhance the book’s impactful exploration of nuclear history and policy. While I want to preserve the historical context, I also want to ensure the content is accessible and impactful, so I’ve created multiple spreads with poignant quotes from global leaders (for repetition and dramatic effect).`,
    paragraph2Title: `INITIAL THOUGHTS`,
    paragraph2: ``,
    designHeading: `SELECTED SPREADS`,
    imageType: "image",
    imageUrl: nuclearDawnCover,
    para2Type: ["image"],
    para2Url: [nuclearDawnSketch],
    designsType: [
      "image",
      "image",
      "image",
      "image",
      "image",
      "image",
      "image",
    ],
    designsUrl: [
      nuclearDawnFinal1,
      nuclearDawnFinal2,
      nuclearDawnFinal3,
      nuclearDawnFinal4,
      nuclearDawnFinal5,
      nuclearDawnFinal6,
    ],
  },
  {
    id: 6,
    title: "TYPOGRAPHIC FORM",
    subtitle: `Designed a dynamic typographic animation to explore the anatomy of the word "curiosity," using p5.js to create three interactive experiences: tracking mouse movement, breaking down the word into its constituent letters, and exploring each letter individually.`,
    tags: ["Digital Media"],
    link: "https://soumyakarwa.github.io/form_generator/",
    role: "Designer, Developer",
    overview: `I designed a dynamic typographic animation to explore the anatomy of the word "curiosity," using p5.js to create three interactive experiences: tracking mouse movement, breaking down the word into its constituent letters, and exploring each letter individually.`,
    introductionTitle: `CONCEPT`,
    introduction: `I love playing around with mouse interactions and was feeling experimental! I wanted to explore the anatomy of the "curiosity."`,
    paragraph1Title: `INITIAL SKETCHES`,
    paragraph1: `I decided on three animations that follow the mouse's x and y position on the screen.`,
    paragraph2Title: `FINAL DESIGNS`,
    paragraph2: `The first one is pretty simple, with the word "curiosity" following the mouse position on the canvas. I restricted the number of texts on the screen because I wanted to create dynamic movement instead of the text being permanently drawn at a particular point. The second one was more complicated because I needed to keep track of each letter in the word. I wanted to demonstrate "curiosity" as a sum of its parts. Hence, another word will appear randomly on the screen whenever you hover over a particular letter. This word contains only the letters of "curiosity." I randomized the colors of the additional words while fading out the letters in "curiosity" that weren't used to demonstrate the correlation. The third one was similar to the first, except for one letter at a time. I wanted to break down the word to explore its structure in the barest form.`,
    designHeading: ``,
    imageType: "image",
    imageUrl: typographicFormGif,
    para1Type: ["image"],
    para1Url: [typeFormSketch],
    para2Type: ["image"],
    para2Url: [typographicFormGif],
  },
];
// {
//   id: 5,
//   title: "LIGHT, SPACE & TIME",
//   subtitle: `I've always been fascinated with the relationship between light & time. And how sometimes, the stars we see in the night sky might have already died, because they might be so far away that their light has taken years to reach us. I designed a p5.js program to demonstrate this difference.`,
//   tags: ["Digital Media"],
//   role: "Designer, Developer",
//   overview: `I've always been fascinated with the relationship between light & time. And how sometimes, the stars we see in the night sky might have already died, because they might be so far away that their light has taken years to reach us. I designed a p5.js program to demonstrate this difference.`,
//   introductionTitle: `PHYSICS`,
//   introduction: `Nothing can travel faster than at the speed of light, approximately 299,792 kilometers per second. When we look at stars in the night sky, we see them as they were in the past because the stars are so far away that their light can take decades, if not centuries, to reach us. Because the universe is so incredibly vast, astronomers use the term "light year" to describe distances. A light year is the distance light travels in one year, about 9.46 trillion kilometers (or about 5.88 trillion miles). When we say a star is "10 light years away," it means that the light from that star takes ten years to reach us. When we look up at the night sky, we are looking back in time. If a star is 1,000 light years away, the light we are seeing from it tonight left the star 1,000 years ago: a profound metaphor expressing multiple timelines in the same world.`,
//   paragraph1Title: `LOGIC`,
//   paragraph1: ``,
//   paragraph2Title: `INITIAL SKETCHES`,
//   paragraph2: `The screen on the left shows the night sky as we see it. The screen on the right shows the stars in the night sky, accounting for how long the light takes to reach us on Earth.`,
//   designHeading: `FINAL DESIGN`,
//   imageUrl: lightAndTimeGif,
//   para2Url: [lightAndTimeSketch],
//   designsUrl: [lightAndTimeGif],
// },
// Add more case studies as needed

const handleLinkClick = (event) => {
  event.stopPropagation(); // This stops the click event from bubbling up to parent elements
};

const Work = ({ onStudyClick }) => {
  // const getBackgroundColor = (tag) => {
  //   const rootStyle = getComputedStyle(document.body);
  //   const defaultColor = rootStyle.getPropertyValue("--tag-color-1").trim();

  //   switch (tag) {
  //     case "Data Viz":
  //       return (
  //         rootStyle.getPropertyValue("--tag-color-2").trim() || defaultColor
  //       );
  //     case "Digital Media":
  //       return (
  //         rootStyle.getPropertyValue("--tag-color-3").trim() || defaultColor
  //       );
  //     // Handle other cases
  //     default:
  //       return defaultColor;
  //   }
  // };

  return (
    <div className="work-container">
      <div className="subheading">SELECTED PROJECTS</div>
      <div className="case-study-container">
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="case-study"
            onClick={() => onStudyClick(study)}
          >
            {study.imageType === "iframe" ? (
              <div className="iframe-container">
                <iframe
                  src={study.imageUrl}
                  className="responsive-iframe"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`${study.title} cover`}
                ></iframe>
              </div>
            ) : (
              <img
                src={study.imageUrl}
                alt={`${study.title} cover`}
                className="case-study-image"
              />
            )}
            <div className="work">
              <div className="description">
                <div className="title">{study.title}</div>
                <div className="myButton">
                  <a
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                  >
                    DEMO
                  </a>
                </div>
                {/* <ul className="tags">
                  {study.tags.map((tag, idx) => (
                    <li
                      key={idx}
                      style={{ backgroundColor: getBackgroundColor(tag) }}
                    >
                      {tag}
                    </li>
                  ))}
                </ul> */}
              </div>
              <div className="subtitle">{study.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
