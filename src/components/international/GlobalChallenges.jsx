import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const GlobalChallenges = () => {
  return (
    <ScrollArea className="h-[600px] pr-4">
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold">Global Education Challenges</h2>
        
        {/* Developed Nations */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-xl text-blue-400">Developed Nations with Education Issues</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-white">United States</h4>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Heavy reliance on standardized testing (e.g., SAT, ACT)</li>
                <li>Significant inequality in education quality between wealthy and underprivileged areas</li>
                <li>Overcrowded classrooms and underpaid teachers in many districts</li>
                <li>High college tuition costs leading to crippling student debt</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white">Australia</h4>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Growing reliance on testing systems like NAPLAN</li>
                <li>Rural and Indigenous communities face stark disparities in access to quality education</li>
                <li>Increasing privatization leading to a widening gap between public and private schools</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white">India</h4>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Intense focus on rote learning and exam scores</li>
                <li>Overemphasis on STEM fields, neglecting arts and holistic development</li>
                <li>Vast disparities between urban and rural schools, with underfunded rural schools</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white">South Korea & Japan</h4>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Hypercompetitive exam culture</li>
                <li>Excessive pressure on students leading to mental health crises</li>
                <li>Lack of focus on creativity and individuality</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white">France</h4>
              <ul className="list-disc pl-5 text-gray-300">
                <li>High-stakes testing like the Baccalauréat</li>
                <li>Teachers often underpaid and overburdened</li>
                <li>Growing disparity between urban and suburban/rural areas</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Developing Nations */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-xl text-orange-400">Developing Nations with Systemic Problems</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-white">Nigeria</h4>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Widespread lack of infrastructure, with many schools lacking basic facilities</li>
                <li>Teacher shortages and unqualified educators</li>
                <li>Gender disparity, especially in rural areas</li>
                <li>Inadequate funding and corruption in education budgets</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white">Pakistan</h4>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Overemphasis on rote learning and exam-based evaluation</li>
                <li>High dropout rates, particularly among girls</li>
                <li>Parallel education systems (elite private vs. struggling public schools)</li>
                <li>Poor teacher training and resources</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white">Somalia</h4>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Extreme lack of infrastructure and teaching staff</li>
                <li>Persistent conflict disrupting education systems</li>
                <li>Reliance on outdated curricula with no real-world application</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white">Haiti</h4>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Poor access to education due to widespread poverty</li>
                <li>Schools are underfunded, overcrowded, and lacking in materials</li>
                <li>Teachers often underpaid and undertrained</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white">Afghanistan</h4>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Political instability and gender restrictions harm education access</li>
                <li>Limited infrastructure, particularly in rural areas</li>
                <li>Reliance on outdated, exam-heavy curricula</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white">South Sudan</h4>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Lowest literacy rates globally due to persistent conflict</li>
                <li>Lack of qualified teachers and resources</li>
                <li>Schools often inaccessible due to remote locations and conflict zones</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Unique Problems */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-xl text-purple-400">Countries with Unique Problems</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-white">Brazil</h4>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Public schools are underfunded compared to private institutions</li>
                <li>High dropout rates due to economic hardship</li>
                <li>Exam-heavy systems discourage creative learning</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white">Indonesia</h4>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Poor teacher training and high absenteeism among educators</li>
                <li>Overcrowded schools with inadequate resources</li>
                <li>Overemphasis on national exams like Ujian Nasional</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white">Yemen</h4>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Education has been devastated by war and political instability</li>
                <li>Many schools destroyed or used for military purposes</li>
                <li>Millions of children out of school, with girls disproportionately affected</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
  );
};

export default GlobalChallenges;
