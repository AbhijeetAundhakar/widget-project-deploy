// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//     toggleWidget,
//     toggleAddWidgetModal,
//     addNewWidget
// } from '../../store/dashboardSlice';
// import styles from './AddWidgetModal.module.css';

// const AddWidgetModal = () => {
//     const dispatch = useDispatch();
//     const { showAddWidgetModal, currentCategory, allWidgets, categories } = useSelector(
//         (state) => state.dashboard
//     );

//     // State declarations at the top (never conditional)
//     const [activeTab, setActiveTab] = useState('cspm');
//     const [newWidgetName, setNewWidgetName] = useState('');
//     const [newWidgetContent, setNewWidgetContent] = useState('');
//     const [isAddingNew, setIsAddingNew] = useState(false);

//     // Calculate derived values after hooks
//     const categoryWidgets = currentCategory
//         ? categories.find(c => c.id === currentCategory)?.widgets.map(w => w.id) || []
//         : [];

//     const availableWidgets = allWidgets.filter(widget => widget.type === activeTab);

//     const handleClose = () => {
//         dispatch(toggleAddWidgetModal({ show: false, category: null }));
//         setIsAddingNew(false);
//         setNewWidgetName('');
//         setNewWidgetContent('');
//     };

//     const handleToggleWidget = (widgetId, isAdding) => {
//         dispatch(toggleWidget({
//             categoryId: currentCategory,
//             widgetId,
//             isAdding
//         }));
//     };

//     const handleAddNewWidget = () => {
//         if (newWidgetName.trim() && newWidgetContent.trim()) {
//             const newWidget = {
//                 id: `widget-${Date.now()}`,
//                 name: newWidgetName,
//                 content: newWidgetContent,
//                 type: activeTab
//             };

//             dispatch(addNewWidget({
//                 categoryId: currentCategory,
//                 widget: newWidget
//             }));

//             setNewWidgetName('');
//             setNewWidgetContent('');
//             setIsAddingNew(false);
//         }
//     };

//     if (!showAddWidgetModal) return null;

//     return (
//         <div className={styles.modalOverlay}>
//             <div className={styles.modal}>
//                 <h2>Add Widget</h2>
//                 <p>Personalise your dashboard by adding the following widget</p>

//                 <div className={styles.tabs}>
//                     {['cspm', 'cwpp', 'image', 'ticket'].map(tab => (
//                         <button
//                             key={tab}
//                             className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
//                             onClick={() => setActiveTab(tab)}
//                         >
//                             {tab.toUpperCase()}
//                         </button>
//                     ))}
//                 </div>

//                 {!isAddingNew ? (
//                     <>
//                         <div className={styles.widgetList}>
//                             {availableWidgets.map(widget => (
//                                 <div key={widget.id} className={styles.widgetItem}>
//                                     <input
//                                         type="checkbox"
//                                         id={widget.id}
//                                         checked={categoryWidgets.includes(widget.id)}
//                                         onChange={(e) => handleToggleWidget(widget.id, e.target.checked)}
//                                     />
//                                     <label htmlFor={widget.id}>{widget.name}</label>
//                                 </div>
//                             ))}
//                         </div>

//                         <button
//                             className={styles.addNewBtn}
//                             onClick={() => setIsAddingNew(true)}
//                         >
//                             + Add New Widget
//                         </button>
//                     </>
//                 ) : (
//                     <div className={styles.newWidgetForm}>
//                         <div className={styles.formGroup}>
//                             <label>Widget Name</label>
//                             <input
//                                 type="text"
//                                 value={newWidgetName}
//                                 onChange={(e) => setNewWidgetName(e.target.value)}
//                                 placeholder="Enter widget name"
//                             />
//                         </div>

//                         <div className={styles.formGroup}>
//                             <label>Widget Content</label>
//                             <textarea
//                                 value={newWidgetContent}
//                                 onChange={(e) => setNewWidgetContent(e.target.value)}
//                                 placeholder="Enter widget content (use new lines for formatting)"
//                                 rows={4}
//                             />
//                         </div>
//                     </div>
//                 )}

//                 <div className={styles.modalActions}>
//                     <button className={styles.cancelBtn} onClick={handleClose}>
//                         Cancel
//                     </button>
//                     {isAddingNew ? (
//                         <button
//                             className={styles.confirmBtn}
//                             onClick={handleAddNewWidget}
//                             disabled={!newWidgetName.trim() || !newWidgetContent.trim()}
//                         >
//                             Confirm
//                         </button>
//                     ) : (
//                         <button className={styles.confirmBtn} onClick={handleClose}>
//                             Confirm
//                         </button>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );

// };

// export default AddWidgetModal;







import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    toggleWidget,
    toggleAddWidgetModal,
    addNewWidget
} from '../../store/dashboardSlice';
import styles from './AddWidgetModal.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiPlus } from 'react-icons/fi';

