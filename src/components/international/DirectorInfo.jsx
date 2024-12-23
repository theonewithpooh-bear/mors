import { Users, Crown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DirectorInfo = () => {
  return (
    <div className="space-y-8">
      <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-white/10">
        <CardHeader>
          <CardTitle className="text-2xl text-white">Want to become a director?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <Users className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Country Directors</h3>
                <p className="text-gray-300">
                  As a MORS country director, you'll lead our mission in your nation by:
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                  <li>Advocating for educational reform</li>
                  <li>Building local partnerships with schools and institutions</li>
                  <li>Organizing awareness campaigns and events</li>
                  <li>Collaborating with other MORS directors globally</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Crown className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Director General</h3>
                <p className="text-gray-300">
                  The Director General position is currently held by Monty, MORS's founder, who oversees all operations globally:
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                  <li>Coordinating between country directors</li>
                  <li>Setting global strategy and objectives</li>
                  <li>Ensuring consistency in MORS's mission across regions</li>
                  <li>Representing MORS in international educational forums</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-400 mt-4">
            While applications are not yet open, we're looking for passionate individuals who are currently in education and driven to make a difference.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DirectorInfo;