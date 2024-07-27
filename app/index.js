import LoginScreen from "./login/LoginScreen";
import HomeScreen from "./userHome/HomeScreen";
import useAuthentication from '../utils/useAuthentication';

export default function Index() {
    const user = null;

    let initialScreen;

    if (user) {
        initialScreen = <HomeScreen />;
    } else {
        initialScreen = <LoginScreen />;
    }

    return (
        initialScreen
    );
}
