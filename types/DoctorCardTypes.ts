import { ImageSourcePropType } from "react-native"
import { Double } from "react-native/Libraries/Types/CodegenTypes"

export type DoctorCardProps = {
    name: string | undefined,
    image: string | undefined,
    major: string | undefined,
    starts: Double | undefined,
    available: boolean | undefined
}