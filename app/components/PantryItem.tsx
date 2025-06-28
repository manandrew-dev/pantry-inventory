import { Text, TouchableOpacity } from "react-native";

type PantryItemProps = {
    name: string;
    expiryDate: string;
    onPress?: () => void; // press handler, make sure to implement function later to create popup for users to edit the item
}

const PantryItem = ({ name, expiryDate, onPress }: PantryItemProps) => {
    return (
        <TouchableOpacity


        >
            <Text className="text-lg font-semibold">{name}</Text>
        </TouchableOpacity>
    );
};

export default PantryItem;