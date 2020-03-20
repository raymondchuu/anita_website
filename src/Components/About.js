import React from 'react';
import '../Css/About.css';
import Image1 from '../Media/About/Image1.png';
import Image2 from '../Media/About/Image2.png';

class About extends React.Component {
    render() {
        return (
            <div className="aboutContainer">
                <br/>
                <img src={Image1} className="selfie"/>
                <br/>
                <br/>
                <p>Hi I'm Anita, a UX designer based in Toronto, ON.</p>
                <p>I came to design from a background in two completely different fields, health and education, but it gives me a strong background in research and communication. What drove me to UX design was my passion for research and problem solving and trying to make things more efficient.</p>
                <br/>
                <br/>

                <img src={Image2} />
                
                <br/>
                <h3>Background</h3>
                <p>I started designing in high school when I took the yearbook course and fell in love with photoshopping. From there I started designing logos for the sports clubs I am a part of. I always loved visual arts and designing but never thought of pursuing it as a career.</p>
                <p>I studied kinesiology in university because I had an interest in health and rehabilitation. The program was research based in the sense that we learn from our professor’s research and must do our own research from published articles for majority of our assignments. This made me appreciate research and refined my abilities in extracting and synthesizing key insights from publications. </p>
                <p>After studying kinesiology, I decided to become a teacher, a career I always wanted to do since I was a child. In this program, I did more research but this time it focused on social constructs and issues that affect our communities. It grew my empathy and challenged me to recognize the unconscious biases that exist. During my program, I did two practicum placements teaching physical education, grade 11 biology and grade 9 ESL sciences. This challenged me to create lessons that considered all my students’ strengths and weaknesses.</p>
                <p>I got to a point where I had to decide to be on the teaching waitlist or pursue a different route. I always loved technology, research and design and decided to search for a career that encompasses these fields, which brought me to UX design. I made a spontaneous decision to enroll in the UX design program at Brain Station and began my journey to becoming a UX designer. </p>
                <p>I enjoy the design process, meeting new people, and thinking of creative solutions to problems. I’m looking forward to improving my skills as a UX designer and learning more from mentors in this field.</p>
                
            </div>
        );
    }
}

export default About