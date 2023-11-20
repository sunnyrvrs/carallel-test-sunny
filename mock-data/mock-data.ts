export interface Article {
    id: number;
    title: string;
    styling: string;
    heroHeader: string;
    heroBody: string;
    videoUrl?: string | null;
    contentHeader: string;
    contentBody: string;
    buttons: string[];
    imageUrl?: string | null;
}
  
const circleStyling = `rounded-full w-[100px] h-[100px] relative`;

export const articles: Article[] = [
{ 
    id: 1, 
    title: `We're all Caregivers`, 
    styling: circleStyling + ` bg-custom-baby-blue`,
    heroHeader: 'New to caregiving? Take it one step at a time',
    heroBody: 'Long before we had a name for what was happening to my mother, it was clear that she needed help with little things like managing bills and medications',
    videoUrl: 'https://player.vimeo.com/video/879408384?h=19802a0692&title=0&byline=0&portrait=0',
    contentHeader: 'You are a caregiver',
    contentBody: `
    Over time her needs grew. Eventually I was helping out with all of the daily shopping and cooking, as well as taking Mom to her doctor appointments.
    <br/>
    <br/>
    Mom still didn't have an official diagnosis. I didn't think of myself as her caregiver, but the caregiving demands and the stress were piling up.
    <br/>
    <br/>
    I was struggling to keep up with the demands and feeling very alone.
    `,
    buttons: ['New to Caregiving', 'What to Expect'],
    imageUrl: '@/images/articles/article_1.png'
},
{
    id: 2,
    title: `Are You Aging Solo Too?`,
    styling: circleStyling + ` bg-custom-baby-pink`,
    heroHeader: 'Many of us are aging on our own',
    heroBody: 'Recognizing that we are aging solo can help us take steps to make sure we are well prepared for our future and can continue living life the way we want to.',
    videoUrl: null,
    contentHeader: 'Here’s a list of some of the things that have given me peace of mind:',
    contentBody: `
    <ul>
        <li>I have advance directives and a will</li>
        <li>I live in a 55+ community</li>
        <li>I have a great primary care physician</li>
        <li>I use technology</li>
        <li>I know my community</li>
        <li>I know my rights and my benefits</li>
    </ul>
    <br/>
    <br/>
    Aging solo takes initiative and planning. I’ve tried to be forward thinking and prepared. I can’t control everything, and it took time to get everything lined up. But I’m happy with what I’ve done to take care of myself and my own future.
    `,
    buttons: ['Aging Solo', 'What to Expect'],
    imageUrl: '@/images/articles/'
},
{
    id: 3,
    title: `Navigating the Family Dynamics of Caregiving`,
    styling: circleStyling + ` bg-custom-baby-yellow`,
    heroHeader: 'Family dymanics can be complicated',
    heroBody: `We help thousands of family caregivers each year on our Caregiver Support Line and if we had a Top Ten list of challenges we hear about, family dynamics would surely make the list.<br/><br/>
    `,
    videoUrl: null,
    contentHeader: 'Here are three common scenarios our Care Advocates see',
    contentBody: `
    <ul>
        <li>When There Are Disagreements Between Siblings</li>
        <li>When Our Loved One Refuses Help</li>
        <li>When the Caregiver Won’t Accept Help</li>
    </ul>
    <br/>
    <br/>
    Here are some tactics that might help you. 
    <br/>
    <br/>
    <ul>
        <li>Show up and listen, don’t give advice (unless asked)</li>
        <li>Offer to do something specific that they clearly need, rather than asking “how can I help?”. Better yet, just do that thing they clearly need without getting in their way.</li>
        <li>Reinforce that you’re there for them. “You’ve got Mom and I’ve got you.”</li>
        <li>Family meetings can be helpful here, too.</li>
    </ul>
    `,
    buttons: ['Family Dynamics', 'Common Scenarios'],
    imageUrl: '@/images/articles/'
},
{
    id: 4,
    title: `Becoming a Caregiver Overnight`,
    styling: circleStyling + ` bg-custom-baby-pink`,
    heroHeader: 'A caregiving journey often begins unexpectedly',
    heroBody: `Sara became a caregiver unexpectedly to her husband Sam, who suffered a stroke. She’s only 57. They both were working full time and seemed to be in good health. Her story, shared here, is not uncommon, although her identity has been redacted.`,
    videoUrl: null,
    contentHeader: 'How are you caring for Sam?',
    contentBody: `He’s in an in-patient rehab center. Our apartment is on the third floor, and though I felt guilty about it, there was no way to bring him straight home from the hospital. I try to visit him every day but it’s difficult since I work, too. We use FaceTime to chat when I can’t be there. It really keeps his spirits up when we see each other — mine too.
    <br/>
    <br/>
    Much of my time is spent figuring out how to get him home. I need to make sure the apartment is safe for him. He’ll need physical therapy to continue to get better. We may even have to find a new apartment without so many stairs. It’s hard to make plans when I don’t know what condition he will be in when he comes home.`,
    buttons: ['Caregiving Challenges', 'Unexpected Caregiving'],
    imageUrl: '@/images/articles/'
},
{
    id: 5,
    title: `Caregivers Come in All Ages`,
    styling: circleStyling + ` bg-custom-baby-orange`,
    heroHeader: '24% of family caregivers are ages 18 – 34',
    heroBody: 'Elena moved in with her 89-year-old grandmother, who has dementia. She is a 25-year-old family caregiver who has worked with our Care Advocates to navigate her own caregiving journey and find support. Her story, shared here, is not uncommon, although her identity has been redacted.',
    videoUrl: null,
    contentHeader: 'How are you caring for your grandmother?',
    contentBody: `I do most of the cooking and cleaning, though sometimes we like to cook together. Mostly I try to be her companion. She’s been lonely since my grandpa died two years ago. We go for walks and drives and go to church together every week. I take her shopping and to all of her different doctor appointments.
    <br/>
    <br/>
    I help her pick out an outfit to wear every day. She can do most of her personal care, but she just needs to be reminded that it’s time for a bath, for example.`,
    buttons: ['Young Caregivers', 'Family Dynamics'],
    imageUrl: '@/images/articles/'
}
];

