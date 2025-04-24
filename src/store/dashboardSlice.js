import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [],
    allWidgets: [],
    showAddWidgetModal: false,
    currentCategory: null,
    searchTerm: '',
    showSidebar: false
};

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setInitialData(state, action) {
            state.categories = action.payload.categories;
            state.allWidgets = action.payload.allWidgets;
        },
        toggleWidget(state, action) {
            const { categoryId, widgetId, isAdding } = action.payload;
            const category = state.categories.find(c => c.id === categoryId);

            if (isAdding) {
                const widget = state.allWidgets.find(w => w.id === widgetId);
                if (widget && !category.widgets.some(w => w.id === widgetId)) {
                    category.widgets.push(widget);
                }
            } else {
                category.widgets = category.widgets.filter(w => w.id !== widgetId);
            }
        },
        addNewWidget(state, action) {
            const { categoryId, widget } = action.payload;
            const category = state.categories.find(c => c.id === categoryId);
            if (category) {
                state.allWidgets.push(widget);
                category.widgets.push(widget);
            }
        },
        toggleAddWidgetModal(state, action) {
            state.showAddWidgetModal = action.payload.show;
            state.currentCategory = action.payload.category || null;
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        toggleSidebar(state) {
            state.showSidebar = !state.showSidebar;
        }
    }
});

export const {
    setInitialData,
    toggleWidget,
    addNewWidget,
    toggleAddWidgetModal,
    setSearchTerm,
    toggleSidebar
} = dashboardSlice.actions;

export default dashboardSlice.reducer;