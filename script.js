"use strict";
const scenarios=[
 [
  "Interest",
  "I’m not interested.",
  "Fair enough. Before I go, are you happy with what you’re paying, or is switching just not worth the hassle right now?",
  "Ask one clarifying question if they’re open to it. If they name a concern you can solve, say: “Let’s check the options at your address and see what solves that.” If they give a clear no, wrap up.",
  "Before I let you go, is there one thing you’d change about your current internet?",
  "If there’s one thing you’d change about your internet bill or service, let’s see if there’s a plan that fixes it."
 ],
 [
  "Timing",
  "I need to talk to my spouse.",
  "Of course. What’s the first question your spouse is going to ask when you bring it up? Let’s make sure you have that answer.",
  "“Let’s get you both the same written quote. What’s a good time for us to go over it together?” Wait for both to make their decision before booking.",
  "What would make this an easy comparison for both of you?",
  "Let’s narrow it down to one plan and put the monthly total in writing so you both have the same numbers."
 ],
 [
  "Timing",
  "Can you send me the info first?",
  "Absolutely. What are you hoping to figure out from the info? I’ll put that at the top so you don’t have to dig for it.",
  "“I’ll send the full monthly cost and installation details. Let’s pick a time to go over it after you’ve had a chance to compare.”",
  "I’ll send a short breakdown. Which part should I put right at the top?",
  "Let’s pick the plan that fits your household first so the quote I send is actually useful."
 ],
 [
  "Trust",
  "I switched away because I kept losing internet.",
  "I’d be hesitant too after that. What happened the last time it went out? I want to see whether we can address what made you leave.",
  "“Let’s check the install and support details first. If those address what happened last time, we can plan the switch around your current service.”",
  "What would need to be different this time for you to consider coming back?",
  "Let’s start with what went wrong last time and check what support options you’d have before you decide."
 ],
 [
  "Price",
  "My current plan is cheaper.",
  "When you say cheaper, is that the amount you actually pay every month or the advertised rate? Let’s compare the bill to the quote.",
  "Let’s compare the full monthly cost. If the quote works for you, let’s confirm the plan and review the order.",
  "Let’s compare what actually comes out of your account each month. Does that lower rate include equipment?",
  "Let’s put your current internet total next to the lowest plan that meets your needs and see what the difference is."
 ],
 [
  "Interest",
  "My internet works fine.",
  "That’s a good reason to stay. If I could match what works for you and lower the bill, would that make a comparison worthwhile?",
  "If they name something they want to improve: “Let’s compare a plan that solves that and see what it comes to at your address.” If they’re happy as is, thank them.",
  "Good to hear. If the service stayed just as useful but the bill changed, would a price comparison be worth a minute?",
  "Let’s use what already works for you as the baseline and see whether we can match it for less."
 ],
 [
  "Trust",
  "I don’t want to lose internet during the switch.",
  "I wouldn’t ask you to risk going without internet. Is the main worry missing work, or just getting stuck without a connection at home?",
  "Let’s verify that first. Once you’re comfortable with the written terms, we can review the order.",
  "Let’s go over what you can keep running during the switch so you can decide whether the plan works for you.",
  "Let’s check whether you can keep both connections active long enough to test the new one before canceling."
 ],
 [
  "Price",
  "My promotional rate hasn't ended yet.",
  "I’d keep a good promo too. Do you know when yours ends and what the price goes to? That’s the number I’d compare against.",
  "Let’s compare the full monthly cost. If the quote works for you, let’s confirm the plan and review the order.",
  "When your current rate ends, what will the bill go up to?",
  "Let’s compare your promo rate, your rate after it ends, and the written fiber quote side by side."
 ],
 [
  "Price",
  "I don't want my bill jumping later.",
  "I get it. Is your concern a promo ending or fees being added later? Let’s look at what the written offer says about each.",
  "Let’s compare the full monthly cost. If the quote works for you, let’s confirm the plan and review the order.",
  "Let’s check which part of the price is guaranteed and what could still change.",
  "Let’s pull up the written offer and see which charges are fixed and which can change."
 ],
 [
  "Price",
  "Are there hidden fees?",
  "That’s a fair question. Let me show you what’s monthly and what’s a one-time charge so you know what the first bill could look like.",
  "Let’s compare the full monthly cost. If the quote works for you, let’s confirm the plan and review the order.",
  "I’ll separate the monthly total from one-time charges so you can see both before deciding.",
  "Let’s go line by line through the quote and separate one-time charges from your monthly total."
 ],
 [
  "Price",
  "I'm on a tight budget.",
  "What monthly total are you trying to stay under? We can start there and see what covers what you actually use.",
  "Let’s compare the full monthly cost. If the quote works for you, let’s confirm the plan and review the order.",
  "Let’s start with your budget and work backward to the speed you actually need.",
  "Let’s start with your monthly limit and find the lowest tier that covers what you actually use."
 ],
 [
  "Price",
  "I don't want to pay for installation.",
  "I hear you. Is it the upfront cost that would stop you? Let’s pull up your address and check exactly what the quote lists.",
  "Let’s compare the full monthly cost. If the quote works for you, let’s confirm the plan and review the order.",
  "I’ll check whether setup is included in your quote and show you any exceptions in writing.",
  "Let’s check the one-time charges for your address and include them in the total before you decide."
 ],
 [
  "Price",
  "My provider offered me a discount to stay.",
  "Nice, they gave you a reason to stay. How long does that lower price last? Let’s see how both totals look over the same period.",
  "Let’s compare the full monthly cost. If the quote works for you, let’s confirm the plan and review the order.",
  "What will your bill look like after the retention discount runs out?",
  "Let’s put their retention offer next to ours and compare what each costs after the discount ends."
 ],
 [
  "Timing",
  "I'm busy right now.",
  "Got it. I’ll let you get back to it. If you’d rather reconnect, what’s a better time for you?",
  "Let’s confirm what needs to happen before you’re ready. We can review the quote now or agree on a time to follow up.",
  "I can give you the headline in ten seconds, or we can pick a better time to talk.",
  "I’ll keep it brief: let’s start with the monthly total, so you can quickly tell if it’s worth a closer look."
 ],
 [
  "Timing",
  "I'm moving soon.",
  "Makes sense. Do you need service at your current place, or is this really about getting internet at the new one?",
  "Let’s confirm what needs to happen before you’re ready. We can review the quote now or agree on a time to follow up.",
  "Let’s see what’s available at the new place before you make any changes.",
  "Let’s check service at your next address first so we’re comparing plans for where you’ll actually live."
 ],
 [
  "Timing",
  "I just switched providers.",
  "I can see why you wouldn’t want to do it twice. What made you switch in the first place, and did the new plan fix it?",
  "Let’s confirm what needs to happen before you’re ready. We can review the quote now or agree on a time to follow up.",
  "What convinced you to make that switch? That’ll tell us whether there’s even a reason to compare.",
  "Let’s see if your new plan has any cancellation costs before we compare a switch."
 ],
 [
  "Timing",
  "I can't take time off for installation.",
  "I get that. Is the concern having to be home at all? We can check what the provider requires before you make a decision.",
  "Let’s confirm what needs to happen before you’re ready. We can review the quote now or agree on a time to follow up.",
  "Let’s check whether anyone needs to be home and what Frontier requires for setup.",
  "Let’s check what the provider requires you to be home for so you can decide whether it fits your routine."
 ],
 [
  "Timing",
  "I'm waiting until my contract ends.",
  "When does the contract end, and what would it cost to leave early? Once we know those two numbers, we can see whether waiting makes sense.",
  "Let’s confirm what needs to happen before you’re ready. We can review the quote now or agree on a time to follow up.",
  "Let’s compare the cost of switching now with waiting out the contract.",
  "Let’s compare any early termination fee with the potential monthly savings and see when a switch would make sense."
 ],
 [
  "Timing",
  "Let me think about it.",
  "Of course. What’s the one thing you’re still weighing? I can help you get a straight answer before you take time to decide.",
  "Let’s confirm what needs to happen before you’re ready. We can review the quote now or agree on a time to follow up.",
  "What’s the one thing you’d want to feel sure about before deciding?",
  "Let’s narrow it down to the one detail you’re unsure about and check it against the written offer."
 ],
 [
  "Trust",
  "How do I know you're actually with the provider?",
  "Good question. I’d verify it too. Use the number or website you find yourself on the provider’s official site and check the offer there.",
  "Let’s verify that first. Once you’re comfortable with the written terms, we can review the order.",
  "I can point you to Frontier’s official contact page so you can verify this independently.",
  "Let’s start with the provider’s official website or published phone number so you can verify the offer independently."
 ],
 [
  "Trust",
  "I don't give personal information over the phone.",
  "Totally fair. We can talk through the plans without sensitive information. If you want to go further, you can use the provider’s official channel.",
  "Let’s verify that first. Once you’re comfortable with the written terms, we can review the order.",
  "We can stick to the general plan details. You can verify the offer through Frontier before sharing anything.",
  "Let’s stick to the general plan details here. You can use the provider’s official channel for anything private."
 ],
 [
  "Trust",
  "The last salesperson promised something I didn't get.",
  "I can see why you’d be skeptical. What did they promise that didn’t show up? Let’s find that specific term in writing this time.",
  "Let’s verify that first. Once you’re comfortable with the written terms, we can review the order.",
  "Let’s put the exact terms in writing so you have something to compare against what you were told.",
  "Let’s put the exact offer terms in writing and go through the promises that matter to you one at a time."
 ],
 [
  "Trust",
  "I heard support is hard to reach.",
  "What did you hear was hard: getting someone on the phone or getting the issue fixed? Those are different things to check.",
  "Let’s verify that first. Once you’re comfortable with the written terms, we can review the order.",
  "When you’ve needed support before, what was the biggest problem getting it resolved?",
  "Let’s check what support channels are listed for the plan and how you’d report a service problem."
 ],
 [
  "Trust",
  "I don't want someone drilling into my house.",
  "I wouldn’t want surprises either. Is drilling a dealbreaker for you? Let’s check what work might be needed before you agree to anything.",
  "Let’s verify that first. Once you’re comfortable with the written terms, we can review the order.",
  "Let’s check what the work involves and who needs to approve it before you commit.",
  "Let’s check what work the provider says may be needed at your home before you agree to anything."
 ],
 [
  "Trust",
  "Can you guarantee it never goes down?",
  "I can’t promise that. Is there something you need online that can’t go down, like work? That helps us figure out whether you need a backup plan too.",
  "Let’s verify that first. Once you’re comfortable with the written terms, we can review the order.",
  "I can’t guarantee zero outages. Let’s talk about what a backup would look like for the things you can’t interrupt.",
  "Let’s look at what the provider actually promises about service and what support is available if it goes down."
 ],
 [
  "Interest",
  "I barely use the internet.",
  "Then I wouldn’t put you on a big plan. What do you use it for in a normal week? We can see whether a basic tier would cover it.",
  "Let’s confirm the plan that covers what you use and review the monthly total together.",
  "Let’s price the smallest plan that covers what you actually do online.",
  "Let’s price the lowest available tier that covers your everyday use before looking at anything faster."
 ],
 [
  "Interest",
  "I already have fiber.",
  "If your fiber’s doing its job, the question is whether there’s a better deal. What speed do you have and what’s your actual monthly total?",
  "Let’s confirm the plan that covers what you use and review the monthly total together.",
  "What’s one thing your current fiber plan could do better? We can compare on that point.",
  "Let’s compare your current fiber plan with the closest match on upload speed, equipment, and monthly total."
 ],
 [
  "Interest",
  "I only need internet for streaming.",
  "That helps. Is it usually one TV or a few screens at the same time? We can start with what covers that.",
  "Let’s confirm the plan that covers what you use and review the monthly total together.",
  "Are you usually streaming on one TV or a few at the same time? That’ll help us pick the right tier.",
  "Let’s count how many screens stream at once and match you to the lowest tier that fits."
 ],
 [
  "Interest",
  "I don't need gigabit speed.",
  "You may not. What’s going on at home when everyone’s online at once? That tells us more than the number on the box.",
  "Let’s confirm the plan that covers what you use and review the monthly total together.",
  "Let’s compare the lower tier first and only look at a gig if your household would use it.",
  "Let’s start below gigabit and see which available plan covers your busiest hour at home."
 ],
 [
  "Interest",
  "I don't want a sales pitch.",
  "Fair enough. I’ll keep it simple. If there’s one thing you’d want to improve, what is it? If nothing comes to mind, I’ll let you go.",
  "Let’s confirm the plan that covers what you use and review the monthly total together.",
  "Fair enough. If you’re open to it, I’ll give you the short version and you can decide whether to keep talking.",
  "Let’s keep it to two numbers: what you pay now and the full monthly quote for a comparable plan."
 ],
 [
  "Competition",
  "My cable bundle includes TV and phone.",
  "That bundle may make sense for you. Which TV channels and phone features do you actually use? We need to price those too for a fair comparison.",
  "“Let’s compare both plans line by line. If the Frontier quote gives you what you want, we can plan the switch around your current service.”",
  "Let’s list the channels and phone features you use, then compare the total cost of keeping them.",
  "Let’s price the internet, TV, and phone you’d actually keep and compare that total with your bundle."
 ],
 [
  "Competition",
  "My wireless home internet works fine.",
  "If it works, there’s no need to change just because it’s wireless. Is there anything you wish it did better when everyone’s online?",
  "“Let’s compare both plans line by line. If the Frontier quote gives you what you want, we can plan the switch around your current service.”",
  "How does your connection hold up on video calls or when everyone is online at once?",
  "Let’s compare the monthly total and the speeds you typically get at your busiest time of day."
 ],
 [
  "Competition",
  "My phone plan gives me an internet discount.",
  "That discount counts. How much would your phone or internet bill change if you split them up? Let’s use that number before comparing.",
  "“Let’s compare both plans line by line. If the Frontier quote gives you what you want, we can plan the switch around your current service.”",
  "Let’s check what happens to both bills if you switch, so the savings are real.",
  "Let’s include the wireless discount you’d lose in the comparison so we know what switching really costs."
 ],
 [
  "Competition",
  "My provider says their speed is the same.",
  "Could be. Is that the download speed or both download and upload? We can compare the actual plan details side by side.",
  "“Let’s compare both plans line by line. If the Frontier quote gives you what you want, we can plan the switch around your current service.”",
  "Let’s pull up the upload speed and full monthly price on both plans. Those are easy to compare side by side.",
  "Let’s compare both upload and download speeds, then see whether the equipment and monthly totals match too."
 ],
 [
  "Competition",
  "My current provider has better reviews.",
  "That’s worth taking seriously. What stood out in the reviews: outages, billing, or getting help? Let’s focus on what matters to you.",
  "“Let’s compare both plans line by line. If the Frontier quote gives you what you want, we can plan the switch around your current service.”",
  "Were the reviews about outages or customer service? That tells me what we should check first.",
  "Let’s take the issue you saw in those reviews and check how the provider says it handles that situation."
 ],
 [
  "Installation",
  "I'm renting and need my landlord's permission.",
  "Good call checking first. Does your landlord need a written description of the work? We can find out what to give them.",
  "Let’s confirm the setup at your address and review the plan and next steps.",
  "I can send a plain-language description of the work so you have something to show your landlord.",
  "Let’s get the written property requirements together so you can show your landlord what they’d be approving."
 ],
 [
  "Installation",
  "I want to keep my own router.",
  "What model do you have? Let’s check whether you can keep using it and what equipment the provider still requires.",
  "Let’s confirm the setup at your address and review the plan and next steps.",
  "Tell me the model and what features you need to keep, and we’ll check compatibility before moving forward.",
  "Let’s check your router model against the provider’s equipment requirements before choosing a plan."
 ],
 [
  "Installation",
  "My Wi-Fi doesn't reach the back room.",
  "Is the signal weak everywhere or just in that room? If it’s just the back room, I’d start with coverage before talking about a faster plan.",
  "Let’s confirm the setup at your address and review the plan and next steps.",
  "Let’s figure out whether the weak spot is your internet connection or the Wi-Fi signal in that room.",
  "Let’s figure out whether the back room needs better Wi-Fi coverage before paying for more speed."
 ],
 [
  "Installation",
  "Can I keep my landline number?",
  "If keeping the number is a must, let’s check whether it can transfer first. Keep the old phone service active while that’s being confirmed.",
  "Let’s confirm the setup at your address and review the plan and next steps.",
  "Let’s confirm the number can transfer before you change or cancel your current phone service.",
  "Let’s check whether your number can be transferred before making any changes to your current phone service."
 ],
 [
  "Installation",
  "I'm not sure fiber is available at my house.",
  "Let’s check your exact address first. A neighbor having fiber doesn’t tell us for sure what’s available at your house.",
  "Let’s confirm the setup at your address and review the plan and next steps.",
  "Let’s start with Frontier’s official availability check. The plan options depend on the exact address.",
  "Let’s check address-level availability first, then look only at the plans actually offered there."
 ],
 [
  "Installation",
  "I need a static IP for work.",
  "Let’s confirm that before anything else. Do you specifically need a fixed public IP, or is there a work application you need to connect to remotely?",
  "Let’s confirm the setup at your address and review the plan and next steps.",
  "Let’s get the exact network requirement from your employer and check whether this plan meets it.",
  "Let’s confirm whether a static IP is offered on the plan and what it costs before we talk about switching."
 ]
];
const el=id=>document.getElementById(id);
const progressKey = "fiber-lab-completed-v1";
function loadProgress(){
 try{
  const saved = JSON.parse(localStorage.getItem(progressKey) ?? "[]");
  return new Set(Array.isArray(saved) ? saved.filter(i => Number.isInteger(i) && i >= 0 && i < scenarios.length) : []);
 }catch{
  return new Set();
 }
}
function saveProgress(){
 try{
  localStorage.setItem(progressKey, JSON.stringify([...done]));
 }catch{
  // Keep the trainer usable if the browser blocks storage.
 }
}
const done=loadProgress(), demo=el("demo"), filters=el("filters");
let category="All", active=0, step=0, opener;
const categories=["All",...new Set(scenarios.map(item=>item[0]))];
for(const name of categories){
 const b=document.createElement("button");b.type="button";b.textContent=name;
 b.addEventListener("click",()=>{category=name;render();});filters.append(b);
}
function render(){
 for(const b of filters.children)b.setAttribute("aria-pressed",String(b.textContent===category));
 const q=el("search").value.trim().toLowerCase(), grid=el("cards");
 grid.replaceChildren();let count=0;
 scenarios.forEach(([type,statement,reply,follow],i)=>{
  if((category!=="All"&&type!==category)||![statement,reply,follow,type].join(" ").toLowerCase().includes(q))return;
  count++;
  const card=document.createElement("button");card.type="button";card.className="card";
  for(const [tag,value] of [["small",type.toUpperCase()],["strong",statement],["small",done.has(i)?"✓ Explored · Practice again":"Open scenario →"]]){
   const node=document.createElement(tag);node.textContent=value;card.append(node);
  }
  card.addEventListener("click",()=>{opener=i;active=i;step=0;show();demo.showModal();el("title").focus();});
  card.dataset.index=String(i);grid.append(card);
 });
 el("count").textContent=count?count+" scenario"+(count===1?"":"s"):"No matching scenarios. Try another search or category.";
 el("progress").max=scenarios.length;el("progress").value=done.size;
 el("progress-label").textContent=done.size+" of "+scenarios.length+" explored";
}
function frontierFact(type,statement){
 const q=statement.toLowerCase();
 if(/landline|phone features/.test(q))return "Frontier Fiber Digital Voice runs over fiber. Check whether their number can transfer and ask about equipment and backup power. Keep the old number active until the transfer is confirmed.";
 if(/static ip|own router/.test(q))return "Check the specific plan and equipment requirements before quoting support for a static IP or third-party router. Ask for the required setup or router model.";
 if(/bundle|phone plan|discount to stay/.test(q))return "Compare the complete household bill. Check the price of any separate TV or phone service and whether switching affects a bundle or wireless discount.";
 if(/wi-fi|back room/.test(q))return "Frontier says its plans include a router, and advertises Whole-Home Wi-Fi on Fiber 1 Gig or faster. Confirm the actual equipment and coverage options on the quote.";
 if(/installation|drilling|renting|lose internet|available at my house/.test(q))return "Check service at the exact address. Frontier says some homes need a line installed before installation. Confirm permissions and routing; suggest testing the new connection before canceling the old one.";
 if(/outage|losing internet|support/.test(q))return "Avoid uptime promises. Confirm the support options and help them plan how to switch with as little interruption as practical.";
 return ({
 Price:"Use the Frontier Broadband Facts label and address quote to compare the full monthly cost, price after any promotion, Auto Pay requirements, and one-time charges. Online examples: Fiber 500 from $44.99 and 1 Gig from $64.99. Check any credits or reward eligibility in the quote; compare the recurring bill separately.",
 Timing:"Confirm any offer expiration. If they have a current contract or are moving, check timing and costs before reviewing the order.",
 Trust:"Offer a written quote and invite the customer to verify it through Frontier’s official site or support channels before sharing account or payment information.",
 Interest:"Frontier advertises unlimited data with no overage charges. If uploads or video calls matter, compare the quoted upload speed with their current plan. Recommend a tier that fits their needs.",
 Competition:"Compare quoted upload and download speeds, equipment, and total cost. Advertised multi-gig examples: 2 Gig from $79.99, 5 Gig from $104.99 and 7 Gig from $124.99. Confirm the quote, equipment requirements and any eligible rewards.",
 Installation:"Confirm address eligibility, installation requirements and charges in the written quote before submitting an order."
 })[type];
}
function show(){
 const [type,statement,reply,follow,short,next]=scenarios[active];
 el("alternatives").hidden=step!==1;
 el("short-reply").textContent=short;
 el("next-reply").textContent=next;
 el("topic").textContent=type;el("customer").textContent=statement;
 el("phase").textContent=["01 / Try it","02 / Sample response","03 / Follow up"][step];
 el("body").textContent=["Say your response out loud. Acknowledge the concern, ask a question to find out what’s holding them back, and think about what would earn a yes. If they clearly ask to end the call, respect that.",reply,follow][step];
 el("facts").hidden=step===0;
 el("fact-text").textContent=frontierFact(type,statement);
 el("exit").hidden=step!==2;
 el("back").disabled=step===0;
 el("forward").textContent=["Reveal response","See follow-up","Finish scenario"][step];
}
el("search").addEventListener("input",render);
el("close").addEventListener("click",()=>demo.close());
el("back").addEventListener("click",()=>{if(step>0){step--;show();}});
el("forward").addEventListener("click",()=>{if(step===2){done.add(active);saveProgress();demo.close();}else{step++;show();}});
demo.addEventListener("close",()=>{render();el("cards").querySelector('[data-index="'+opener+'"]')?.focus();});
render();
