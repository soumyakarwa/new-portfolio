import React from "react";
import "./Work.css";
// import comingSoonPng from "../../assets/coming-soon3.png";
import fibonacciGif from "../../assets/fibonacci/fibonacci-copy.gif";
import fibonacciDesignUrl1 from "../../assets/fibonacci/mockup-1.PNG";
import fibonacciDesignUrl2 from "../../assets/fibonacci/mockup-2.PNG";
import fibonacciDesignUrl3 from "../../assets/fibonacci/mockup-3.PNG";
import fibonacciIntro from "../../assets/fibonacci/golden-spiral.png";
import fibonacciPara2_1 from "../../assets/fibonacci/fibonacci-1.jpg";
import fibonacciPara2_2 from "../../assets/fibonacci/fibonacci-2.jpg";
// import typographicFormGif from "../../assets/typographicForm/typographicForm.gif";
// import typeFormSketch from "../../assets/typographicForm/type-form-sketch.jpg";
import nuclearDawnFinal1 from "../../assets/nuclearDawn/mockup-spread2.png";
import nuclearDawnFinal2 from "../../assets/nuclearDawn/mockup-spread3.png";
import nuclearDawnFinal3 from "../../assets/nuclearDawn/mockup-spread4.png";
import nuclearDawnFinal4 from "../../assets/nuclearDawn/mockup-spread5.png";
import nuclearDawnFinal5 from "../../assets/nuclearDawn/mockup-spread6.png";
import nuclearDawnFinal6 from "../../assets/nuclearDawn/mockup-spread7.png";
import nuclearDawnSketch from "../../assets/nuclearDawn/nuclearDawnSketches.jpg";
import nuclearDawnCover from "../../assets/nuclearDawn/mockup-spread2.png";
// import dataPortraitGif from "../../assets/dataPortrait/dataPortrait.gif";
// import dataPortraitSketch from "../../assets/dataPortrait/dataPortraitSketch.jpg";
// import lightAndTimeGif from "../../assets/lightAndTime/lightAndTime.gif";
// import lightAndTimeSketch from "../../assets/lightAndTime/lightAndTimeSketch.jpg";
import echoesOfConflictGif from "../../assets/echoesOfConflict/echoesOfConflict.gif";
import echoesOfConflictAnimationGif from "../../assets/echoesOfConflict/radial.gif";
import echoesOfConflictImg1 from "../../assets/echoesOfConflict/echoesOfConflict-1.jpg";
import echoesOfConflictImg2 from "../../assets/echoesOfConflict/echoesOfConflict-2.jpg";
import parsonsIntroImg from "../../assets/parsonsBenefit/groupPic.jpg";
import parsonsGif from "../../assets/parsonsBenefit/parsons.gif";
import comedyDuosImg from "../../assets/comedyDuos/introImg.jpeg";
import comedyDuosTimeline from "../../assets/comedyDuos/timeline.jpg";
import comedyDuosIconicness from "../../assets/comedyDuos/iconicness.jpg";
import comedyDuosTheory from "../../assets/comedyDuos/breakdown.jpg";
import comedyDuosDataCollection from "../../assets/comedyDuos/cdDataCollection.jpg";
import comedyDuosGPT from "../../assets/comedyDuos/gpt-use.gif";
import comedyDuosDataAnalysis from "../../assets/comedyDuos/cdDataAnalysis.jpg";
import comedyDuosCaseBoard1 from "../../assets/comedyDuos/case-board1.jpeg";
import comedyDuosLanding from "../../assets/comedyDuos/b99.gif";
import comedyDuosCharacters from "../../assets/comedyDuos/characters.gif";
import comedyDuosEpisode1 from "../../assets/comedyDuos/episode1.gif";
// import comedyDuosEpisode2 from "../../assets/comedyDuos/episode2.gif";
import comedyDuosHeatMap1 from "../../assets/comedyDuos/heatmap1.gif";
import comedyDuosHeatMap2 from "../../assets/comedyDuos/heatmap2.gif";
import comedyDuosEBSketch from "../../assets/comedyDuos/episodeBreakdownSketch.jpg";
import comedyDuosHeatMapSketch1 from "../../assets/comedyDuos/heatMapSketch1.jpg";
import comedyDuosHeatMapSketch2 from "../../assets/comedyDuos/heatMapSketch2.jpg";

