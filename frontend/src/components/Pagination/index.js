import { ReactComponent as Arrow } from '../../assets/img/arrow.svg'
import './styles.css';


function Pagination({ page, onChange }) {
  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button"
          disabled={page.first === page.number} onClick={() => onChange(page.number - 1)}>
          <Arrow />
        </button>
        <p>{`${page.number + 1} de ${page.totalPages}`}</p>
        <button className="dsmovie-pagination-button"
          disabled={page.last === page.number} onClick={() => onChange(page.number + 1)}>
          <Arrow className="dsmovie-flip-horizontal" />
        </button>
      </div>
    </div>
  )
}

export default Pagination;