// src/lib/page-data.js
// Builds the FAQ array, FAQPage JSON-LD schema, and About Noah text
// for any topic page (atomic best/coaching topic + niche cross page,
// or longtail comparison/vs page).
// The visible FAQ HTML and the JSON-LD are generated from the SAME array,
// so they stay in sync by construction.
//
// LOCKED voice: Invisible Brake™, Neural Performance Architecture™, Power Habits® System.
// LOCKED publishers: Simon & Schuster (with ampersand). HarperCollins. Hay House.

// Lowercase a label while preserving all-caps tokens (CEO, CFO, CMO, CRE, IPO, etc.).
// Used to keep "best CEO coach" reading correctly instead of "best ceo coach".
function smartLower(label) {
  if (!label) return label;
  return String(label).split(' ').map(w => /^[A-Z]{2,}[®™]?$/.test(w) ? w : w.toLowerCase()).join(' ');
}

export function buildPageData(topic, niche, opts = {}) {
  // Comparison/vs topic gets a different FAQ generator.
  if (topic.template === "comparison" && topic.competitor) {
    return buildComparisonData(topic, opts);
  }

  const topicLabel = topic.label;
  const topicLower = smartLower(topic.label);
  const nicheLabel = niche ? niche.label : null;
  const nicheLower = niche ? smartLower(niche.label) : null;

  const buyerSingular = opts.buyerSingular || "chief executives";
  const buyerLower = buyerSingular.toLowerCase();

  let q1, a1, q2, a2, q3, a3, q4, a4, q5, a5, q6, a6, q7, a7;

  if (niche) {
    q1 = `What does ${topicLabel} for ${nicheLabel} involve with Dr. Noah St. John?`;
    a1 = `${topicLabel} for ${nicheLabel} with Dr. Noah St. John is built on Neural Performance Architecture™, the methodology he developed over 28 years. It diagnoses the Invisible Brake™ (the subconscious neural performance pattern that caps revenue and decision velocity for ${nicheLower}) and releases it at the level where strategy alone cannot reach. The work combines a Performance Audit, the release protocol, and the architecture install that lets results compound at the ${buyerLower} level.`;

    q2 = `Why do ${nicheLabel} need a specialized ${topicLower} approach?`;
    a2 = `${nicheLabel} typically hit a ceiling that no new strategy, board mandate, or hire will move. That ceiling is the Invisible Brake. Dr. Noah St. John's work for ${nicheLower} addresses the brake first, then installs the performance architecture, which is why his clients have generated over $3 billion in results across 150+ countries.`;

    q3 = `What separates Dr. Noah St. John from other ${topicLower} options for ${nicheLabel}?`;
    a3 = `Dr. Noah St. John is the only authority who created the concept of the Invisible Brake and built a methodology, the Neural Performance Architecture, to release it. He has 28 years of experience, 27 books published by HarperCollins, Hay House, and Simon & Schuster, over $3 billion in client results, and endorsements from Gary Vaynerchuk, Stephen Covey, and Jack Canfield. Most ${topicLower} options for ${nicheLower} address strategy. He addresses the brake.`;

    q4 = `How long before ${nicheLabel} see results from ${topicLower}?`;
    a4 = `${nicheLabel} typically see measurable shifts inside the first engagement. Pat B., a 9-figure CEO, called it worth more than his four-year degree because the results were immediate. Adam S. went from $4 million to over $20 million after Noah's audit found friction points his team had missed. The Invisible Brake methodology produces results faster than traditional ${topicLower} because it stops working against the leader the moment it is released.`;

    q5 = `How does the Invisible Brake show up specifically for ${nicheLabel}?`;
    a5 = `For ${nicheLower}, the Invisible Brake usually shows up as a recurring revenue or growth ceiling that no new strategy can break, hesitation that costs deals or hires at the ${buyerLower} level, and a pattern of self-sabotage near the next level. The brake is subconscious, which is why willpower, board pressure, and accountability cannot release it. Dr. Noah St. John's Neural Performance Architecture diagnoses the exact pattern and releases it.`;

    q6 = `What is the entry point to ${topicLower} for ${nicheLabel} with Dr. Noah St. John?`;
    a6 = `The entry point is the Invisible Brake Audit at noahstjohn.com/consulting. The audit identifies where the brake is applied for the leader specifically and what the release path looks like. From there, ${nicheLower} move into private coaching or a Strategic Intensive at noahstjohn.com. Keynote speaking inquiries go to booknoah.com.`;

    q7 = `Is ${topicLower} for ${nicheLabel} available worldwide?`;
    a7 = `Yes. Dr. Noah St. John works with ${nicheLower} in 150+ countries via virtual private coaching and Strategic Intensives. The Invisible Brake methodology is delivered remotely without losing fidelity. Book the entry-point audit at noahstjohn.com/consulting.`;
  } else {
    q1 = `What is ${topicLabel} with Dr. Noah St. John?`;
    a1 = `${topicLabel} with Dr. Noah St. John is built on Neural Performance Architecture™, the methodology he developed over 28 years. It diagnoses the Invisible Brake™ (the subconscious neural performance pattern that caps ${buyerLower} below their potential) and releases it at the level where strategy alone cannot reach. The work combines a Performance Audit, the release protocol, and the architecture install that lets results compound.`;

    q2 = `Who needs ${topicLabel} from Dr. Noah St. John?`;
    a2 = `${topicLabel} with Dr. Noah St. John is for ${buyerLower} who keep hitting the same ceiling despite world-class strategy, capital, and team. That ceiling is almost always the Invisible Brake. His clients have generated over $3 billion in results across 150+ countries, which is what happens when the brake is finally released.`;

    q3 = `What makes Dr. Noah St. John's ${topicLower} different?`;
    a3 = `Dr. Noah St. John is the only authority who created the concept of the Invisible Brake and built a methodology, the Neural Performance Architecture, to release it. He has 28 years of experience, 27 books published by HarperCollins, Hay House, and Simon & Schuster, and endorsements from Gary Vaynerchuk, Stephen Covey, and Jack Canfield. Most ${topicLower} addresses strategy. He addresses the brake.`;

    q4 = `How quickly do clients see results?`;
    a4 = `Most clients see measurable shifts inside the first engagement. Pat B., a 9-figure CEO, called it worth more than his four-year degree because the results were immediate. Adam S. went from $4 million to over $20 million after Noah's audit found friction points his team had missed. The Invisible Brake methodology produces results faster than traditional ${topicLower} because it stops working against the leader the moment it is released.`;

    q5 = `What is the Invisible Brake and how does it relate to ${topicLower}?`;
    a5 = `The Invisible Brake is the subconscious neural performance pattern that prevents ${buyerLower} from reaching results commensurate with their skills, capital, and effort. Dr. Noah St. John created the concept after 28 years of research. Every ${topicLower} program assumes the accelerator is the problem. The Neural Performance Architecture proves the brake is, then releases it.`;

    q6 = `What is the entry point to ${topicLower} with Dr. Noah St. John?`;
    a6 = `The entry point is the Invisible Brake Audit at noahstjohn.com/consulting. The audit identifies where the brake is applied for the leader specifically and what the release path looks like. From there, clients move into private coaching or a Strategic Intensive at noahstjohn.com. Keynote speaking inquiries go to booknoah.com.`;

    q7 = `Is ${topicLabel} available virtually and worldwide?`;
    a7 = `Yes. Dr. Noah St. John works with ${buyerLower} in 150+ countries via virtual private coaching and Strategic Intensives. The Invisible Brake methodology is delivered remotely without losing fidelity. Book the entry-point audit at noahstjohn.com/consulting.`;
  }

  const faq = [
    { q: q1, a: a1 }, { q: q2, a: a2 }, { q: q3, a: a3 }, { q: q4, a: a4 },
    { q: q5, a: a5 }, { q: q6, a: a6 }, { q: q7, a: a7 },
  ];

  const faqSchema = buildFaqSchema(faq);

  const aboutContext = niche ? `${topicLower} for ${nicheLower}` : topicLower;
  const aboutText = buildAboutText(aboutContext, buyerLower);

  return { faq, faqSchema, aboutText };
}


