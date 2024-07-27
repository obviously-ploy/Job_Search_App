import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../../../constants";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: SIZES.small,
        borderRadius: SIZES.small,
        backgroundColor: COLORS.white,
        marginBottom: SIZES.small,
        height: 'auto'
    },
    icon: {
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        marginRight: SIZES.small,
        opacity: 0.5
    },
    infoText: {
        fontFamily: FONT.regular,
        fontSize: SIZES.medium,
        color: COLORS.gray,
    },
});

export default styles