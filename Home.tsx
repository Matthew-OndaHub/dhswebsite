/* Vibrant Playful Design:
 * - Light pink backgrounds with white cards
 * - Baby blue and orange accents
 * - Rounded corners and soft shadows
 * - Playful animations and energetic typography
 */

import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 gradient-pink-blue overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 container text-center">
          {/* Logo */}
          <div className="mb-8 animate-bounce">
            <img
              src="/images/dunkin-heights-logo.png"
              alt="Dunkin' Heights Select"
              className="h-40 w-auto mx-auto"
            />
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight mb-6 text-foreground">
            DUNKIN' HEIGHTS
            <br />
            <span className="text-primary">SELECT</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 font-light mb-12 max-w-3xl mx-auto">
            Elite basketball program focused on development, discipline, and
            competition.
          </p>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Year-round competition",
              "Structured practices",
              "JV & Varsity teams",
              "Player development focus",
            ].map((highlight, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-soft hover-lift border-2 border-secondary/30"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-primary" />
                </div>
                <p className="text-sm font-semibold tracking-wide text-foreground">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-lg font-bold tracking-wider rounded-full shadow-soft hover-lift"
          >
            JOIN THE ELITE
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-foreground/30 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About DHS Section */}
      <section id="about" className="relative py-32 overflow-hidden">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-16">
              <h2 className="text-6xl md:text-7xl font-display font-bold tracking-tight mb-6">
                ABOUT <span className="text-primary">DHS</span>
              </h2>
              <div className="w-24 h-2 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
            </div>

            {/* Content */}
            <div className="space-y-8 text-lg leading-relaxed text-foreground/70">
              <p className="text-xl text-foreground font-semibold">
                Dunkin' Heights Select is a competitive basketball organization
                built to develop skilled, disciplined athletes who excel both on
                and off the court.
              </p>
              <p>
                Our program emphasizes the fundamentals of basketball while
                cultivating high basketball IQ through strategic training and
                competitive gameplay. We believe that mastery of the basics
                creates the foundation for advanced performance.
              </p>
              <p>
                Team culture is at the heart of everything we do. We foster an
                environment of accountability, mutual respect, and relentless
                work ethic. Every player is expected to contribute to the
                collective success of the program.
              </p>
              <p>
                Through structured practices, year-round competition, and
                exposure to elite-level showcases, we prepare our athletes for
                the next level—whether that's high school varsity, prep school,
                or collegiate basketball.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8 mt-16">
              {[
                { number: "1+", label: "Year of Excellence" },
                { number: "25+", label: "Players Developed" },
                { number: "10+", label: "Professional features" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-8 bg-white rounded-3xl shadow-soft hover-lift border-2 border-secondary/20"
                >
                  <div className="text-5xl font-display font-bold text-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-foreground/60 tracking-wider uppercase font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rosters Section */}
      <section id="rosters" className="relative py-32 overflow-hidden gradient-pink-blue">
        <div className="container">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-display font-bold tracking-tight mb-6">
              TEAM <span className="text-primary">PLAYERS</span>
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
          </div>

          {/* Varsity Roster */}
          <div className="max-w-6xl mx-auto mb-20">
            <h3 className="text-4xl font-display font-bold text-secondary mb-8 flex items-center">
              <span className="w-12 h-2 bg-secondary mr-4 rounded-full" />
              VARSITY ROSTER
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Patch", position: "SG/SF", height: "6'8\"", weight: "180", wingspan: "6'7\"", jersey: "01" },
                { name: "TN", position: "Center", height: "7'3\"", weight: "245", wingspan: "7'3\"", jersey: "02" },
                { name: "Hyper", position: "SF", height: "6'8\"", weight: "200", wingspan: "6'8\"", jersey: "03" },
                { name: "Player Name", position: "Position", height: "6'2\"", weight: "---", wingspan: "6'5\"", jersey: "04" },
                { name: "Player Name", position: "Position", height: "6'2\"", weight: "---", wingspan: "6'5\"", jersey: "05" },
                { name: "Player Name", position: "Position", height: "6'2\"", weight: "---", wingspan: "6'5\"", jersey: "06" },
                { name: "Player Name", position: "Position", height: "6'2\"", weight: "---", wingspan: "6'5\"", jersey: "07" },
                { name: "Player Name", position: "Position", height: "6'2\"", weight: "---", wingspan: "6'5\"", jersey: "08" },
                { name: "Player Name", position: "Position", height: "6'2\"", weight: "---", wingspan: "6'5\"", jersey: "09" },
                { name: "Player Name", position: "Position", height: "6'2\"", weight: "---", wingspan: "6'5\"", jersey: "10" },
                { name: "Player Name", position: "Position", height: "6'2\"", weight: "---", wingspan: "6'5\"", jersey: "11" },
                { name: "Player Name", position: "Position", height: "6'2\"", weight: "---", wingspan: "6'5\"", jersey: "12" },
              ].map((player, index) => (
                <Card
                  key={index}
                  className="bg-white rounded-3xl border-2 border-secondary/20 hover-lift p-6 shadow-soft"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-display font-bold text-foreground mb-1">
                        {player.name}
                      </h4>
                      <p className="text-sm text-foreground/60 font-medium">{player.position}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-display font-bold text-white">
                        {player.jersey}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-foreground/60">Height:</span>
                      <span className="text-foreground font-semibold">{player.height}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/60">Weight:</span>
                      <span className="text-foreground font-semibold">{player.weight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/60">Wingspan:</span>
                      <span className="text-foreground font-semibold">{player.wingspan}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* JV Roster */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-display font-bold text-secondary mb-8 flex items-center">
              <span className="w-12 h-2 bg-secondary mr-4 rounded-full" />
              JV ROSTER
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 12 }).map((_, index) => (
                <Card
                  key={index}
                  className="bg-white rounded-3xl border-2 border-secondary/20 hover-lift p-6 shadow-soft"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-display font-bold text-foreground mb-1">
                        Player Name
                      </h4>
                      <p className="text-sm text-foreground/60 font-medium">Position</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-display font-bold text-white">
                        {index + 13}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-foreground/60">Height:</span>
                      <span className="text-foreground font-semibold">6'0"</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/60">Wingspan:</span>
                      <span className="text-foreground font-semibold">6'3"</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/60">Jersey:</span>
                      <span className="text-secondary font-bold">#{index + 13}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="relative py-32 overflow-hidden">
        <div className="container">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-display font-bold tracking-tight mb-6">
              SEASON <span className="text-primary">SCHEDULE</span>
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
          </div>

          <div className="max-w-5xl mx-auto space-y-4">
            {[
              {
                date: "00 Month 0000",
                type: "Game Type",
                opponent: "vs. Team",
                location: "Location",
              },
              {
                date: "00 Month 0000",
                type: "Game Type",
                opponent: "vs. Team",
                location: "Location",
              },
              {
                date: "00 Month 0000",
                type: "Game Type",
                opponent: "vs. Team",
                location: "Location",
              },
              {
                date: "00 Month 0000",
                type: "Game Type",
                opponent: "vs. Team",
                location: "Location",
              },
              {
                date: "00 Month 0000",
                type: "Game Type",
                opponent: "vs. Team",
                location: "Location",
              },
              {
                date: "00 Month 0000",
                type: "Game Type",
                opponent: "vs. Team",
                location: "Location",
              },
              {
                date: "00 Month 0000",
                type: "Game Type",
                opponent: "vs. Team",
                location: "Location",
              },
              {
                date: "00 Month 0000",
                type: "Game Type",
                opponent: "vs. Team",
                location: "Location",
              },
            ].map((game, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border-2 border-secondary/20 hover-lift p-6 shadow-soft"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center space-x-6">
                    <div className="flex-shrink-0">
                      <div className="text-3xl font-display font-bold text-accent">
                        {game.date.split(" ")[1].replace(",", "")}
                      </div>
                      <div className="text-sm text-foreground/60 font-medium">
                        {game.date.split(" ")[0]} {game.date.split(" ")[2]}
                      </div>
                    </div>
                    <div className="w-px h-12 bg-border" />
                    <div>
                      <div className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-2 bg-primary/20 text-primary border border-primary/30">
                        {game.type}
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">
                        {game.opponent}
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-foreground/60 font-medium">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-sm">{game.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tryouts Section */}
      <section id="tryouts" className="relative py-32 overflow-hidden gradient-pink-blue">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-16">
              <h2 className="text-6xl md:text-7xl font-display font-bold tracking-tight mb-6">
                <span className="text-primary">TRYOUTS</span>
              </h2>
              <div className="w-24 h-2 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
            </div>

            {/* Content */}
            <div className="bg-white rounded-3xl border-2 border-secondary/20 shadow-soft p-12">
              <div className="space-y-6 text-lg leading-relaxed text-foreground/70">
                <p className="text-2xl text-foreground font-bold mb-8">
                  Dunkin' Heights Select holds competitive tryouts for athletes
                  committed to excellence.
                </p>
                <p>
                  Our evaluation process is comprehensive and objective. We
                  assess players based on four core criteria: technical skill,
                  basketball IQ, effort and intensity, and coachability.
                </p>
                <p>
                  We're looking for athletes who demonstrate not only talent but
                  also the mindset and work ethic required to compete at the
                  highest level. Character and attitude are just as important as
                  ability.
                </p>
                <p>
                  Tryout dates, times, and locations will be announced on this
                  website and through our official team Discord server. Make
                  sure to follow our updates to stay informed.
                </p>
              </div>

              {/* Evaluation Criteria */}
              <div className="grid md:grid-cols-2 gap-6 mt-12">
                {[
                  { title: "Technical Skill", icon: "🏀" },
                  { title: "Basketball IQ", icon: "🧠" },
                  { title: "Effort & Intensity", icon: "💪" },
                  { title: "Coachability", icon: "📋" },
                ].map((criteria, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-background rounded-2xl border-2 border-secondary/20"
                  >
                    <div className="text-4xl">{criteria.icon}</div>
                    <div className="text-lg font-semibold text-foreground">
                      {criteria.title}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center mt-12">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-lg font-bold tracking-wider rounded-full shadow-soft hover-lift"
                >
                  STAY UPDATED
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section id="staff" className="relative py-32 overflow-hidden">
        <div className="container">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-display font-bold tracking-tight mb-6">
              COACHING <span className="text-primary">STAFF</span>
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            {/* Head Coach */}
            <div>
              <h3 className="text-3xl font-display font-bold text-secondary mb-8 flex items-center">
                <span className="w-12 h-2 bg-secondary mr-4 rounded-full" />
                HEAD COACH
              </h3>
              <Card className="bg-white rounded-3xl border-2 border-secondary/20 hover-lift shadow-soft p-8">
                <div className="flex items-center space-x-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-display font-bold text-white">
                      HC
                    </span>
                  </div>
                  <div>
                    <h4 className="text-3xl font-display font-bold text-foreground mb-2">
                      nugsyy
                    </h4>
                    <p className="text-foreground/60 font-medium">
                      General Manager & Head Coach
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Assistant Coaches */}
            <div>
              <h3 className="text-3xl font-display font-bold text-secondary mb-8 flex items-center">
                <span className="w-12 h-2 bg-secondary mr-4 rounded-full" />
                ASSISTANT COACHES
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {["Korzii", "Melz", "Spots Open!", "Spots Open!"].map((coach, index) => (
                  <Card
                    key={index}
                    className="bg-white rounded-3xl border-2 border-secondary/20 hover-lift shadow-soft p-6"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-display font-bold text-white">
                          AC
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xl font-display font-bold text-foreground mb-1">
                          {coach}
                        </h4>
                        <p className="text-sm text-foreground/60 font-medium">
                          Assistant Coach
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Support Staff */}
            <div>
              <h3 className="text-3xl font-display font-bold text-secondary mb-8 flex items-center">
                <span className="w-12 h-2 bg-secondary mr-4 rounded-full" />
                SUPPORT STAFF
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { role: "Team Manager", name: "nugsyy", abbr: "TM" },
                  { role: "Operations Director", name: "Korzii", abbr: "OD" },
                  { role: "Media Coordinator", name: "melt", abbr: "MC" },
                ].map((staff, index) => (
                  <Card
                    key={index}
                    className="bg-white rounded-3xl border-2 border-secondary/20 hover-lift shadow-soft p-6"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                        <span className="text-xl font-display font-bold text-white">
                          {staff.abbr}
                        </span>
                      </div>
                      <h4 className="text-lg font-display font-bold text-foreground mb-1">
                        {staff.name}
                      </h4>
                      <p className="text-sm text-foreground/60 font-medium">
                        {staff.role}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="relative py-32 overflow-hidden gradient-pink-blue">
        <div className="container">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-display font-bold tracking-tight mb-6">
              OUR <span className="text-primary">SPONSORS</span>
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Featured Sponsor */}
            <Card className="bg-white rounded-3xl border-2 border-secondary/20 hover-lift shadow-soft p-12 mb-12">
              <div className="text-center">
                <div className="inline-block px-4 py-2 rounded-full text-xs font-bold tracking-wider mb-6 bg-accent/20 text-accent border border-accent/30">
                  OFFICIAL JERSEY DESIGNER
                </div>
                <h3 className="text-5xl font-display font-bold text-foreground mb-4 tracking-tight">
                  PLAQKZ
                </h3>
                <p className="text-lg text-foreground/60 font-medium">
                  Premium athletic apparel and custom jersey design
                </p>
              </div>
            </Card>

            {/* Future Sponsors Placeholder */}
            <div className="text-center">
              <p className="text-xl text-foreground/60 font-medium mb-8">
                Interested in partnering with Dunkin' Heights Select?
              </p>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-12 py-6 text-lg font-bold tracking-wider rounded-full transition-all duration-300"
              >
                BECOME A SPONSOR
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t-2 border-secondary/20 bg-white">
        <div className="container">
          <div className="text-center">
            <p className="text-sm text-foreground/60 font-medium">
              © 2026 Dunkin' Heights Select. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