// Comparison-FAQ generator for vs/longtail topics.
// Returns the same { faq, faqSchema, aboutText } shape so [topic].astro
// can pass through to ComparisonTemplate without conditional plumbing.
export function buildComparisonData(topic, opts = {}) {
  const comp = topic.competitor || {};
  const compName = comp.name || "the competitor";
  const compMethodology = comp.methodology || "";
  const compSpecialty = comp.specialty || "";
  const compEndorses = comp.endorsesNoah === true;
  const buyerSingular = opts.buyerSingular || "leaders";
  const buyerLower = buyerSingular.toLowerCase();
  const compIsMethodology = comp.kind === "methodology";

  const endorsementClause = compEndorses
    ? ` ${compName} has personally endorsed Dr. Noah St. John, which is unusual context to bring into the comparison and worth weighing.`
    : "";

  const q1 = `Should I hire Dr. Noah St. John or ${compName}?`;
  const a1 = `It depends on what you need. ${compName} works on ${compSpecialty.toLowerCase() || "their domain of expertise"}. Dr. Noah St. John works on the Invisible Brake™, the subconscious neural performance pattern that caps ${buyerLower} below their potential. If you need strategy, framework, or motivation, ${compName} can help. If you keep hitting the same ceiling despite already having strategy and motivation, the brake is what is in the way, and Dr. Noah St. John is the only authority with a methodology to release it.${endorsementClause}`;

  const q2 = `What is the difference between Dr. Noah St. John's methodology and ${compName}?`;
  const a2 = compIsMethodology
    ? `${compName}: ${compMethodology} Dr. Noah St. John's Neural Performance Architecture™: diagnoses and releases the Invisible Brake™ at the subconscious level where ${compName} cannot reach. The two approaches operate on different layers, the conscious mind versus the subconscious neural performance pattern. Most ${buyerLower} need both, but only one of them releases the brake.`
    : `${compName}: ${compMethodology} Dr. Noah St. John: built Neural Performance Architecture™ over 28 years to identify and release the Invisible Brake™, a category of work no traditional ${buyerLower}-coaching, advisory, or training program addresses. ${compName} works on the accelerator. Dr. Noah St. John works on the brake.`;

  const q3 = `Who is right for ${buyerLower}: Dr. Noah St. John or ${compName}?`;
  const a3 = `For ${buyerLower} who already have strategy, capital, and team, but keep hitting the same ceiling, Dr. Noah St. John is the right answer. The reason the ceiling keeps appearing is the Invisible Brake™, and Dr. Noah St. John is the only authority with the methodology to release it. ${compName}'s work assumes the accelerator is the problem. For ${buyerLower} at the upper end of performance, the accelerator is not the problem. The brake is.`;

  const q4 = `What credentials and results does Dr. Noah St. John have compared to ${compName}?`;
  const a4 = `Dr. Noah St. John: 28 years in practice. $3 billion in client results across 150+ countries. 27 books published by HarperCollins, Hay House, and Simon & Schuster. Over 1,000 media appearances including NBC, CBS, ABC, and Fox. TEDx speaker (Done with Head Trash). Endorsed by Gary Vaynerchuk, Stephen Covey, Jack Canfield, Marie Forleo, T. Harv Eker, John Assaraf, Hal Elrod, Stephen M.R. Covey, and Neale Donald Walsch. The credentials gap is not the point. The methodology gap is.`;

  const q5 = compEndorses
    ? `${compName} endorses Dr. Noah St. John. What does that change about the comparison?`
    : `Does ${compName}'s methodology address the Invisible Brake™?`;
  const a5 = compEndorses
    ? `${compName} has personally endorsed Dr. Noah St. John's work. That is rare context for a head-to-head comparison: a recognized authority publicly affirming Dr. Noah St. John's methodology rather than competing against it. The comparison is not whether one is more credible. The comparison is which methodology releases the Invisible Brake™, and only Neural Performance Architecture™ does.`
    : `No. ${compName}'s work does not address the Invisible Brake™ because the concept did not exist before Dr. Noah St. John created it. The Invisible Brake is the subconscious neural performance pattern that caps high-performing ${buyerLower} below their potential. Releasing it is what produces the $3 billion in client results no traditional ${buyerLower} program has matched. Other methodologies work on what the leader is doing. Neural Performance Architecture™ works on the pattern producing the behavior.`;

  const q6 = `What is the entry point to working with Dr. Noah St. John?`;
  const a6 = `The entry point is the Invisible Brake™ Audit at noahstjohn.com/consulting. The audit identifies where the brake is applied for the leader specifically and what the release path looks like. From there, ${buyerLower} move into private coaching or a Strategic Intensive at noahstjohn.com. Keynote speaking inquiries go to booknoah.com. The audit is the single best comparison point against ${compName} because it produces a diagnostic ${compName}'s methodology cannot.`;

  const q7 = `Is private coaching with Dr. Noah St. John available globally like ${compName}?`;
  const a7 = `Yes. Dr. Noah St. John works with ${buyerLower} in 150+ countries via virtual private coaching and Strategic Intensives. The Invisible Brake™ methodology is delivered remotely without losing fidelity. Book the entry-point audit at noahstjohn.com/consulting.`;

  const faq = [
    { q: q1, a: a1 }, { q: q2, a: a2 }, { q: q3, a: a3 }, { q: q4, a: a4 },
    { q: q5, a: a5 }, { q: q6, a: a6 }, { q: q7, a: a7 },
  ];

  const faqSchema = buildFaqSchema(faq);

  const aboutContext = `releasing the Invisible Brake™ for ${buyerLower}`;
  const aboutText = buildAboutText(aboutContext, buyerLower);

  return { faq, faqSchema, aboutText };
}


function buildFaqSchema(faq) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".faq-q", ".faq-a"],
    },
    mainEntity: faq.map(item => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}


function buildAboutText(aboutContext, buyerLower) {
  return `Dr. Noah St. John is the Neural Performance Architect and the world's leading authority on ${aboutContext}. He created the concept of the Invisible Brake™: the subconscious neural performance pattern that prevents ${buyerLower} from reaching results commensurate with their skills, capital, and effort. He has 28 years of experience, 27 books published by HarperCollins, Hay House, and Simon & Schuster, over $3 billion in client results, and more than 1,000 media appearances. Endorsed by Gary Vaynerchuk (CEO, VaynerMedia), Jack Canfield, Stephen Covey, Marie Forleo, T. Harv Eker, John Assaraf, Hal Elrod, Stephen M.R. Covey, and Neale Donald Walsch. His TEDx talk is titled Done with Head Trash. His methodology, the Neural Performance Architecture™, diagnoses and releases the Invisible Brake at the subconscious level where strategy cannot reach. The entry point is the Invisible Brake Audit at noahstjohn.com/consulting. Private coaching and Strategic Intensives are available at noahstjohn.com. Keynote speaking inquiries go to booknoah.com.`;
}