const AddWidgetModal = () => {
    const dispatch = useDispatch();
    const { showAddWidgetModal, currentCategory, allWidgets, categories } = useSelector(
        (state) => state.dashboard
    );

    const [activeTab, setActiveTab] = useState('cspm');
    const [newWidgetName, setNewWidgetName] = useState('');
    const [newWidgetContent, setNewWidgetContent] = useState('');
    const [isAddingNew, setIsAddingNew] = useState(false);

    const categoryWidgets = currentCategory
        ? categories.find(c => c.id === currentCategory)?.widgets.map(w => w.id) || []
        : [];

    const availableWidgets = allWidgets.filter(widget => widget.type === activeTab);

    const handleClose = () => {
        dispatch(toggleAddWidgetModal({ show: false, category: null }));
        setIsAddingNew(false);
        setNewWidgetName('');
        setNewWidgetContent('');
    };

    const handleToggleWidget = (widgetId, isAdding) => {
        dispatch(toggleWidget({
            categoryId: currentCategory,
            widgetId,
            isAdding
        }));
    };

    const handleAddNewWidget = () => {
        if (newWidgetName.trim() && newWidgetContent.trim()) {
            const newWidget = {
                id: `widget-${Date.now()}`,
                name: newWidgetName,
                content: newWidgetContent,
                type: activeTab
            };

            dispatch(addNewWidget({
                categoryId: currentCategory,
                widget: newWidget
            }));

            setNewWidgetName('');
            setNewWidgetContent('');
            setIsAddingNew(false);
        }
    };

    return (
        <AnimatePresence>
            {showAddWidgetModal && (
                <motion.div
                    className={styles.modalOverlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleClose}
                >
                    <motion.div
                        className={styles.modal}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className={styles.closeButton} onClick={handleClose}>
                            <FiX size={20} />
                        </button>

                        <div className={styles.modalHeader}>
                            <h2>Add Widget</h2>
                            <p>Personalize your dashboard by adding widgets</p>
                        </div>

                        <div className={styles.tabs}>
                            {['cspm', 'cwpp', 'image', 'ticket'].map(tab => (
                                <motion.button
                                    key={tab}
                                    className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {tab.toUpperCase()}
                                </motion.button>
                            ))}
                        </div>

                        {!isAddingNew ? (
                            <>
                                <div className={styles.widgetList}>
                                    {availableWidgets.length > 0 ? (
                                        availableWidgets.map(widget => (
                                            <motion.div
                                                key={widget.id}
                                                className={styles.widgetItem}
                                                whileHover={{ x: 5 }}
                                            >
                                                <input
                                                    type="checkbox"
                                                    id={widget.id}
                                                    checked={categoryWidgets.includes(widget.id)}
                                                    onChange={(e) => handleToggleWidget(widget.id, e.target.checked)}
                                                />
                                                <label htmlFor={widget.id}>
                                                    <span className={styles.widgetName}>{widget.name}</span>
                                                    <span className={styles.widgetType}>{widget.type}</span>
                                                </label>
                                            </motion.div>
                                        ))
                                    ) : (
                                        <div className={styles.emptyState}>
                                            No widgets available for this category
                                        </div>
                                    )}
                                </div>

                                <motion.button
                                    className={styles.addNewBtn}
                                    onClick={() => setIsAddingNew(true)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <FiPlus />
                                    <span>Create New Widget</span>
                                </motion.button>
                            </>
                        ) : (
                            <motion.div
                                className={styles.newWidgetForm}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <div className={styles.formGroup}>
                                    <label>Widget Name</label>
                                    <input
                                        type="text"
                                        value={newWidgetName}
                                        onChange={(e) => setNewWidgetName(e.target.value)}
                                        placeholder="Enter widget name"
                                        className={styles.formInput}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label>Widget Content</label>
                                    <textarea
                                        value={newWidgetContent}
                                        onChange={(e) => setNewWidgetContent(e.target.value)}
                                        placeholder="Enter widget content (use new lines for formatting)"
                                        rows={4}
                                        className={styles.formTextarea}
                                    />
                                </div>
                            </motion.div>
                        )}

                        <div className={styles.modalActions}>
                            <motion.button
                                className={styles.cancelBtn}
                                onClick={handleClose}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Cancel
                            </motion.button>
                            {isAddingNew ? (
                                <motion.button
                                    className={styles.confirmBtn}
                                    onClick={handleAddNewWidget}
                                    disabled={!newWidgetName.trim() || !newWidgetContent.trim()}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Create Widget
                                </motion.button>
                            ) : (
                                <motion.button
                                    className={styles.confirmBtn}
                                    onClick={handleClose}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Done
                                </motion.button>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AddWidgetModal;