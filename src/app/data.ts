export type Question={id:string;category:'personal'|'behaviour';field?:string;tags?:string[];question:string;options:string[]};
export const sets:Question[][]=[
[
{id:'s1_q1',category:'personal',field:'occupation',question:'What is your primary occupation?',options:['Full-time salaried job','Business owner / self-employed','Student','Full-time trader','Retired / other']},
{id:'s1_q2',category:'personal',field:'experience_years',question:'How long have you been trading?',options:['Less than 1 year','1-3 years','3-5 years','More than 5 years']},
{id:'s1_q3',category:'personal',field:'income_dependence',question:'How much of your monthly expenses depends on trading income?',options:["None, it's extra money",'Up to 25%','25-75%','Almost all of it']},
{id:'s1_q4',category:'behaviour',tags:['Revenge Trading','Disciplined Trading','Emotional Stability'],question:'After a losing trade, what do you usually do next?',options:['Take a new trade right away to recover','Take a break and reassess','Continue with my plan as normal','Stop trading for the day']},
{id:'s1_q5',category:'behaviour',tags:['Ignoring Stop-Losses','Stop-Loss Adherence'],question:'When price approaches your stop-loss, what do you do?',options:['Let it hit as planned','Move it further away','Remove it completely','Exit manually before it hits']},
{id:'s1_q6',category:'behaviour',tags:['Overtrading','Controlled Trading Frequency'],question:'How many of your trades are taken without a clear, valid setup?',options:['Almost none','Around 1 in 4','Around half','Most of them']},
{id:'s1_q7',category:'behaviour',tags:['Learning from Losses'],question:'How often do you review your losing trades?',options:['After every loss','Weekly','Rarely','Never']}],
[
{id:'s2_q1',category:'personal',field:'work_hours',question:'How many hours per week does your main job or study take?',options:['Less than 20','20-40','40-60','More than 60']},
{id:'s2_q2',category:'personal',field:'trading_time_per_day',question:'How much time can you give to trading on a typical day?',options:['Less than 1 hour','1-3 hours','3-6 hours','Full market hours']},
{id:'s2_q3',category:'personal',field:'instruments',question:'What do you mainly trade on NSE/BSE?',options:['Equity (intraday)','Equity (delivery / swing)','Index F&O (Nifty, Bank Nifty, Sensex)','Stock F&O']},
{id:'s2_q4',category:'behaviour',tags:['FOMO','Patience'],question:'A stock you were watching rallies sharply without you. What do you do?',options:['Jump in immediately','Enter late with a smaller size','Wait for a pullback or new setup','Skip it and move on']},
{id:'s2_q5',category:'behaviour',tags:['Consistent Position Sizing','Overleveraging'],question:'How does your position size change from trade to trade?',options:['Fixed rule, always the same','Slightly varies with confidence','Increases after wins','Increases after losses']},
{id:'s2_q6',category:'behaviour',tags:['Profit Booking','Greed'],question:'When a trade reaches your profit target, what do you do?',options:['Book profit as planned','Book part and hold the rest','Hold for more',"I don't set targets"]},
{id:'s2_q7',category:'behaviour',tags:['Lack of Discipline','Strategic Consistency'],question:'Do you have a written trading plan, and do you follow it?',options:['Yes, and I follow it strictly','Yes, but I often deviate','Only a mental plan','No plan']}],
[
{id:'s3_q1',category:'personal',field:'trading_role',question:'How does trading fit into your professional life?',options:['Side activity alongside a job','Part of my business or finance role','My full-time profession','Learning / practising while studying']},
{id:'s3_q2',category:'personal',field:'capital_range',question:'What is your approximate trading capital?',options:['Under ₹50,000','₹50,000 - ₹5 lakh','₹5 lakh - ₹25 lakh','Above ₹25 lakh']},
{id:'s3_q3',category:'personal',field:'learning_source',question:'How did you mainly learn trading?',options:['Self-taught (videos, books)','Paid course or mentor','Professional / work experience','Mostly learning by trading']},
{id:'s3_q4',category:'behaviour',tags:['Panic Selling','Emotional Stability'],question:'The market drops sharply while you hold a profitable position. What do you do?',options:['Sell immediately','Tighten my stop-loss','Hold per my plan','Add to the position']},
{id:'s3_q5',category:'behaviour',tags:['Loss Aversion','Stop-Loss Adherence'],question:'A trade is deep in loss and past your planned exit. What do you do?',options:['Exit and accept the loss','Wait for it to come back to breakeven','Average down','Hold indefinitely']},
{id:'s3_q6',category:'behaviour',tags:['Overleveraging','Risk Management'],question:'How do you decide how much leverage or margin to use?',options:['Fixed low limit set by my risk rules','Depends on how confident I feel','Use as much as the broker allows',"I don't track it"]},
{id:'s3_q7',category:'behaviour',tags:['Confirmation Bias'],question:'Before entering a trade, do you look for evidence against it?',options:['Always','Sometimes','Rarely','Never, I trust my first read']}],
[
{id:'s4_q1',category:'personal',field:'occupation',question:'Which best describes your work background?',options:['Technology / engineering','Finance / banking','Business / sales','Other']},
{id:'s4_q2',category:'personal',field:'job_stress',question:'How stressful is your main job or study on most days?',options:['Low','Moderate','High','Very high']},
{id:'s4_q3',category:'personal',field:'trading_schedule',question:'When do you usually trade?',options:['Before work / market open','During work hours','After work','Throughout the day']},
{id:'s4_q4',category:'behaviour',tags:['Emotional Stability','Disciplined Trading'],question:'How often do fear, greed, or frustration drive your trading decisions?',options:['Rarely','Sometimes','Often','Almost always']},
{id:'s4_q5',category:'behaviour',tags:['Strategic Consistency','Lack of Discipline'],question:'After a losing streak, what do you do with your strategy?',options:['Stick to it and review','Make small adjustments','Switch to a new strategy','Keep switching until something works']},
{id:'s4_q6',category:'behaviour',tags:['Revenge Trading','Overtrading'],question:'On a day with 2 or more consecutive losses, how do you trade the rest of the day?',options:['Stop trading','Trade less, with smaller size','Trade as usual','Trade more or bigger to recover']},
{id:'s4_q7',category:'behaviour',tags:['Greed','Profit Booking'],question:'How often does a winning trade turn into a loss because you held too long?',options:['Never','Rarely','Fairly often','Very often']}],
[
{id:'s5_q1',category:'personal',field:'age_group',question:'What is your age group?',options:['18-24','25-34','35-49','50+']},
{id:'s5_q2',category:'personal',field:'trading_goal',question:'What is your main goal from trading?',options:['Build long-term wealth','Generate regular income','Short-term profits','Learn and gain experience']},
{id:'s5_q3',category:'personal',field:'work_trading_overlap',question:'Do you trade while at work or in class?',options:['Never','Occasionally','Often','Constantly']},
{id:'s5_q4',category:'behaviour',tags:['Risk Management','Consistent Position Sizing'],question:'What share of your capital do you risk on a single trade?',options:['1% or less','1-3%','3-10%','More than 10% or no fixed limit']},
{id:'s5_q5',category:'behaviour',tags:['Ignoring Stop-Losses','Stop-Loss Adherence'],question:'How often have you moved or removed a stop-loss after entering a trade?',options:['Never','Rarely','Often','Almost every losing trade']},
{id:'s5_q6',category:'behaviour',tags:['Overtrading','Patience','Controlled Trading Frequency'],question:'When there is no good setup, what do you do?',options:['Wait patiently','Take a smaller trade anyway','Trade something just to stay active','Feel restless and trade impulsively']},
{id:'s5_q7',category:'behaviour',tags:['Confirmation Bias'],question:'When news or data contradicts your open trade, what do you do?',options:['Reassess and exit if needed','Look for other data that supports me','Ignore it','Add to the position']}]
];
