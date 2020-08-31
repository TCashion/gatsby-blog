import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import headshot from '../images/headshot.jpg'

const About = () => (
    <Layout>
        <SEO title="About Me" />
        <div>
            <h2>About me</h2>
            <p>
                My name is Travis Cashion. I was born and raised in the beautiful state of Colorado. I am a family man, a programmer, a writer, and an adventurer. I love to build things, learn new skills and technologies, and spend time in nature.
            </p>
            <br />
            <div className="image-cropper">
                <img 
                    className="roung-img"
                    src={headshot} 
                    alt="Travis Cashion headshot"
                />
            </div>
            <br />
            <p>
                Thanks for visiting my web page! Talk to me about:
            </p>
            <br />
            <ul>
                <li>Web development</li>
                <li>Programming</li>
                <li>Writing</li>
                <li>Business</li>
                <li>Hunting, fishing, wildlife, nature & the outdoors</li>
                <li>Cooking</li>
                <li>Fitness: endurance training, lifting, kettlebells</li>
                <li>Travelling</li>
                <li>Dogs</li>
                <li>Spanish</li>
                <li>Or anything else!</li>
            </ul>
        </div>
    </Layout>
)

export default About