export const additionalResources: Article[] = [
{
    id: 6,
    title: `Caregiving Can Be a Balancing Act`,
    styling: `bg-custom-baby-yellow w-[50px] h-[50px] rounded-full`,
    heroHeader: 'Caregiving can be exhausting, even if it’s an act of love.',
    heroBody: 'Maria is 57 and balances a full-time job with caring for her 88-year-old mother. She has worked with our Care Advocates to navigate her own caregiving journey and find support. Her story, shared here, is not uncommon, although her identity has been redacted.',
    videoUrl: null,
    contentHeader: 'Are there aspects of caregiving that you find challenging?',
    contentBody: `Yes, for sure. I work full-time. I try really hard to take care of my Mom and do a good job at work, but sometimes it feels overwhelming. When I am at work, I get stressed thinking about her. When I’m with Mom, I’m worrying about work. It feels like a no-win situation because I can’t juggle it all. I really like my job and the people I work with, but I don’t feel comfortable letting them know what I’m dealing with. I wish I could talk to people who are in the same boat.
    <br/>
    <br/>
    My mom took such good care of me for so many years — I want to do the same for her. It’s a blessing to be able to give back to her. I know that in my heart, but when I am exhausted it doesn’t always feel like a blessing. It feels like a weight. I feel bad to say it but that’s how I feel sometimes.
    `,
    buttons: ['Compassion Fatigue', 'Emotional Support'],
    imageUrl: '@/images/articles/'
},
{
    id: 7,
    title: `I’m a family caregiver. Are you?`,
    styling: `bg-custom-baby-blue w-[50px] h-[50px] rounded-full`,
    heroHeader: 'What’s a family caregiver?',
    heroBody: `
    Someone who is providing unpaid care for a spouse, parent, grandparent, extended family member, neighbor, or friend. 
    <br/>
    <br/>
    Do you help someone with: 
    <br/>
    <br/>
    <ul>
    <li>Rides to appointments?</li>
    <li>Buying, organizing, and taking medications?</li>
    <li>Grocery shopping and/or other errands?</li>
    <li>Getting dressed and/or bathed?</li>
    <li>Cooking and cleaning?</li>
    <li>Getting out of bed or moving around the house?</li>
    <li>Laundry or yard work?</li>
    <li>Paying bills?</li>
    </ul>
    <br/>
    These are collectively known as Activities of Daily Living (ADLs) and if you’re helping someone with any of these, even just one every once in a while, guess what? 
    <br/>
    <br/>
    You’re a family caregiver. 
    `,
    videoUrl: null,
    contentHeader: 'Connecting with other caregivers',
    contentBody: `Meeting other people who understand what you’re going through, because they are going through it too, can be priceless. If for no other reason than the camaraderie between people who truly understand what the other is dealing with, connections with other caregivers can be worth their weight in gold. 
    <br/>
    <br/>
    Will thinking and referring to yourself as a caregiver be a magic wand that makes caregiving for a loved one easy?
    <br/>
    <br/>
    No. 
    <br/>
    <br/>
    But chances are the benefits that spring from doing so will add up to make your caregiving life, at least a little, easier. 
    <br/>
    <br/>
    Who knows, you might even wish that you’d done it sooner. `,
    buttons: ['Community Building', 'Family Caregiver'],
    imageUrl: '@/images/articles/'
}
];

export const allResources = {
    articles: articles,
    additionalResources: additionalResources
};