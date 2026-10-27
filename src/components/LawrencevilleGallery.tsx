const photos = [
  { src: '/images/lawrenceville-behind-scenes.jpg', alt: 'Community event staff member helping a driver at an outdoor event', caption: 'Behind the scenes of bringing community events to life ♡' },
  { src: '/images/lawrenceville-city-hall.jpg', alt: 'Jasmin and a colleague standing outside Lawrenceville City Hall', caption: 'Growing, learning, and making connections at City Hall ✨' },
  { src: '/lawrenceville-event-booth.jpeg', alt: 'Jasmin at a Lawrenceville event booth displaying artwork and plants', caption: 'A little snapshot from event day!' },
  { src: '/lawrenceville-signup-day.png', alt: 'Jasmin holding her Lawrenceville Summer of Impact certificate at Signing Day 2025', caption: 'Where the journey began — Summer of Impact 2025 ♡' },
]

function GalleryPhoto({ photo }: { photo: typeof photos[number] }) {
  return <figure className="lawrenceville-gallery-photo"><img src={photo.src} alt={photo.alt} loading="lazy" /><figcaption>{photo.caption}</figcaption></figure>
}

export function LawrencevilleGallery() {
  return <section className="lawrenceville-gallery" aria-labelledby="lawrenceville-gallery-heading"><h4 id="lawrenceville-gallery-heading">Little moments in Lawrenceville ♡</h4><div className="lawrenceville-gallery-grid">{photos.slice(0, 2).map(photo => <GalleryPhoto key={photo.src} photo={photo} />)}</div><details><summary>More event memories <span aria-hidden="true">♡</span></summary><div className="lawrenceville-gallery-grid">{photos.slice(2).map(photo => <GalleryPhoto key={photo.src} photo={photo} />)}</div></details></section>
}
