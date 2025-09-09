
import matches from '../data/matches.json';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Taraftarium24 Canlı Maçlar</h1>
      <ul>
        {matches.map(match => (
          <li key={match.id}>
            <Link href={`/${match.id}`}>
              {match.homeTeam} - {match.awayTeam} ({match.date})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
