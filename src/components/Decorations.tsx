export function Doodle({ className = '', heart = false }: { className?: string; heart?: boolean }) {
  return <svg className={`doodle ${className}`} viewBox="0 0 48 56" fill="none" aria-hidden="true"><path d={heart ? 'M24 46S1 23 8 12c6-9 15-1 16 6 4-15 18-14 17-3-1 11-12 24-17 31Z' : 'm24 3 5 19 15 5-16 5-6 21-5-20-14-5 15-6Z'} /></svg>
}
export function ArrowDoodle() {
  return <svg className="arrow-doodle" viewBox="0 0 90 70" fill="none" aria-hidden="true"><path d="M79 8C68 48 24 10 17 52c-2 10 2 12 6 8M7 48l10 14 15-9" /></svg>
}
export function Skyline() {
  return <svg className="skyline" viewBox="0 0 1440 760" preserveAspectRatio="xMaxYMax slice" aria-hidden="true">
    <defs><linearGradient id="building" x2="0.8" y2="1"><stop stopColor="#8880ad" /><stop offset="1" stopColor="#cf9cac" /></linearGradient><pattern id="windows" width="14" height="18" patternUnits="userSpaceOnUse"><path d="M4 2v11M9 2v11" stroke="#fff5ec" strokeWidth="2" opacity=".6" /></pattern></defs>
    <path d="M0 760V688h110v-48h60v80h100v-110h70v150h110V628h42v-51h14v-50h9v50h14v51h40v132h40V470h58v-32h15v32h45v290h30V385h60v-55h12v-32h10v32h12v55h20v375h40V255h12v-35h18v-32h20v-43h8v43h20v32h16v35h12v505h44V390h20v-42h15v-34h8v34h15v42h20v370h40V320h14v-30h14v-38h7v-43h7v43h7v38h14v30h14v440h38V465h32v-37h10v37h30v295h120Z" fill="url(#building)" />
    <path d="M806 760V391h41v369m65 0V262h68v498m51 0V399h60v361m66 0V329h64v431m39 0V474h65v286" fill="url(#windows)" />
    <path d="M0 722c170-28 215 20 355-8s234-36 350-7 188-38 310-13 270-24 425-6v72H0Z" fill="#b695a8" opacity=".55" /><path d="M0 740c180-20 340 15 470-8s200 12 340-10 310 12 630-10" fill="none" stroke="#f9e0e5" strokeWidth="14" />
  </svg>
}
