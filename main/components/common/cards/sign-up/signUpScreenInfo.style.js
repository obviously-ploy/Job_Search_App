import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../../constants";

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
    },
    errorFieldContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        height: 'auto',
        borderRadius: SIZES.xSmall,
        borderWidth: 1,
        backgroundColor: "rgba(255, 0, 0, 0.1)",
        borderColor: 'rgba(255, 0, 0, 1)' 
    },
    errorMessageContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
        marginBottom: SIZES.xSmall
    },
    errorText: {
        fontFamily: FONT.regular,
        fontSize: SIZES.small,
        color: "red",
        marginLeft: SIZES.medium/2, 
    },

    errorIcon: {
        width: SIZES.medium,
        height: SIZES.medium,
    }
});

export default styles