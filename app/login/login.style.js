import { StyleSheet } from "react-native";
import { SIZES, COLORS, FONT } from "../../constants";

const styles = StyleSheet.create({
   container: {
    display: 'flex',
    height: '100%',
    marginHorizontal: SIZES.medium,
    paddingTop: SIZES.xLarge * 10,
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
    marginBottom: SIZES.xSmall,
    marginHorizontal: SIZES.small,
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
})

export default styles;