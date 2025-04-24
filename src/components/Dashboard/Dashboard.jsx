// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setInitialData } from '../../store/dashboardSlice';
// import { initialData } from '../../data/initialData';
// import Category from './Category';
// import styles from './Dashboard.module.css';
// import Sidebar from '../Sidebar/Sidebar';
// import { FiMoreVertical } from 'react-icons/fi';
// import { toggleSidebar } from '../../store/dashboardSlice';

// const Dashboard = () => {
//     const dispatch = useDispatch();
//     const { showSidebar, categories } = useSelector((state) => state.dashboard);

//     useEffect(() => {
//         dispatch(setInitialData(initialData));
//     }, [dispatch]);

//     return (
//         <div className={styles.dashboard}>
//             <div className={styles.header}>
//                 <h1>CHAPP Dashboard</h1>
//                 <button
//                     className={styles.sidebarToggle}
//                     onClick={() => dispatch(toggleSidebar())}
//                 >
//                     <FiMoreVertical />
//                 </button>
//             </div>

//             <div className={styles.content}>
//                 {categories?.map((category) => (
//                     <Category key={category.id} category={category} />
//                 ))}
//             </div>

//             <Sidebar />
//             {showSidebar && <div className={styles.sidebarOverlay} onClick={() => dispatch(toggleSidebar())} />}
//         </div>
//     );
// };

// export default Dashboard;








import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMoreVertical } from 'react-icons/fi';
import { setInitialData, toggleSidebar } from '../../store/dashboardSlice';
import { initialData } from '../../data/initialData';
import Category from './Category';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    const dispatch = useDispatch();
    const { showSidebar, categories } = useSelector((state) => state.dashboard);

    useEffect(() => {
        dispatch(setInitialData(initialData));
    }, [dispatch]);

    return (
        <motion.div
            className={styles.dashboard}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className={styles.header}>
                <motion.h1
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    CHAPP Dashboard
                </motion.h1>
                <motion.button
                    className={styles.sidebarToggle}
                    onClick={() => dispatch(toggleSidebar())}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FiMoreVertical />
                </motion.button>
            </div>

            <div className={styles.content}>
                <AnimatePresence>
                    {categories?.map((category) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            exit={{ opacity: 0 }}
                            layout
                        >
                            <Category category={category} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <Sidebar />
            <AnimatePresence>
                {showSidebar && (
                    <motion.div
                        className={styles.sidebarOverlay}
                        onClick={() => dispatch(toggleSidebar())}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Dashboard;
