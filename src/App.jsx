import { ExternalLink } from 'lucide-react'
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaSpotify,
  FaSoundcloud,
  FaSteam,
  FaDiscord,
  FaGift,
} from 'react-icons/fa6'
import { SiRiotgames } from 'react-icons/si'
import './App.css'

const socialLinks = [
  {
    name: 'Instagram',
    label: '@_aaron1702',
    href: 'https://instagram.com/_aaron1702',
    icon: FaInstagram,
    hint: 'Reels, Storys, Bilder',
  },
  {
    name: 'TikTok',
    label: '@aaron.thm',
    href: 'https://tiktok.com/@aaron.thm',
    icon: FaTiktok,
    hint: 'Shorts, Clips, Trends',
  },
  {
    name: 'YouTube',
    label: 'Aaron Thamm',
    href: 'https://youtube.com/@keinplan9827',
    icon: FaYoutube,
    hint: 'Videos, Uploads, Livestreams',
  },
  {
    name: 'Discord',
    label: 'aaron1702',
    href: 'https://discord.com/users/681528976103047177',
    icon: FaDiscord,
    hint: 'Server, Kontakt, Community',
  },
  {
    name: 'Steam',
    label: 'Steam-Profil',
    href: 'https://steamcommunity.com/profiles/76561199214310536/',
    icon: FaSteam,
    hint: 'Games, Wishlist, Community',
  },
  {
    name: 'Riot Games',
    label: 'WheatlessWizard#Wheat',
    href: 'https://www.leagueofgraphs.com/summoner/euw/wheatlesswizard-wheat',
    icon: SiRiotgames,
    hint: 'League, Valorant, TFT',
  },
  {
    name: 'Spotify',
    label: 'Musik',
    href: 'https://open.spotify.com/user/uk9ti5jzloql7zivx3oqhj9h3?si=29b510df14594d18',
    icon: FaSpotify,
    hint: 'Playlists, Artist-Profil, Tracks',
  },
  {
    name: 'SoundCloud',
    label: 'Musik',
    href: 'https://soundcloud.com/aaron-thamm-243913338',
    icon: FaSoundcloud,
    hint: 'Demos, Remixes, Uploads',
  },
]

function App() {
  return (
    <main className="page-shell">
      <section className="hero-panel">
        <div className="hero-content">
          <div className="profile-badge">AARON</div>
          <h1>Alle meine Links auf einen Blick</h1>

          <div className="hero-actions">
            <a
              className="primary-link"
              href="https://discord.com/users/681528976103047177"
              target="_blank"
              rel="noreferrer"
            >
              Profile ansehen
              <ExternalLink size={18} />
            </a>
            <span className="note">Direkt aus meinem Discord-Profil erreichbar</span>
          </div>
        </div>

        <aside className="hero-gif" aria-label="Scuba GIF">
          <img
            src="https://media.tenor.com/94j7d6r8kNUAAAAj/scuba.gif"
            alt="Scuba Katze"
          />
        </aside>
      </section>

      <section className="links-section" id="links-grid">
        <div className="section-header">
          <h2>Folge mir hier</h2>
          <p>
            Tippe auf eine Plattform, um mein Profil direkt zu öffnen.
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
          <div className="link-grid">
            <a
              className="link-card"
              href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
              target="_blank"
              rel="noreferrer"
            >
              <div className="link-icon">
                <FaGift size={22} />
              </div>
              <div className="link-copy">
                <strong>Free Giveaway</strong>
                <span>YouTube</span>
                <small>Free RP, Geschenke, Aktionen</small>
              </div>
              <ExternalLink size={18} className="card-arrow" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
