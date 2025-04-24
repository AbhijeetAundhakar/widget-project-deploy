import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm, toggleSidebar } from '../../store/dashboardSlice';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    const dispatch = useDispatch();
    const { showSidebar, searchTerm } = useSelector((state) => state.dashboard);

    // Close sidebar when clicking outside
    useEffect(() => {
        if (!showSidebar) return;

        const handleClickOutside = (e) => {
            const sidebar = document.querySelector(`.${styles.sidebar}`);
            if (sidebar && !sidebar.contains(e.target)) {
                dispatch(toggleSidebar());
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showSidebar, dispatch]);

    return (
        <div className={`${styles.sidebar} ${showSidebar ? styles.show : ''}`}>
            <div className={styles.sidebarHeader}>
                <h3>Search Widgets</h3>
                <button
                    className={styles.closeBtn}
                    onClick={() => dispatch(toggleSidebar())}
                >
                    ×
                </button>
            </div>

            <div className={styles.searchBox}>
                <input
                    type="text"
                    placeholder="Search widgets..."
                    value={searchTerm}
                    onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                />
            </div>
        </div>
    );
};

export default Sidebar;