import { Text, TouchableOpacity } from "react-native";

type PantryItemProps = {
    name: string;
    expiryDate: string;
    onPress?: () => void; // press handler, make sure to implement function later to create popup for users to edit the item
}

const PantryItem = ({ name, expiryDate, onPress }: PantryItemProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            className="p-4 border-b border-gray-300"
        >
            <Text className="text-lg font-semibold">{name}</Text>
            <Text className="text-sm text-gray-500">Expires: {expiryDate}</Text>
        </TouchableOpacity>
    );
};

export default PantryItem;