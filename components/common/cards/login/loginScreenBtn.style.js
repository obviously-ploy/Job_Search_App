import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "../../../../constants/theme";

const styles = StyleSheet.create({
    buttonContainer: (btnColour) => ({
        alignItems: 'center',
        justifyContent: "center",
        height:SIZES.small*2 + 20,
        marginBottom: SIZES.medium,
        backgroundColor: btnColour,
        borderRadius: SIZES.xSmall
    }),
    buttonText: {
        fontFamily: FONT.bold,
        fontSize: SIZES.large,
        color: COLORS.white,
    }
});

export default styles;