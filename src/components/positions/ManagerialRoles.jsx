import React from 'react';
import { PositionCard } from './PositionCard';

export const ManagerialRoles = () => {
  const roles = [
    {
      title: "National Director for Wales",
      color: "blue",
      positions: "1",
      description: "Oversee activities of Regional Directors in Wales, manage relationships with schools and local governments.",
      learnMoreContent: "The National Director for Wales oversees and coordinates all MORS activities in Wales, ensuring alignment with MORS's mission while tailoring strategies to the unique needs of Welsh schools and communities. Responsibilities include supervising Regional Directors, representing MORS at local events, and building relationships with key stakeholders such as educators and policymakers. This role offers the opportunity to shape MORS's impact on a national scale.",
      requirements: [
        "Must reside in Wales",
        "Strong leadership, organisational, and communication skills",
        "Passion for education reform"
      ]
    },
    {
      title: "Regional Directors",
      color: "purple",
      positions: "12 (9 for England, 3 for Wales)",
      description: "Build and maintain relationships with schools and local authorities in your assigned region.",
      learnMoreContent: "Regional Directors play a pivotal role in building MORS's presence in their assigned areas. Responsibilities include engaging with schools, managing school ambassadors, and fostering partnerships with local authorities. Regional Directors act as a key link between the organisation's leadership and local communities, ensuring MORS initiatives are effectively implemented. This role is ideal for individuals with strong organisational skills and a passion for education reform.",
      requirements: [
        "Must reside in the region you are applying to oversee",
        "Excellent interpersonal and organisational skills",
        "Ability to manage local teams and work independently"
      ]
    },
    {
      title: "Board Members",
      color: "green",
      positions: "Varies",
      description: "Join the MORS Board of Directors to provide governance and strategic oversight.",
      learnMoreContent: "Board Members provide essential governance and strategic oversight for MORS. Responsibilities include reviewing and approving major initiatives, budgets, and organisational policies. Board Members also support the Director General in ensuring MORS's mission and values are upheld. This role is by invitation only and offers an opportunity to shape the organisation's long-term direction.",
      warningBox: {
        title: "By Invitation Only",
        description: "Not open to those under 18, except for select YAPM members"
      },
      requirements: [
        "Must be 18 or older (exceptions for select YAPM members)",
        "Expertise in education, governance, finance, or public relations",
        "Proven track record of leadership or advocacy",
        "By invitation only"
      ]
    }
  ];

  return (
    <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
      <h2 className="text-2xl font-semibold mb-6 text-blue-400">Managerial Roles</h2>
      <div className="space-y-6">
        {roles.map((role, index) => (
          <PositionCard key={index} {...role} />
        ))}
      </div>
    </section>
  );
};