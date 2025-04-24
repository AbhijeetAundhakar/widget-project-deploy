import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleWidget } from '../../store/dashboardSlice';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { FiX } from 'react-icons/fi';
import styles from './Widget.module.css';
import BarGraph from '../Graphs/BarGraph';
import PieChart from '../Graphs/PieChart';

const Widget = ({ widget, categoryId }) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(toggleWidget({
            categoryId,
            widgetId: widget.id,
            isAdding: false
        }));
    };

    const renderContent = () => {
        switch (widget.id) {
            case 'cloud-accounts':
                return (
                    <div className={styles.graphContainer}>
                        <PieChart
                            data={{
                                labels: ['Connected', 'Not Connected'],
                                datasets: [{
                                    data: [2, 2],
                                    backgroundColor: ['#4CAF50', '#F44336'],
                                }]
                            }}
                            title="Cloud Accounts Status"
                        />
                    </div>
                );
            case 'cloud-account-risk':
                return (
                    <div className={styles.graphContainer}>
                        <BarGraph
                            data={{
                                labels: ['Failed', 'Morning', 'Not Contacted', 'Posted'],
                                datasets: [{
                                    label: 'Count',
                                    data: [688, 68, 36, 7253],
                                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                                }]
                            }}
                            title="Cloud Account Risk Assessment"
                        />
                    </div>
                );
            case 'image-risk':
                return (
                    <div className={styles.graphContainer}>
                        <BarGraph
                            data={{
                                labels: ['Critical', 'High', 'Low'],
                                datasets: [{
                                    label: 'Vulnerabilities',
                                    data: [4, 400, 300],
                                    backgroundColor: ['#FF6384', '#FF9F40', '#FFCD56'],
                                }]
                            }}
                            title="Image Vulnerabilities"
                        />
                    </div>
                );
            default:
                return (
                    <div className={styles.widgetContent}>
                        {widget.content.split('\n').map((line, i) => (
                            <p key={i}>{line}</p>
                        ))}
                    </div>
                );
        }
    };

    return (
        <motion.div
            className={styles.widget}
            whileHover={{ y: -5 }}
            layout
        >
            <motion.button
                className={styles.removeBtn}
                onClick={handleRemove}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
            >
                <FiX />
            </motion.button>
            <h3>{widget.name}</h3>
            {renderContent()}
        </motion.div>
    );
};

export default Widget;