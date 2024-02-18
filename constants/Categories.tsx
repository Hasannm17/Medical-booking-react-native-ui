import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const color: string = "#1A998E";
const size: number = 30;

export default [
  {
    id: 1,
    name: "Blood Tests",
    icon: <Fontisto name="blood-drop" size={size} color={color} />,
  },
  {
    id: 3,
    name: "Imaging Tests",
    icon: (
      <MaterialCommunityIcons
        name="image-broken-variant"
        size={size}
        color={color}
      />
    ),
  },
  {
    id: 4,
    name: "Genetic Tests",
    icon: <FontAwesome5 name="dna" size={size} color={color} />,
  },
  {
    id: 5,
    name: "Allergy Tests",
    icon: <FontAwesome5 name="allergies" size={size} color={color} />,
  },
  {
    id: 6,
    name: "Hormone Tests",
    icon: (
      <MaterialCommunityIcons
        name="transit-connection"
        size={size}
        color={color}
      />
    ),
  },
  {
    id: 7,
    name: "Infectious Disease Tests",
    icon: <FontAwesome5 name="microscope" size={size} color={color} />,
  },
  {
    id: 8,
    name: "Cardiac Tests",
    icon: <FontAwesome name="heartbeat" size={size} color={color} />,
  },
];
