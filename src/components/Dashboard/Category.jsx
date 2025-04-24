import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAddWidgetModal, setSearchTerm } from '../../store/dashboardSlice';
import Widget from './Widget';
import styles from './Category.module.css';

const Category = ({ category }) => {
    const dispatch = useDispatch();
    const { searchTerm } = useSelector((state) => state.dashboard);

    const handleAddWidget = () => {
        dispatch(toggleAddWidgetModal({ show: true, category: category.id }));
    };

    const filteredWidgets = category.widgets.filter(widget =>
        widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.category}>
            <div className={styles.categoryHeader}>
                <h2>{category.name}</h2>
                <button
                    className={styles.addWidgetBtn}
                    onClick={handleAddWidget}
                >
                    + Add Widget
                </button>
            </div>

            <div className={styles.widgetsContainer}>
                {filteredWidgets.length > 0 ? (
                    filteredWidgets.map((widget) => (
                        <Widget key={widget.id} widget={widget} categoryId={category.id} />
                    ))
                ) : (
                    <div className={styles.noWidgets}>No widgets to display</div>
                )}
            </div>
        </div>
    );
};

export default Category;