import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../../../constants";

const styles = StyleSheet.create({
    fieldContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        height: 'auto',
        marginBottom: SIZES.medium,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.xSmall
    },
    fieldInput: {
        fontFamily: FONT.regular,
        fontSize: SIZES.medium,
        color: COLORS.gray,
        width: "100%",
        height: "100%",
    },
    fieldIcon: {
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        margin: SIZES.small,
        opacity: 0.5
    }
});

export default styles