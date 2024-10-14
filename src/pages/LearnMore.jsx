import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const LearnMore = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">Learn More About MORS</h1>
        <section>
          <h2 className="section-title">Our Vision</h2>
          <p className="paragraph">
            The Movement of Real Skills (MORS) is dedicated to transforming education by prioritizing practical, real-world skills. We believe in preparing students for the challenges of tomorrow through hands-on learning experiences and innovative teaching methods.
          </p>
        </section>
        <section>
          <h2 className="section-title">Our Approach</h2>
          <p className="paragraph">
            We focus on developing critical thinking, problem-solving, and adaptability skills that are essential in today's rapidly changing world. Our curriculum integrates project-based learning, internships, and mentorship programs to provide a well-rounded educational experience.
          </p>
        </section>
        <Link to="/" className="link">
          <Button variant="outline" className="button">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default LearnMore;