const caseStudies = [
  {
    id: 1,
    wip: false,
    title: "THE MOST ICONIC DUO IN BROOKLYN NINE-NINE",
    subtitle: `Designed and developed a visual essay titled “The Most Iconic Duo in Brooklyn Nine-Nine” to identify the most beloved character duo in the sitcom Brooklyn Nine-Nine by analyzing official and unofficial episode descriptions, IMDb ratings, and votes. Honorable mention in the 2024 Pudding Cup, Longlisted in the 2024 Information is Beautiful Awards.`,
    tags: ["Data Viz"],
    link: "https://brooklyn-nine-nine-duos.vercel.app/",
    role: `Designer, Developer, Data Analyst`,
    tech: `Photoshop, Figma, Svelte.js, d3.js, NLTK, OpenAI API`,
    overview: `Designed and developed a visual essay titled “The Most Iconic Duo in Brooklyn Nine-Nine” to identify the most beloved character duo in the sitcom Brooklyn Nine-Nine by analyzing official and unofficial episode descriptions, IMDb ratings, and votes. Honorable mention in the 2024 Pudding Cup, Longlisted in the 2024 Information is Beautiful Awards.`,
    imageType: "image",
    imageUrl: comedyDuosLanding,
    paragraphs: {
      para1: {
        title: `DESCRIPTION`,
        content: `From when I first saw Brooklyn Nine-Nine, I’ve probably rewatched the show ten times over. I’ve always wondered what made the show so special. What about this show makes me revisit it over and over? Was it the wacky cold opens, dark humor, or clunky screenwriting? Then I realized it had to be the characters.<br><br>

        Each episode tells a different story, but what’s beautiful about this show is how character relationships transcend their circumstances and challenges. How Jake and Amy navigate their relationship despite all the hurdles or how Gina and Captain Holt develop an unlikely friendship, Brooklyn Nine-Nine’s character relationships make the precinct feel like a real, albeit dysfunctional, family—like life itself.<br><br>

        In the spirit of the Jimmy Jab Games, I set out to find the most iconic duo in Brooklyn Nine-Nine. Which character duo is most beloved by the viewers, without whom Brooklyn Nine-Nine would not be the same?`,
        imageType: ["image"],
        imageSource: [comedyDuosImg],
      },
      para2: {
        title: `TIMELINE`,
        content: `I divided this project into two phases. The first phase focused on Data Collection, Cleaning, and Analysis. The second phase focused on writing the narrative, designing the flow and assets, and coding and deploying the microsite.`,
        imageType: ["image"],
        imageSource: [comedyDuosTimeline],
      },
      para3: {
        title: `WHAT DO YOU MEAN, ICONICNESS?`,
        content: `First, I needed to narrow down what I was trying to find. I knew I wanted to identify the most iconic duo, but this begs the question: What defines iconicness? Mind maps help me visualize my thoughts, so I started there.<br><br>

        After many questions and thought spirals, I measured iconicness with popularity. On IMDb, every Brooklyn Nine-Nine episode's rating is calculated as the average of ratings received from a certain number of votes. Using this metric, I can assign the episode's rating to each character pair/group in that episode.<br><br>

        For instance, if Jake and Amy are paired in an episode with an average rating of 8.9/10, I could assume their duo was partially responsible for this rating. This helps me compare the ratings of different pairs/groups throughout the show.`,
        imageType: ["image"],
        imageSource: [comedyDuosIconicness],
      },
      para4: {
        title: `THEORY`,
        content: `Each episode usually has 3–5 different storylines following changing character groups. I chose to assign the episode’s rating to each character group to measure its popularity with the audience (since it changes with every episode). The question now is: How can I identify the episode’s different character groups?<br><br>

        The key was through a language analysis. For every episode, Brooklyn Nine–Nine’s production company released an “official” episode description– a short one-paragraph description of the episode’s storylines. By analyzing episode descriptions, I could identify which characters were grouped and correspond these findings with the episode rating. Once the analysis was complete for every episode, I could compare the average rating of character groups in all episodes to narrow down the most “iconic” or popular duo.`,
        imageType: ["image"],
        imageSource: [comedyDuosTheory],
      },
      para5: {
        title: `DATA COLLECTION`,
        content: `I used an existing dataset (containing information about every episode, including episode description, IMDb rating, votes, title, season, etc.) and scraped two additional episode descriptions from Wikipedia and WikiFandom to strengthen the analysis.`,
        imageType: ["image"],
        imageSource: [comedyDuosDataCollection],
      },
      para6: {
        title: `GENERATIVE AI & LINGUISTICS`,
        content: `The Natural Language Toolkit (NLTK) was extremely useful for splitting paragraphs into sentences and identifying specific characters amongst sentences. However, I found many sentences with multiple plot points. I needed to further split the sentences into independent clauses to identify distinct plot points (to identify distinct character groups).<br><br>

        I use Generative AI in my daily workflow: to boost productivity, as a template and even as a debugging tool. I read a lot about how Generative AI can identify sentence structures (syntax). While NLTK can assign words to a part of speech, I needed to split up sentences into clauses. For that I needed GenAI to understand text meaning to correctly identify an independent clause.<br><br>

        After testing my idea with ChatGPT, I used Generative AI through the OpenAI API to breakdown complex sentences (from the Wikipedia Episode Descriptions) into independent clauses.<br><br>`,
        imageType: ["image"],
        imageSource: [comedyDuosGPT],
      },
      para7: {
        title: `DATA ANALYTICS`,
        content: `Using the Natural Language Toolkit and OpenAI API, I broke down every episode's description into sentences and clauses to identify different storylines. Then, I compared these storylines to a list of main characters to uncover which characters were grouped in the episode. I compared results from all three episode descriptions to ensure accuracy.<br><br> 

        Once the analysis was complete for all episodes (all descriptions), I calculated the weighted average rating for the top ten most frequently appearing character duos. This accounted for the number of votes each episode got, not just the rating. So, for every character duo, I calculated the weighted average by dividing the sum of the product of episode rating and votes by the total number of votes.<br><br>

        Ultimately, the duo with the highest weighted average rating was the Most Iconic Brooklyn Nine-Nine Duo!`,
        imageType: ["image"],
        imageSource: [comedyDuosDataAnalysis],
      },
      para8: {
        title: `DESIGN CHOICES`,
        content: `No matter the case, each Brooklyn Nine-Nine episode always has a murder board, complete with pictures of perps, newspaper clippings, maps, stickies, and, of course, colorful yarn tying everything together.<br><br>

        I chose a similar theme, except with a digital flair. I designed a dot board with haphazard sticky–note divs. Sticky notes were pinned to the whiteboard using ellipses impersonating thumb–pins and connected using solid yellow lines. I chose Yellow to retain the Brooklyn Nine-Nine branding.<br><br>

        I animated the lines to create an in-motion, connected effect.`,
        imageType: ["image", "image", "image", "image"],
        imageSource: [comedyDuosCaseBoard1, comedyDuosLanding],
      },
      para9: {
        title: `INTRODUCTORY SECTION`,
        content: `The visual essay started with context about the show, introducing the main characters and my love for it.`,
        imageType: ["image"],
        imageSource: [comedyDuosCharacters],
      },
      para10: {
        title: `LANGUAGE ANALYSIS SECTION`,
        content: `To explain the language analysis, I designed a section to take readers through my thoughts, step-by-step. I explain how each episode’s description is broken down into different storylines (through sentences and clauses) and subsequently analyzed for distinct character groups.<br><br>

        Each episode is represented by a square which would be divided into the number of distinct character groups or pairings the episode had once the analysis is complete.`,
        imageType: ["image"],
        imageSource: [comedyDuosEBSketch],
      },
      para11: {
        title: `FINDING THE DUO`,
        content: `Now, the reader has some context for the language analysis and can jump right into the character group comparisons!<br><br>

        I chose a heat map layout of Seasons against Episodes and, with every step, revealed some additional aspects of the visualization. Starting with the previous episode example, I moved on to all episodes, which turned into a bar chart comparing the number of appearances of the top ten most frequently appearing character duos. With each incremental step, the heat map inches closer to the conclusion: the most iconic duo.<br><br>

        Stick around to find out!`,
        imageType: ["image", "image"],
        imageSource: [comedyDuosHeatMapSketch1, comedyDuosHeatMapSketch2],
      },
      para12: {
        title: `FINAL DESIGNS`,
        reflection: `I loved this project from conception to ideation to design to development. I chose it as my summer project for my love of Brooklyn Nine-Nine, but also to implement my learnings in data visualization in a large scale, continuous project: a visual essay. I drew inspiration from The Pudding and The New York Times– I wanted to emulate the way they tie stories together, revealing things step by step, piece by piece. I learned and implemented so many things I didn’t end up using for instance Scrollytelling and Intersection Observer, but I’m glad I learned them anyway. I’m excited for more projects like these in the future.`,
        imageType: ["image", "image", "image", "image"],
        imageSource: [
          comedyDuosLanding,
          comedyDuosCharacters,
          comedyDuosEpisode1,
          // comedyDuosEpisode2,
          comedyDuosHeatMap1,
          comedyDuosHeatMap2,
        ],
      },
      para13: {
        title: `REFLECTION`,
        content: `I loved this project, from conception to ideation to design to development. I chose it as my summer project for my love of Brooklyn Nine-Nine, but also to implement learnings in data visualization in a large-scale, continuous project: a visual essay. I drew inspiration from The Pudding and The New York Times– I wanted to emulate the way they tie stories together, revealing things step by step, piece by piece. I learned and implemented so many things I didn’t end up using, for instance, Scrollytelling and Intersection Observer, but I’m glad I learned them anyway. I’m excited for more projects like these in the future.<br><br>
        
        Shoutout to <span class="underline"><a href="https://www.connorrothschild.com">Connor Rothschild</a></span>, <span class="underline"><a href="https://www.daniellecarrick.com/">Danielle Carrick</a></span> and <span class="underline">Michael Hester</span> for their time and expertise to critique this project! Shoutout to <span class="underline"><a href="https://justinbakse.com/">Prof. Justin Bakse</a></span> for his class, "Javascript+OpenAI" at Parsons which taught me how to effciently use OpenAI's GPT in projects. 

        Please check my <span class="underline"><a href="https://github.com/soumyakarwa/comedy-duos">Github Repository</a></span> for more detailed sources!`,
        imageType: null,
        imageSource: null,
      },
    },
  },
  {
    id: 2,
    wip: false,
    title: "ECHOES OF CONFLICT",
    subtitle: `Used d3.js to create an interactive radial bar chart to illustrate the prevalence of war rhetoric in the State of the Union Addresses over the last century.`,
    tags: ["Data Viz"],
    link: "https://soumyakarwa.github.io/echoes-of-conflict/",
    role: `Designer, Developer, Data Analyst`,
    tech: `d3.js`,
    overview: `Created an interactive radial bar chart to illustrate the prevalence of war rhetoric in the State of the Union Addresses over the last century. This data-driven approach provides a revealing look at how war has ebbed and flowed as a subject in the annual addresses to Congress, reflecting the nation's entanglement with international and domestic conflicts over time.`,
    imageType: "image",
    imageUrl: echoesOfConflictGif,
    paragraphs: {
      para1: {
        title: `WHAT IS THE STATE OF THE UNION ADDRESS?`,
        content: `The State of the Union address is a yearly speech delivered by the President of the United States to Congress. It outlines the nation's condition in the past year and sets forth the legislative agenda for the following year.`,
        imageType: null,
        imageSource: null,
      },
      para2: {
        title: `DESCRIPTION`,
        content: `"Echoes of Conflict," uses a radial bar chart to depict each year's address, with the bar lengths showing the percentage of the speech dedicated to discussing war. According to the U.S. Department of Veteran Affairs, the U.S. has been involved in five wars in the 20th century: World War I, World War II, Korean War, Vietnam War and the Global War on Terror. I wanted to depict a comparison between the Addresses in war years and non-war years. It is interesting to note that, despite the U.S.'s long involvement in the Vietnam War, the porportion of Addresses dedicated to talking about it is far lesser compared to years of other wars. Maybe it was because of the number of anti-war protests during that time?`,
        imageType: ["image"],
        imageSource: [echoesOfConflictAnimationGif],
      },
      para3: {
        title: `INITIAL SKETCHES`,
        content: `To effectively display over 100 data points in a way that emphasizes comparison without overwhelming the viewer, I opted for a radial bar chart. This design allows for an intuitive visual comparison of categories, as longer bars stand out prominently against shorter ones, clearly depicting differences without the need for specific numerical values. I thought this would simplify the viewer's experience by focusing on relative magnitudes rather than precise data.`,
        imageType: ["image", "image"],
        imageSource: [echoesOfConflictImg1, echoesOfConflictImg2],
      },
      para4: {
        title: `FINAL DESIGNS`,
        content: null,
        imageType: ["image"],
        imageSource: [echoesOfConflictGif],
      },
    },
  },
  {
    id: 3,
    wip: false,
    title: "PARSONS BENEFIT 2024",
    subtitle: `Used p5.js to design and code an animation video in line with the visual identity and branding for the 75th annual Parsons Benefit (2024).`,
    tags: ["Creative Coding"],
    link: "https://www.youtube.com/watch?v=B4-ECRn2xAs",
    role: `Designer, Creative Coder`,
    tech: `Figma, p5.js`,
    overview: `Used p5.js to design and code an animation video in line with the visual identity and branding created by students of Professor Lucille Tenazas’ class, University Design Studio for the 75<sup>th</sup> Annual Parsons Benefit .`,
    imageType: "image",
    imageUrl: parsonsGif,
    paragraphs: {
      para1: {
        title: `TEAM`,
        content: `<span class="section-heading">Henry Wolf Professor of Communication Design,</span> Lucille Tenazas<br>
        <span class="section-heading">Students:</span> Win Bulbon, Soumya Karwa, Da Won Kim, Aarya Kini, Aparna Krishnan Reshmy, Sachi Mavinkurve, Muhammad Talha.<br><br>
        <span class="section-heading">Left to Right:</span> Muhammad Talha, Yvonne Watson (Executive Dean of Parsons School of Design), Ben Barry (Dean, School of Fashion), Sachi Mavinkurve, Soumya Karwa, Aparna Krishnan, Win Bulbon`,
        imageType: ["image"],
        imageSource: [parsonsIntroImg],
      },
      para2: {
        title: `WHAT IS THE PARSONS BENEFIT`,
        content: `The Parsons Benefit is an annual celebration of the transformational role fashion, design, and the arts play in today’s world. The evening highlights the work of Parsons Fashion and Textile students. It gathers an esteemed assembly of industry leaders, Parsons alumni, and other luminaries from the Parsons global network to recognize the Parsons Table Award recipients. On the occasion of the 75<sup>th</sup> Annual Parsons Benefit, we designed the branding, graphics, animation, and overall visual identity for the Parsons Benefit.`,
        imageType: null,
        imageSource: null,
      },
      para3: {
        title: `ANIMATION VIDEO`,
        content: `I created an animation using p5.js to align with the logo designed by Aparna. The animation features curvy lines that move in a fluid, oscillating pattern achieved through sine waves, creating a dynamic and engaging background. I wanted the line effect to be organic and similar to the shadowy lines under “BENEFIT.” Additionally, I incorporated increasing stroke widths in each section of the lines, resulting in a gradient effect that enhanced the visual depth and appeal of the animation.`,
        imageType: ["image"],
        imageSource: [parsonsGif],
      },
      para4: {
        title: `LIVE AT PARSONS BENEFIT`,
        content: null,
        imageType: ["iframe", "iframe"],
        imageSource: [
          "https://www.youtube.com/embed/jkPGUcxb8-s",
          "https://www.youtube.com/embed/bPpD8zsi0jY",
        ],
      },
    },
  },
  {
    id: 4,
    wip: false,
    title: "FIBONACCI",
    subtitle: `Created two posters and a dynamic digital media interaction to illustrate the Fibonacci sequence, showcasing the interdependence of square sizes and their relation to the golden ratio.`,
    tags: ["Digital Media", "Poster Design"],
    link: "https://soumyakarwa.github.io/typography_poster/",
    role: `Designer, Developer`,
    tech: `InDesign, Illustrator, p5.js`,
    overview: `Created a pair of posters and an accompanying dynamic digital media interaction to illustrate the Fibonacci sequence, showcasing the interdependence of square sizes and their relation to the golden ratio.`,
    imageType: "image",
    imageUrl: fibonacciGif,
    paragraphs: {
      para1: {
        title: `SO, WHAT IS FIBONACCI?`,
        content: `The Fibonacci sequence is a series of numbers in which each number (Fibonacci number) is the sum of the two preceding ones, usually starting with 0 and 1. The sequence is 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on. Interestingly, this sequence appears in many different areas of mathematics and science. It's also known for its occurrence in biological settings; for example, in branching in trees, the arrangement of leaves on a stem, the flowering of artichokes, and the arrangement of a pine cone's bracts. Apple also used the Golden Spiral to design its logo.`,
        imageType: ["image"],
        imageSource: [fibonacciIntro],
      },
      para2: {
        title: `SIGNIFICANCE`,
        content: `As someone who loves math, I find the Fibonacci sequence fascinating. It's amazing how it shows up in so many places, connecting things we wouldn't think are related. It's like finding a secret code in nature that links everything together.`,
        imageType: null,
        imageSource: null,
      },
      para3: {
        title: `INITIAL SKETCHES`,
        content: `I wanted to focus on the recursive nature of the sequence and decided to focus on the squares.`,
        imageType: ["image", "image"],
        imageSource: [fibonacciPara2_1, fibonacciPara2_2],
      },
      para4: {
        title: `FINAL DESIGNS`,
        content: null,
        imageType: ["image", "image", "image", "image"],
        imageSource: [
          fibonacciDesignUrl1,
          fibonacciDesignUrl2,
          fibonacciDesignUrl3,
          fibonacciGif,
        ],
      },
    },
  },
  // {
  //   id: 5,
  //   wip: false,
  //   title: "DATA PORTRAIT",
  //   subtitle: `Used p5.js in a data-driven design project exploring the essence of fiction, using word frequency analysis to dissect the writer's role in shaping narrative structure.`,
  //   tags: ["Digital Media", "Data Viz"],
  //   link: " https://soumyakarwa.github.io/5in5/",
  //   role: "Designer, Developer",
  //   overview: `Fiction is crafted through careful manipulation of structure, word choice, sentence length, and chapter organization, transforming a good story into a great book. In a data-driven design project using p5.js, I explored the essence of fiction by analyzing word frequency to understand how writers shape narrative structures`,
  //   introductionTitle: `CONCEPT`,
  //   introduction: `I made a data portrait highlighting the frequency of different words in “The Clockwork Angel” by Cassandra Clare. I further segregated the data by parts of speech.`,
  //   paragraph1Title: `INITIAL SKETCHES`,
  //   paragraph1: `I designed a minimalistic, book-inspired interface, utilizing a color-coded typography system to categorize words by frequency and part of speech.`,
  //   paragraph2Title: `SIGNIFICANCE`,
  //   paragraph2: `I love to read and write fiction. I've always wondered how authors create dynamic, individual characters, creating distinct people with real personalities, flaws, and characteristics using only words. And that's when it hit me: they do precisely that. They associate certain words, tones, and language with certain characters to create distinct fictitious personalities that make their plot real.

  //   How could we believe that [SPOILER ALERT] Dr Sheppard killed Roger Ackroyd if we didn't think him capable of it? How could we believe that Harry Potter's fatal flaw was his "hero thing" if he didn't prove that to us? How could we believe that Sherlock Holmes was not a fraud if every instinct told us it couldn't be true? It's because of words.

  //   Each word tells us something distinct about the character it’s being used for. Using "distraught" instead of "heartbroken" or "dropped" instead of "fell," or even "hey there" instead of "hello:"`,
  //   designHeading: `FINAL DESIGN`,
  //   imageType: "image",
  //   imageUrl: dataPortraitGif,
  //   para2Type: ["image"],
  //   para2Url: [dataPortraitSketch],
  //   designsType: ["image"],
  //   designsUrl: [dataPortraitGif],
  // },
  {
    id: 6,
    wip: false,
    title: "NUCLEAR DAWN",
    subtitle: `Designed and curated content for a 120-page, 5x8" trade book on the nuclear age, covering key historical events from the Pacific War to current disarmament efforts.`,
    tags: ["Editorial Design"],
    link: "https://drive.google.com/file/d/1fFxxrMgDQABM_kg-FRuoAqCAiDIQYvDm/view?usp=sharing",
    role: "Designer, Editor",
    overview: `I designed and curated content for a 120-page, 5x8" trade book on the nuclear age, covering key historical events from the Pacific War to current disarmament efforts.`,
    tech: `InDesign`,
    imageType: "image",
    imageUrl: nuclearDawnCover,
    paragraphs: {
      para1: {
        title: `WHY ATOMIC WEAPONS?`,
        content: `A short while ago, I learned the gravity of the nuclear age: the ability of global leaders to bring an end to civilization with the push of a button and how often we’ve come close to it since the detonation of the first atomic bomb in 1945. I curated content and designed a book to make this important issue more accessible and understandable. `,
        imageType: null,
        imageSource: null,
      },
      para2: {
        title: `DESIGN CHOICES`,
        content: `I crafted an intense visual narrative using a striking color palette of black, white, deep red, and orange, with historical imagery and distinctive red and black spreads to enhance the book’s impactful exploration of nuclear history and policy. While I want to preserve the historical context, I also want to ensure the content is accessible and impactful, so I’ve created multiple spreads with poignant quotes from global leaders (for repetition and dramatic effect).`,
        imageType: null,
        imageSource: null,
      },
      para3: {
        title: `INITIAL THOUGHTS`,
        content: null,
        imageType: ["image"],
        imageSource: [nuclearDawnSketch],
      },
      para4: {
        title: `SELECTED SPREADS`,
        content: null,
        imageType: [
          "image",
          "image",
          "image",
          "image",
          "image",
          "image",
          "image",
        ],
        imageSource: [
          nuclearDawnFinal1,
          nuclearDawnFinal2,
          nuclearDawnFinal3,
          nuclearDawnFinal4,
          nuclearDawnFinal5,
          nuclearDawnFinal6,
        ],
      },
    },
  },
  // {
  //   id: 7,
  //   wip: false,
  //   title: "TYPOGRAPHIC FORM",
  //   subtitle: `Designed a dynamic typographic animation to explore the anatomy of the word "curiosity," using p5.js to create three interactive experiences: tracking mouse movement, breaking down the word into its constituent letters, and exploring each letter individually.`,
  //   tags: ["Digital Media"],
  //   link: "https://soumyakarwa.github.io/form_generator/",
  //   role: "Designer, Developer",
  //   overview: `I designed a dynamic typographic animation to explore the anatomy of the word "curiosity," using p5.js to create three interactive experiences: tracking mouse movement, breaking down the word into its constituent letters, and exploring each letter individually.`,
  //   introductionTitle: `CONCEPT`,
  //   introduction: `I love playing around with mouse interactions and was feeling experimental! I wanted to explore the anatomy of the "curiosity."`,
  //   paragraph1Title: `INITIAL SKETCHES`,
  //   paragraph1: `I decided on three animations that follow the mouse's x and y position on the screen.`,
  //   paragraph2Title: `FINAL DESIGNS`,
  //   paragraph2: `The first one is pretty simple, with the word "curiosity" following the mouse position on the canvas. I restricted the number of texts on the screen because I wanted to create dynamic movement instead of the text being permanently drawn at a particular point. The second one was more complicated because I needed to keep track of each letter in the word. I wanted to demonstrate "curiosity" as a sum of its parts. Hence, another word will appear randomly on the screen whenever you hover over a particular letter. This word contains only the letters of "curiosity." I randomized the colors of the additional words while fading out the letters in "curiosity" that weren't used to demonstrate the correlation. The third one was similar to the first, except for one letter at a time. I wanted to break down the word to explore its structure in the barest form.`,
  //   designHeading: ``,
  //   imageType: "image",
  //   imageUrl: typographicFormGif,
  //   para1Type: ["image"],
  //   para1Url: [typeFormSketch],
  //   para2Type: ["image"],
  //   para2Url: [typographicFormGif],
  // },
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
  return (
    <div className="work-container">
      <div className="subheading">SELECTED PROJECTS</div>
      <div className="case-study-container">
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="case-study"
            onClick={!study.wip ? () => onStudyClick(study) : undefined}
            style={{ cursor: study.wip ? "default" : "pointer" }}
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
