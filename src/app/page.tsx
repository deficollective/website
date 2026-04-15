import Link from "next/link";

const activities = [
  {
    title: "Education",
    iconPath: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222",
    content:
      "We raise public awareness of the benefits and risks of decentralized infrastructure, building informed trust in this new technology through research, social media and public communication.",
  },
  {
    title: "Governance",
    iconPath: "M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M8 10v11M12 10v11M16 10v11M20 10v11",
    content:
      "We actively participate in DeFi governance, leveraging our expertise and reputation to advocate for the growth of decentralized protocols and support mission-critical teams.",
  },
  {
    title: "Liquidity",
    iconPath: "M12 21.5c-3.04 0-5.5-2.46-5.5-5.5 0-3.72 5.5-12.5 5.5-12.5s5.5 8.78 5.5 12.5c0 3.04-2.46 5.5-5.5 5.5z",
    content:
      "Bootstrapping liquidity is one of the hardest challenges for public infrastructure projects. We help DeFi protocols overcome this barrier with our network, expertise and assets.",
  },
  {
    title: "Infrastructure",
    iconPath: "M21 3H3a1 1 0 00-1 1v6a1 1 0 001 1h18a1 1 0 001-1V4a1 1 0 00-1-1zM21 13H3a1 1 0 00-1 1v6a1 1 0 001 1h18a1 1 0 001-1v-6a1 1 0 00-1-1zM7 7h0M7 17h0",
    content:
      "We support the teams building the foundational layers of decentralized finance, because reliable infrastructure is the bedrock of a secure and resilient DeFi ecosystem.",
  },
];

const partners = [
  { id: "aerodrome", alt: "Aerodrome", src: "/images/partners/aerodrome-dark.svg", height: 45 },
  { id: "dyad", alt: "Dyad", src: "/images/partners/dyad-light.svg", height: 55 },
  { id: "ef", alt: "Ethereum Foundation", src: "/images/partners/ethereum-foundation-light.svg", height: 55 },
  { id: "liquity", alt: "Liquity", src: "/images/partners/liquity-light.svg", height: 40 },
  { id: "glo-dollar", alt: "Glo Dollar", src: "/images/partners/glo_dollar.svg", height: 40 },
  { id: "maverick", alt: "Maverick", src: "/images/partners/maverick-light.svg", height: 55 },
  { id: "polygon-labs", alt: "Polygon Labs", src: "/images/partners/polygon-labs-light.svg", height: 40 },
  { id: "pooltogether", alt: "PoolTogether", src: "/images/partners/pooltogether-logo-dark.svg", height: 40 },
  { id: "possum-labs", alt: "Possum Labs", src: "/images/partners/Possum-Labs-light-bg.svg", height: 40 },
  { id: "sir", alt: "Synthetics Implemented Right", src: "/images/partners/SIR_BlackFont.svg", height: 40 },
  { id: "defiscan", alt: "DeFiScan", src: "/images/partners/defiscan-dark.svg", height: 40 },
  { id: "velodrome", alt: "Velodrome", src: "/images/partners/velodrome-dark.svg", height: 45 },
];

export default function Home() {
  return (
    <>
      {/* Banner */}
      <div className="bg-main">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-8">
            <div className="max-w-3xl">
              <h1 className="gradient-text title-text text-[3.3rem] leading-[3.3rem] font-medium mb-6">
                <span className="gradient-span">Advancing the decentralization</span> of financial
                infrastructure
              </h1>
              <p className="text-lg mb-8">
                The DeFi Collective is a non-profit organization dedicated to
                supporting decentralized finance. We harness on-chain and
                off-chain resources to help DeFi fulfill its promise of secure,
                transparent and inclusive public financial infrastructure.
              </p>
              <a
                href="https://discord.gg/Z467Ehv6VU"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border-2 border-[var(--color-link-dark)] rounded px-6 py-3 font-semibold text-[var(--color-text-heading)] hover:border-dotted hover:no-underline"
              >
                Get in touch
                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.947 2.418-2.157 2.418z" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Mission */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-medium mb-6">What we do</h2>
            <p className="text-lg">
              We foster an environment where DeFi protocols can emerge as a
              trusted alternative to traditional financial services. Our work
              spans four key areas:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className="rounded-2xl bg-[var(--color-surface)] p-8 text-center shadow-sm"
              >
                <div className="mb-4 text-[var(--color-primary)]">
                  <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={activity.iconPath} />
                  </svg>
                </div>
                <h4 className="text-xl font-medium mb-4">{activity.title}</h4>
                <p>{activity.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 lg:py-24 bg-partners">
        <div className="container mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/3">
              <h3 className="text-2xl font-medium mb-6">Our partners</h3>
              <p>
                From the Ethereum Foundation to leading DeFi protocols and
                infrastructure teams, we have partnered with organizations that
                share our commitment to maximizing decentralization.
              </p>
            </div>
            <div className="lg:w-2/3">
              <div className="grid grid-cols-3 gap-8 place-items-center">
                {partners.map((partner) => (
                  <div key={partner.id} className="flex justify-center items-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={partner.src}
                      alt={partner.alt}
                      style={{ height: `${partner.height}px` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-medium mb-6">Support the Ants</h2>
            <p className="text-lg mb-8">
              The DeFi Collective relies on community support to sustain its
              mission. Whether through donations, partnerships or direct
              contributions, every bit helps advance decentralized finance.
            </p>
            <Link
              href="/support"
              className="inline-flex items-center border-2 border-[var(--color-link-dark)] rounded px-6 py-3 font-semibold text-[var(--color-text-heading)] hover:border-dotted hover:no-underline"
            >
              Learn how to support us
              <span className="pl-2">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
