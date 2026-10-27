import { Doodle } from './Decorations'
import './BeyondCode.css'

function BraceletIllustration() {
  return <svg viewBox="0 0 320 220" fill="none" aria-hidden="true">
    <ellipse cx="160" cy="110" rx="88" ry="65" stroke="#a989b6" strokeWidth="2" />
    {Array.from({ length: 14 }, (_, i) => {
      const angle = i * Math.PI * 2 / 14
      return <circle key={i} cx={160 + 88 * Math.cos(angle)} cy={110 + 65 * Math.sin(angle)} r="11" fill={['#ead6ed', '#f1c8db', '#d7c5e8'][i % 3]} stroke="#ad8bb9" strokeWidth="1.5" />
    })}
    <path d="M160 197s-22-13-20-25c2-10 16-10 20 0 5-10 18-9 20 0 2 12-20 25-20 25Z" fill="#f0c6dc" stroke="#9e78b0" strokeWidth="1.5" />
    <path d="M160 175v-8m-61-57 4 7 8-1-5 6 2 7-7-3-6 4 1-8-6-5 8-1Z" stroke="#8d699f" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
}

export function BeyondCode() {
  return <section className="beyond-code" aria-labelledby="beyond-heading">
    <h3 id="beyond-heading">Beyond the Code <span aria-hidden="true">♡</span></h3>
    <div className="beyond-story-grid">
      <article className="beyond-story" aria-labelledby="rileys-story-heading">
        <figure className="beyond-polaroid"><img src="/images/rileys-way-retreat.jpg" alt="Riley's Way youth leadership retreat participants posing together outdoors" loading="lazy" /><figcaption>Leadership, friendship, and finding community ✨</figcaption></figure>
        <h4 id="rileys-story-heading">Riley's Way Foundation <span>Community &amp; Leadership</span></h4>
        <p>One of my favorite parts of exploring new opportunities is meeting people from different backgrounds. During my time with Riley's Way Foundation, another participant and I created a Latin group where we could celebrate our culture, connect with others, and build meaningful friendships. This experience reminded me how much I value community, leadership, and learning from others.</p>
        <Doodle className="beyond-story-star" />
      </article>
      <article className="beyond-story beyond-bracelets" aria-labelledby="bracelets-story-heading">
        <figure className="beyond-bracelet-art"><BraceletIllustration /><figcaption>a little creativity, a little connection ♡</figcaption></figure>
        <h4 id="bracelets-story-heading">AltaAve Bracelets <span>Creativity &amp; Entrepreneurship</span></h4>
        <p>During my high school entrepreneurship class, I created AltaAve Bracelets, a handmade friendship bracelet business inspired by my desire to bring people together. I designed personalized bracelets that symbolized friendship and connection while gaining hands-on experience with customer communication, inventory management, and sales.<br /><br />This experience sparked my interest in entrepreneurship and taught me how creativity can turn a simple idea into something meaningful. ✨</p>
        <Doodle heart className="beyond-story-heart" />
      </article>
    </div>
  </section>
}
