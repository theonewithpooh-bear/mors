import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const GetInvolved = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">Get Involved with MORS</h1>
        <section>
          <h2 className="section-title">Join the Movement</h2>
          <p className="paragraph">
            There are many ways to contribute to the Movement of Real Skills. Whether you're an educator, student, parent, or industry professional, your involvement can make a significant impact on reshaping education for a better future.
          </p>
        </section>
        <section>
          <h2 className="section-title">Ways to Contribute</h2>
          <ul className="list-disc list-inside mb-4">
            <li className="paragraph">Volunteer as a mentor</li>
            <li className="paragraph">Offer internship opportunities</li>
            <li className="paragraph">Participate in workshops and events</li>
            <li className="paragraph">Spread awareness on social media</li>
            <li className="paragraph">Donate to support our programs</li>
          </ul>
        </section>
        <Link to="/" className="link">
          <Button variant="outline" className="button">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default GetInvolved;