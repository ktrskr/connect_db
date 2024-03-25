let items = []; 

const addItem = (item) => {
    items.push(item);
    return item;
};

const getAllItems = () => {
    return items;
};

const getItemById = (id) => {
    return items.find(item => item.id === id);
};

const updateItem = (id, newData) => {
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
        items[index] = { ...items[index], ...newData };
        return items[index];
    }
    return null; 
};

const deleteItem = (id) => {
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
        items.splice(index, 1);
        return true;
    }
    return false; 
};

module.exports = { addItem, getAllItems, getItemById, updateItem, deleteItem };
