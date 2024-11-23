"use client";

import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicAcademyCourses = [
  {
    title: "Beginner Piano Lessons",
    description:
      "This course introduces students to the world of piano, focusing on foundational skills such as reading sheet music, proper hand positioning, and basic music theory concepts. Students will learn to play simple melodies and develop an understanding of rhythm and timing, setting a strong base for further musical growth. Designed for complete beginners, this program ensures a supportive and engaging learning experience.",
  },
  {
    title: "Vocal Training & Performance",
    description:
      "Designed for aspiring singers, this program helps students discover and refine their vocal potential. Covering essential techniques such as breath control, pitch accuracy, vocal range expansion, and tone modulation, the course also emphasizes performance skills like stage presence and confidence building. Whether you're a beginner or an intermediate learner, this class is tailored to elevate your vocal artistry.",
  },
  {
    title: "Guitar Mastery for All Levels",
    description:
      "A comprehensive guitar course suitable for learners of all levels, from beginners to advanced players. This program includes lessons on chord progressions, strumming techniques, fingerpicking, and improvisation. For advanced students, it delves into mastering solos, playing complex scales, and understanding music composition. Whether you're interested in acoustic or electric guitar, this course adapts to your goals and interests.",
  },
  {
    title: "Music Production & Sound Engineering",
    description:
      "This cutting-edge course is perfect for anyone interested in creating, mixing, and producing their own music. Covering topics like digital audio workstations (DAWs), sound design, mixing techniques, and mastering tracks, students will gain hands-on experience with professional software and equipment. The program is ideal for those who want to understand both the technical and creative aspects of music production and sound engineering.",
  },
];
const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={musicAcademyCourses} />
    </div>
  );
};

export default WhyChooseUs;
