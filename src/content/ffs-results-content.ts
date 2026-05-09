export type Foundation = 'clarity' | 'capacity' | 'cashflow' | 'confidence';
export type Tier = 'Freedom-Ready' | 'Foundation-Builder' | 'Future-Founder';
type ScoreRange = 'low' | 'mid' | 'high';

export function getScoreRange(percent: number): ScoreRange {
  if (percent <= 40) return 'low';
  if (percent <= 73) return 'mid';
  return 'high';
}

export const foundationLabels: Record<Foundation, string> = {
  clarity: 'Clarity',
  capacity: 'Capacity',
  cashflow: 'Cashflow',
  confidence: 'Confidence',
};

// ─── Barrier Pattern Blurbs ───
export const barrierPatterns: Record<Foundation, string> = {
  clarity:
    'Clarity is the foundation most capable founders skip. Not because they do not care about it, but because they confuse enthusiasm with clarity. They feel certain. They feel called. And so they assume they have direction. The test is simple. If you have clarity, you can describe what you are building in one sentence. Same answer every time. Specific enough that the person listening can repeat it accurately. If your answer sounds slightly different each time you give it, you are still searching for the language.',
  capacity:
    'Capacity is the foundation that ambitious people underestimate most consistently. The assumption sounds reasonable. I have built a career through sheer effort, so I will just apply that same effort to the new business. The flaw in that logic is that the career you built was inside a system designed to give you back energy. Through structure, paychecks, hierarchy, defined roles. The new thing you are building has none of that yet. You have to be the system. This is where capable people break. Not because they cannot work hard, but because they keep running on the engine that worked when there was a system holding them up.',
  cashflow:
    'Cashflow is rarely talked about honestly in founder circles. Everyone wants to discuss vision, brand, marketing, mindset. Cashflow gets reduced to either spreadsheets or shame. Neither is useful. Here is what is true. Financial pressure does not just affect your bank account. It affects your judgment. It changes which clients you take, how you price your work, what you say yes to and what you say no to, and whether you can afford to wait for the right opportunity instead of grabbing the wrong one. A founder making decisions from fear and a founder making decisions from runway are not the same person, even if they have the same business.',
  confidence:
    'Confidence is the foundation that surprises high-achieving people the most. They look at their resume, the promotions, the wins, the credentials, and assume that confidence has already been handled. It has not. The confidence built inside someone else\'s system is not the same confidence required to build your own. The old confidence was built on credentials, role, and external validation. The new one has to be built on something more durable. Trust in your own judgment, willingness to be visible without a corporate title behind your name, and the ability to keep going when no one is grading your work.',
};

// ─── What This Is Costing You ───
export const barrierCosts: Record<Foundation, string> = {
  clarity:
    'Time spent in motion that produces nothing that compounds. Decisions made on instinct that contradict each other six months later. The quiet exhaustion of working hard at something you cannot fully describe. And the sense, often hidden even from yourself, that you are waiting to feel ready before you commit to a direction.',
  capacity:
    'Decisions made when you are too tired to think clearly. Energy spent reacting instead of building. The slow erosion of the parts of your life outside the business that actually keep you human. And the cost most people miss, which is that low capacity makes every other foundation harder to address. You cannot get clarity when your nervous system is fried. You cannot price with confidence when you are exhausted.',
  cashflow:
    'Underpriced work that quietly tells you and your clients that what you do is worth less than it is. Saying yes to clients you should be saying no to. The hidden tax of every decision being shaped by survival math instead of strategic math. And the version of your business that never gets built because you cannot afford the time it would take to build it right.',
  confidence:
    'Decisions you have already made internally but have not acted on, because you are still waiting for permission. Visibility you are quietly avoiding because being seen as a founder feels different than being seen inside a role. Pricing that reflects what you think people will pay rather than what your work is worth. And the slow accumulation of evidence that you cannot trust yourself, which is the opposite of what this stage of your journey requires.',
};

