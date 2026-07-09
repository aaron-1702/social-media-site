import {
  Link2,
  Music2,
  Gamepad2,
  MessageCircle,
  Mic2,
  ExternalLink,
} from 'lucide-react'
import './App.css'

const socialLinks = [
  {
    name: 'Instagram',
    label: '@_aaron1702',
    href: 'https://instagram.com/_aaron1702',
    icon: Link2,
    hint: 'Reels, Storys, Bilder',
  },
  {
    name: 'TikTok',
    label: '@aaron.thm',
    href: 'https://tiktok.com/@aaron.thm',
    icon: Music2,
    hint: 'Shorts, Clips, Trends',
  },
  {
    name: 'YouTube',
    label: 'Aaron Thamm',
    href: 'https://youtube.com/@keinplan9827',
    icon: Link2,
    hint: 'Videos, Uploads, Livestreams',
  },
  {
    name: 'Spotify',
    label: 'Musik',
    href: 'https://open.spotify.com/user/uk9ti5jzloql7zivx3oqhj9h3?si=29b510df14594d18',
    icon: Music2,
    hint: 'Playlists, Artist-Profil, Tracks',
  },
  {
    name: 'SoundCloud',
    label: 'Musik',
    href: 'https://soundcloud.com/aaron-thamm-243913338',
    icon: Mic2,
    hint: 'Demos, Remixes, Uploads',
  },
  {
    name: 'Riot Games',
    label: 'WheatlessWizard#Wheat',
    href: 'https://www.leagueofgraphs.com/summoner/euw/wheatlesswizard-wheat',
    icon: Gamepad2,
    hint: 'League, Valorant, TFT',
  },
  {
    name: 'Steam',
    label: 'Steam-Profil',
    href: 'https://steamcommunity.com/profiles/76561199214310536/',
    icon: Gamepad2,
    hint: 'Games, Wishlist, Community',
  },
  {
    name: 'Discord',
    label: 'aaron1702',
    href: 'https://discord.com/users/681528976103047177',
    icon: MessageCircle,
    hint: 'Server, Kontakt, Community',
  },
]

function App() {
  return (
    <main className="page-shell">
      <section className="hero-panel">
        <div className="profile-badge">AARON</div>
        <h1>Alle meine Links auf einen Blick</h1>
        <p className="hero-copy">
          Willkommen auf meiner Link-Seite. Wenn du mich auf Social Media, Musik oder
          Gaming-Plattformen suchst, findest du hier alles direkt gesammelt.
        </p>

        <div className="hero-actions">
          <a className="primary-link" href="#links-grid">
            Profile ansehen
            <ExternalLink size={18} />
          </a>
          <span className="note">Direkt aus meinem Discord-Profil erreichbar</span>
        </div>
      </section>

      <section className="links-section" id="links-grid">
        <div className="section-header">
          <h2>Folge mir hier</h2>
          <p>
            Tippe auf eine Plattform, um mein Profil direkt zu oeffnen.
          </p>
        </div>

        <div className="link-grid">
          {socialLinks.map((item) => {
            const Icon = item.icon

            return (
              <a
                key={item.name}
                className="link-card"
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                <div className="link-icon">
                  <Icon size={22} />
                </div>
                <div className="link-copy">
                  <strong>{item.name}</strong>
                  <span>{item.label}</span>
                  <small>{item.hint}</small>
                </div>
                <ExternalLink size={18} className="card-arrow" />
              </a>
            )
          })}
        </div>
      </section>

      <section className="footer-panel">
        <div>
          <h3>Danke fuers Vorbeischauen</h3>
          <p>
            Wenn du up to date bleiben willst, folge mir auf den Plattformen oben.
          </p>
        </div>
        <div className="footer-tip">
          <span>Quick Note</span>
          <p>Der Link ist fuer Desktop und Mobile optimiert, perfekt zum Teilen auf Discord.</p>
        </div>
      </section>
    </main>
  )
}

export default App
