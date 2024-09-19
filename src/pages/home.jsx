import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpenIcon, BrainIcon, UsersIcon, RocketIcon } from "lucide-react";
import { Link } from "react-router-dom";
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="background-image" />
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text-image-container">
                <div className="hero-text">
                  <h1 className="hero-title">Master your skills, one quiz at a time</h1>
                  <p className="hero-description">
                    Discover a world of knowledge tailored to your interests and learning style. Start your journey today.
                  </p>
                  <div className="hero-buttons">
                    <Link to="/education-levels">
                      <Button className="btn-dark-orange" size="lg">Get Started</Button>
                    </Link>
                  </div>
                </div>
                <div className="hero-image">
                  <img
                    src="https://i.pinimg.com/564x/e8/9c/23/e89c23fe6c8a7cb082d12ccced3e3e4c.jpg" 
                    alt="Learning Illustration"
                    className="hero-side-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="features-section">
          <div className="container">
            <div className="features-header">
              <h2 className="section-title">Key Features</h2>
              <p className="section-description">
                Discover why SmartPlay is the perfect platform for your learning journey.
              </p>
            </div>
            <div className="features-grid">
              {[
                { Icon: BookOpenIcon, title: 'Diverse Topics', description: 'Explore a wide range of subjects tailored to your interests.' },
                { Icon: BrainIcon, title: 'Adaptive Learning', description: 'Our AI adjusts difficulty based on your performance.' },
                { Icon: UsersIcon, title: 'Community Engagement', description: 'Connect with learners and compete on leaderboards.' },
                { Icon: RocketIcon, title: 'Progress Tracking', description: 'Monitor your growth with detailed analytics and insights.' }
              ].map(({ Icon, title, description }, index) => (
                <Card className="feature-card" key={index}>
                  <CardContent className="feature-card-content">
                    <Icon className="feature-icon" />
                    <h3 className="feature-title">{title}</h3>
                    <p className="feature-description">{description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="container">
            <div className="testimonials-header">
              <h2 className="section-title">What Our Users Say</h2>
              <p className="section-description">
                See how SmartPlay has helped learners achieve their goals.
              </p>
            </div>
            <div className="testimonials-grid">
              {[
                {
                  name: 'John Doe',
                  text: 'SmartPlay has transformed my learning experience. The quizzes are fun and engaging!',
                  imageUrl: 'https://i.pinimg.com/474x/fe/69/fe/fe69fe0a20a10b1665506bc8f8006aef.jpg'
                },
                {
                  name: 'Jane Smith',
                  text: 'I love how the platform adapts to my pace. It’s been an amazing tool for my studies.',
                  imageUrl: 'https://i.pinimg.com/474x/20/5b/6c/205b6c589ea5f426154522f93d7d4550.jpg'
                },
                {
                  name: 'Emily Johnson',
                  text: 'The progress tracking feature keeps me motivated to continue learning.',
                  imageUrl: 'https://i.pinimg.com/474x/b3/78/1b/b3781b62ecfd3054243c585c7b1797f2.jpg'
                }
              ].map(({ name, text, imageUrl }, index) => (
                <Card className="testimonial-card" key={index}>
                  <CardContent className="testimonial-card-content">
                    <div className="testimonial-image">
                      <img src={imageUrl} alt={name} className="testimonial-avatar" />
                    </div>
                    <p className="testimonial-text">"{text}"</p>
                    <h3 className="testimonial-author">{name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">© 2024 SmartPlay. All rights reserved.</p>
        <nav className="footer-nav">
          <Link className="footer-link" to="#">
            Terms of Service
          </Link>
          <Link className="footer-link" to="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
