import { Modal, Text, View, Button } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';

type PantryItem = {
    name: string;
    expirtyDate: string;
};

type PantryItemModalProps = {
    visible: boolean;
    item: PantryItem | null;
    onClose: () => void;
};

const PantryItemModal = ({ visible, item, onClose}: PantryItemModalProps) => {
    if (!item) return null;
    
    return (
        
    )
}

export default PantryItemModal;