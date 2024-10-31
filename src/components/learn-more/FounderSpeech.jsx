import React from 'react';
import { useTranslation } from 'react-i18next';

const FounderSpeech = () => {
  const { t } = useTranslation();
  
  return (
    <div className="max-w-4xl mx-auto mb-16 px-4">
      <div className="border-b-2 border-gray-200 mb-6 pb-4">
        <h1 className="font-serif text-4xl text-center mb-2 text-white">The Daily Reform</h1>
        <p className="text-center text-gray-400 text-sm">Volume 1, Issue 1 - Education Reform Special Edition</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-lg">
          <h2 className="font-serif text-3xl text-white mb-4 text-center">{t('founder.title')}</h2>
          <p className="text-sm text-center text-gray-400 mb-6">
            {t('founder.author')}
            <span className="mx-2">|</span>
            {t('founder.role')}
          </p>
          
          <div className="prose prose-invert max-w-none">
            <div className="font-serif space-y-6 text-gray-300">
              <p className="text-xl leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                {t('founder.intro')}
              </p>
              
              <div className="my-6 border-l-4 border-gray-500 pl-4 italic">
                {t('founder.quote')}
              </div>
              
              <p className="text-xl leading-relaxed">
                {t('founder.paragraph1')}
              </p>
              
              <h3 className="text-xl font-bold mt-8 mb-4">{t('founder.stats_title')}</h3>
              <p className="text-xl leading-relaxed">
                {t('founder.stats_content')}
              </p>
              
              <h3 className="text-xl font-bold mt-8 mb-4">{t('founder.proposal_title')}</h3>
              <p className="text-xl leading-relaxed">
                {t('founder.proposal_content')}
              </p>
            </div>
          </div>
        </div>
        
        <aside className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-lg h-fit">
          <h3 className="font-serif text-xl font-bold mb-4 text-white">Key Points</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start space-x-2">
              <span className="font-bold text-xl">90%</span>
              <span>of GCSE knowledge lost within one year</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-xl">70%</span>
              <span>of employers prioritize skills over qualifications</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-xl">2</span>
              <span>tiers of proposed Foundation Skills Certificates</span>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default FounderSpeech;