import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../constants";

const styles = StyleSheet.create({
    margins: {
        marginHorizontal: SIZES.small,
    },
    container: {
        flex: 1,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    pictureContainer: {
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
    pictureImage:{
        width: 172,
        height: 172,
        position: "relative"
    },

    cameraCircle: {
        width: 35,
        height: 35,
        backgroundColor: COLORS.gray2,
        borderRadius: 25,
        position: 'absolute',
        bottom: 0,
        right: -60,
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.9
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
        marginBottom: SIZES.large
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
    }
})

export default styles;