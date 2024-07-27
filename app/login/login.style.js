import { StyleSheet } from "react-native";
import { SIZES, COLORS, FONT } from "../../constants";

const styles = StyleSheet.create({
   container: {
    display: 'flex',
    height: '100%',
    marginHorizontal: SIZES.medium,
    paddingTop: SIZES.xLarge * 10,
   },
  //  buttonContainer: {
  //   alignItems: 'center',
  //   justifyContent: "center",
  //   height:SIZES.small*2 + 20,
  //   marginBottom: SIZES.medium,
  //   backgroundColor: COLORS.tertiary,
  //   borderRadius: SIZES.xSmall
  // },
  // buttonText: {
  //   fontFamily: FONT.bold,
  //   fontSize: SIZES.large,
  //   color: COLORS.white,
  // }
})

export default styles;