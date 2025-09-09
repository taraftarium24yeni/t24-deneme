
import matches from '../data/matches.json';

export default function MatchPage({ match }) {
  return (
    <div>
      <h1>{match.homeTeam} - {match.awayTeam}</h1>
      <p>Tarih: {match.date}</p>
      <p>Canlı Yayın Linki: <a href={match.stream}>Yayınla İzle</a></p>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsEvent",
          "name": `${match.homeTeam} vs ${match.awayTeam}`,
          "startDate": match.date,
          "location": "Online Yayın",
          "organizer": { "@type": "Organization", "name": "Taraftarium24" }
        })}
      </script>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = matches.map(m => ({ params: { macId: m.id.toString() } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const match = matches.find(m => m.id.toString() === params.macId);
  return { props: { match } };
}