// ─── Three Moves ───
export const barrierMoves: Record<Foundation, { title: string; body: string }[]> = {
  clarity: [
    {
      title: 'Write the one-sentence test.',
      body: 'Today, write your business in one sentence. Not a paragraph, not a pitch deck. Use this structure. I help [specific person] solve [specific problem] by [specific method]. If you cannot finish that sentence, that is your answer. Clarity does not come from more thinking. It comes from forcing yourself to commit to language and testing whether it holds.',
    },
    {
      title: 'Read it out loud to one person.',
      body: 'This week, find one person, a friend or a former colleague or anyone with a brain, and read your sentence out loud to them. Watch their face. Listen to your own voice. The places where you flinch, soften the language, or add caveats are the places where you do not yet have clarity. Note them.',
    },
    {
      title: 'Identify the one client you would build for.',
      body: 'Picture one specific person, real or composite, who has the problem you solve. What is their job. What is the moment they would think of you. What would they be searching for online. This is not market research. It is forcing your idea into a specific human, where it can be tested.',
    },
  ],
  capacity: [
    {
      title: 'Audit last week, honestly.',
      body: 'Pull up your calendar from the last seven days and count the hours you actually spent on your business. Not the time you thought about it, not the time you intended to spend, but the time that left a mark. Do not judge it. Just count it. Most people are shocked by the gap between perceived and actual time. That gap is your capacity problem made visible.',
    },
    {
      title: 'Protect three blocks this week.',
      body: 'In your calendar, this week, block three two-hour windows that nothing else can claim. Not meetings, not errands, not catch-up. Three blocks. Six hours. Treat them like surgery. The point is not the volume of work. The point is reclaiming your relationship with protected time, because everything you build will require it.',
    },
    {
      title: 'Name what you are carrying alone.',
      body: 'Write down the three things in your business or life right now that you are quietly carrying alone, that you have not asked for help with even though help exists. Naming them is not asking for help yet. It is the move that makes asking possible.',
    },
  ],
  cashflow: [
    {
      title: 'Calculate your actual burn rate.',
      body: 'This week, sit down with your bank statements from the past three months and calculate the real number you need every month to maintain your current life. Not your aspirational number. The actual one. Write it down. Most founders have never done this honestly.',
    },
    {
      title: 'Calculate your runway in months.',
      body: 'Take your liquid savings, divide by the burn rate you just calculated, and write down the number of months you can sustain yourself without new income. That number is the foundation of every financial decision you will make in your transition. It is the number that turns fear into strategy.',
    },
    {
      title: 'Set a price floor for your work.',
      body: 'Pick one offer or service you provide. Calculate what you would need to charge, and how many clients you would need, for it to fully cover your monthly burn rate. That is your floor. Anything below that is a hobby. This is not about whether you charge that amount today. It is about whether you can see the math clearly enough to make decisions from it.',
    },
  ],
  confidence: [
    {
      title: 'Tell one person, out loud, what you are building.',
      body: 'This week, tell one trusted person what you are building. Not for approval, not for advice. The point is not the conversation. The point is the act of saying it out loud to a real human. Confidence does not come from internal affirmation. It comes from external expression. Every time you say it, it gets more real.',
    },
    {
      title: 'Update your introduction.',
      body: 'The next time someone asks what you do, try leading with your business identity instead of your corporate title. Watch what happens internally when you do. The discomfort you feel is not weakness. It is the muscle of identity transition being used. The only way it strengthens is through use.',
    },
    {
      title: 'Write down three pieces of evidence.',
      body: 'Confidence is built on evidence, not affirmation. Write down three specific moments, recent and real, when you trusted your own judgment and were right. Specific moments. Specific decisions. Specific outcomes. Read it back. That is the version of you that will build the business. Get to know that person.',
    },
  ],
};

// ─── Five Questions (Universal) ───
export const fiveQuestions: string[] = [
  'What is the truth about your business right now that you have been working hard not to look at?',
  'If you knew exactly what to do next, what would you do this week?',
  'Where in your life or work are you waiting for permission, and whose permission are you waiting for?',
  'What are you avoiding deciding, and what is that avoidance costing you each week?',
  'If you stopped needing this business to be impressive, what would you actually build?',
];

