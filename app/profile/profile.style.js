import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    pictureImage:{
        width: 150,
        height: 150,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderWidth: 5,
        borderColor: COLORS.gray2,
    },

    cameraCircle: {
        width: 35,
        height: 35,
        backgroundColor: COLORS.gray2,
        borderRadius: 25,
        position: 'absolute',
        bottom: 0,
        right: 20,
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    cameraImage: {
        width: 25,
        height: 25,
        position: 'relative',
        zIndex: 2,
    },

    nameStyle: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,
    },

    activeStyle: {
        fontFamily: FONT.medium,
        fontSize: SIZES.small,
        color: COLORS.gray
    },
    
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: SIZES.large,
        marginBottom: SIZES.small
    },

    headerTitle: {
        fontSize: SIZES.large,
        fontFamily: FONT.medium,
        color: COLORS.primary,
    },
   
    headerBtn: {
        fontSize: SIZES.medium,
        fontFamily: FONT.medium,
        color: COLORS.gray,
    },

    margins: {
        marginHorizontal: SIZES.small
    },
    fieldContainer: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: SIZES.medium,
        borderRadius: SIZES.small,
        backgroundColor: COLORS.lightWhite,
        shadowColor: "red",
        ...SHADOWS.medium,
    },
    fieldWrapper: {
        width: 50,
        height: 100,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: 'red',
    },
    fieldText: {
    fontFamily: FONT.regular,
    paddingHorizontal: SIZES.medium,
    color: "black",
    },
    fieldImage: {
    width: 25,
    height: 25,
    }
})

export default styles;