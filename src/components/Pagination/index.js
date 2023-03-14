
import PropTypes from 'prop-types';
import styles from "./Pagination.module.scss"

const Pagination = (props) => {
    const {currentPage , handlePrev , handleNext } = props
        return (
            <div className={styles.pagination}>
                <button onClick={handlePrev}>&lt;</button>
                <span> {currentPage} </span>
                <button onClick={handleNext}>&gt;</button>
            </div>
        )
}


Pagination.propTypes = {
    currentPage:PropTypes.number,
    handlePrev:PropTypes.func,
    handleNext:PropTypes.func,
};


export default Pagination;
