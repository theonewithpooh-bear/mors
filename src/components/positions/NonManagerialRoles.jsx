import React from 'react';
import { PositionCard } from './PositionCard';

export const NonManagerialRoles = () => {
  const roles = [
    {
      title: "Youth Advisory Panel Members (YAPM)",
      color: "blue",
      positions: "12 (including 5 focused on survey and research)",
      description: "Provide valuable feedback and insights to shape MORS's initiatives.",
      learnMoreContent: "As a Youth Advisory Panel Member, you'll have the opportunity to influence MORS's strategies and campaigns. Members provide valuable insights into the experiences and needs of young people in education. This role includes opportunities to work on research and surveys that directly inform MORS policies. You'll gain experience in leadership, data analysis, and advocacy while being part of a collaborative team.",
      requirements: [
        "Strong communication and analytical skills",
        "Interest in contributing to education reform"
      ]
    },
    {
      title: "Social Media Representatives",
      color: "purple",
      positions: "2",
      description: "Manage MORS's online presence across various platforms.",
      learnMoreContent: "Social Media Representatives are responsible for managing MORS's online presence and creating engaging content that resonates with our audience. This role is perfect for creative individuals passionate about social media and education reform. You'll work on developing campaigns, interacting with followers, and monitoring trends to ensure MORS remains at the forefront of digital engagement.",
      requirements: [
        "Experience with Instagram, X, and TikTok",
        "Creative skills in digital storytelling and content creation"
      ]
    },
    {
      title: "Content Creators",
      color: "green",
      positions: "2",
      description: "Develop written and multimedia content for MORS campaigns.",
      learnMoreContent: "Content Creators develop written and multimedia content that highlights MORS's work and mission. Responsibilities include writing blogs, creating videos, and collaborating with other teams to produce impactful stories. This role offers an excellent opportunity to showcase your creativity while contributing to meaningful campaigns.",
      requirements: [
        "Strong writing and/or multimedia production skills",
        "Ability to collaborate with other teams and meet deadlines"
      ]
    },
    {
      title: "Graphics and Design Volunteers",
      color: "orange",
      positions: "10",
      description: "Create visually compelling assets for MORS campaigns.",
      learnMoreContent: "Graphics and Design Volunteers bring MORS campaigns to life through visually compelling assets. You'll create posters, infographics, and digital visuals that communicate MORS's mission effectively. This role is ideal for individuals with a strong sense of design and proficiency in tools like Adobe Photoshop or Canva.",
      requirements: [
        "Proficiency in graphic design tools (e.g., Canva, Adobe Photoshop)",
        "Strong attention to detail and visual aesthetics"
      ]
    }
  ];

  return (
    <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
      <h2 className="text-2xl font-semibold mb-6 text-blue-400">Non-Managerial Roles</h2>
      <div className="space-y-6">
        {roles.map((role, index) => (
          <PositionCard key={index} {...role} />
        ))}
      </div>
    </section>
  );
};