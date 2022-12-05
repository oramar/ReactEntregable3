import useResidentCard from "../hoost/useResidentCard";
import './styles/ResidentCard.css'
const ResidentCard = ({ url }) => {
  const resident = useResidentCard(url);
  return (
    <article className="card">
      <header className="card__header">
        <img className="card__avatar" src={resident?.image} alt="" />
        <div className="card__circle-container">
          <div className={`card__circle ${resident?.status}`}></div>
          <span className="card__circle-label">{resident?.status}</span>
        </div>
      </header>
      <section className="card__body">
        <h3 className="card__name">{resident?.name}</h3>
        <ul className="card__list">
          <li className="card__item">
            <span className="card__item-label">Species</span>
            <span className="card__item-value"></span> {resident?.species}
          </li>
          <li className="card__item">
          <span className="card__item-label">Origen</span>
            <span className="card__item-value"></span> {resident?.origin.name}
          </li>
          <li className="card__item">
          <span className="card__item-label">Episodes where appear</span>
            <span className="card__item-value"> {resident?.episode.length}</span>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentCard;
