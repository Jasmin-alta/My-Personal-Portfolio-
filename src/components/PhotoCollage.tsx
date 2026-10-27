import { Doodle } from './Decorations'
export function PhotoCollage() {
  return <div className="photo-collage" aria-label="Memories at Microsoft">
    <figure className="polaroid event-photo"><img src="/images/microsoft-event.jpeg" alt="Jasmin standing in front of a Microsoft event backdrop in Atlanta" fetchPriority="high" /><figcaption>Atlanta, GA ♡</figcaption></figure>
    <figure className="polaroid campus-photo"><img src="/images/microsoft-campus.jpeg" alt="Jasmin with her arms raised behind the Microsoft sign in the campus courtyard" /><figcaption>little moments, big dreams</figcaption></figure>
    <div className="paper-note">exploring<br />new opportunities<br />and experiences<br />always ♡</div>
    <Doodle heart className="photo-heart" /><Doodle className="photo-sparkle" />
  </div>
}