// ─── Executive Summaries (Greeting paragraph) ─── keyed by tier + barrier
export const executiveSummaries: Record<Tier, Record<Foundation, string>> = {
  'Freedom-Ready': {
    clarity:
      '{firstName}, your overall score places you in a strong position to move forward. You have the energy, resources, and resilience to build — but your clarity is the piece that needs the most attention right now. Without a locked-in vision, even capable founders end up building in circles. The good news: your other foundations are solid enough that once you sharpen your clarity, the rest will accelerate.',
    capacity:
      '{firstName}, your score tells us something important: you know what you want to build and you have the confidence to do it — but the structure of your current life is working against you. Time, energy, and support are the practical scaffolding of any business, and right now that scaffolding needs reinforcing. This is not a motivation problem. It is an architecture problem, and it is solvable.',
    cashflow:
      '{firstName}, you have the clarity, energy, and belief to build — but financial pressure is the single biggest threat to your momentum. When money is tight, founders make fear-based decisions: underpricing, chasing the wrong clients, or launching before the offer is ready. Your next move should focus on building the financial runway that lets you make strategic choices instead of survival choices.',
    confidence:
      '{firstName}, your foundations are strong across the board — except for the one that matters most in the long run. You have the vision, the time, and the resources, but something is holding you back from fully stepping into the founder identity. This is the most common barrier for high-achieving professionals, and it is also the most misunderstood. It is not about self-belief in the abstract. It is about building an internal operating system that lets you trust your own judgment when nobody else is giving you permission.',
  },
  'Foundation-Builder': {
    clarity:
      '{firstName}, your score tells us you are in the building phase — which is exactly where most serious founders start. Your clarity needs the most work right now. The vision is still forming, the market is not fully defined, and decisions feel harder than they should. This is not a problem of intelligence or capability. It is a sequencing problem: you are trying to build before the blueprint is finished. The work ahead is about getting specific — about what you do, who you serve, and why it matters.',
    capacity:
      '{firstName}, you are building toward something real, but your current capacity is the bottleneck. Time, energy, and support are not luxuries — they are the infrastructure that makes everything else possible. Right now, the gap between your ambition and your available capacity is creating friction. Closing that gap is less about doing more and more about restructuring what already exists.',
    cashflow:
      '{firstName}, your foundations are developing, and cashflow is where the most tension lives. Financial uncertainty does not just limit what you can invest — it changes how you think. When the runway is short, founders default to urgency over strategy. The work ahead is about creating enough financial breathing room that you can build with intention rather than desperation.',
    confidence:
      '{firstName}, you are in a strong developmental stage, but confidence is the area that needs the most deliberate attention. This is not about positive thinking. It is about building the evidence, the identity, and the internal structure that allows you to trust your own direction — especially when external validation is scarce. The transition from employee to founder requires an identity shift that most people underestimate.',
  },
  'Future-Founder': {
    clarity:
      '{firstName}, your score reflects that you are still in the early stages of this journey — and clarity is the foundation that needs the most attention. This is not a failure. It is an honest starting point. Many of the most successful founders began exactly where you are now: with a sense that something needs to change, but without the specifics yet. The path forward is about exploration with structure, not pressure to have all the answers immediately.',
    capacity:
      '{firstName}, your results show that you are early in the process, and capacity is the area that needs the most foundational work. Right now, the gap between where you are and where you want to be may feel wide. That is normal. The key is not to force it, but to start making small, deliberate changes to how your time, energy, and support systems are structured.',
    cashflow:
      '{firstName}, you are at the beginning of this journey, and cashflow is the foundation that needs the most groundwork. Financial readiness is not about having unlimited resources — it is about understanding what you need, what you have, and what the gap looks like. Many founders skip this step and pay for it later. Taking the time now to build financial clarity will change the quality of every decision you make going forward.',
    confidence:
      '{firstName}, your score places you in the exploratory phase, and confidence is the area that needs the most attention. This makes sense: you are considering something that challenges your current identity, and that process naturally creates uncertainty. The founders who build lasting businesses are not the ones who start with confidence. They are the ones who learn to build it deliberately, through action, reflection, and support.',
  },
};

// ─── Foundation Narratives for the Four C Cards ─── keyed by foundation + score range
export const foundationNarratives: Record<Foundation, Record<ScoreRange, string>> = {
  clarity: {
    low: 'Your clarity scores indicate that the core elements of your business — the vision, the market, and the decision-making process — are still in early formation. This is not a judgment. It is information. The most dangerous thing a founder can do at this stage is move forward without getting specific.',
    mid: 'You have a developing foundation of clarity. The broad strokes are forming — you have a general sense of direction and some ability to articulate it. But there are gaps. The vision shifts depending on who you are talking to. Decisions still carry more uncertainty than they should.',
    high: 'Your clarity is strong. You know what you are building, who you are building it for, and why it matters. This is a significant advantage — most founders struggle with clarity for much longer. Your ability to articulate a clear vision, define your market, and make decisions with confidence gives you a foundation that the rest of the business can build on.',
  },
  capacity: {
    low: 'Your capacity scores suggest that the practical structure of your life — time, energy, and support — is not yet set up to support a business transition. This is one of the most common and most overlooked barriers. Founders often assume that motivation will compensate for structural limitations. It does not.',
    mid: 'You have some capacity in place, but it is inconsistent. Some weeks the time is there; other weeks it disappears. Energy fluctuates depending on how demanding everything else in your life is. Support from the people around you may be tentative or conditional.',
    high: 'Your capacity is strong. You have structured your time, managed your energy, and built a support system that actively enables your transition. This is rare and valuable. Most founders underestimate how much capacity matters, and many talented people fail not because of a lack of ideas or ability, but because their life structure could not sustain the demands of building.',
  },
  cashflow: {
    low: 'Your cashflow scores point to a real vulnerability. Financial pressure — whether from limited runway, unclear revenue models, or anxiety about investment — changes how you think and how you make decisions. When money is tight, founders default to survival mode: underpricing, chasing the wrong clients, saying yes to everything.',
    mid: 'You have a developing financial foundation. There is some runway, some sense of how the business will make money, and some willingness to invest. But the pressure is real, and it is likely influencing your decisions more than you realize.',
    high: 'Your financial foundation is strong. You have built runway, you have a clear sense of how the business will generate revenue, and you are able to make investment decisions from strategy rather than fear. This gives you a significant advantage. Financial stability does not just buy time — it buys better thinking.',
  },
  confidence: {
    low: 'Your confidence scores reflect the difficulty of the identity transition from professional to founder. This is not a weakness — it is one of the most predictable challenges in entrepreneurship. You have spent years building credibility, expertise, and identity inside a structure that someone else created.',
    mid: 'You are in the middle of an identity transition. Some days you feel like a founder; other days you feel like an imposter. This inconsistency is normal, but it matters — because confidence drives decision-making, pricing, selling, and leadership.',
    high: 'Your confidence is strong. You have made the internal transition from professional to founder, and you are operating from a place of self-trust, resilience, and willingness to seek help when you need it. This is one of the most underrated advantages in entrepreneurship.',
  },
};
