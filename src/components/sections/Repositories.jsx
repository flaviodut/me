import RepoCard from '../ui/RepoCard';
import { repositoriesData } from '../../data/portfolioData';

export default function Repositories() {
  return (
    <section className="repos section" id="repositorios">
      <div className="container">
        <h2 className="section-title">Repositórios e Projetos</h2>
        <div className="grid-2-cols">
          {repositoriesData.map((repo) => (
            <RepoCard
              key={repo.id}
              title={repo.title}
              url={repo.url}
              desc={repo.desc}
              techs={repo.techs}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
