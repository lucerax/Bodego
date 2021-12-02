import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faSearch, faInbox, faUser, faPlus, faCalendar, faBarcode} from '@fortawesome/free-solid-svg-icons';

import { Tab, TabButton, Title, Add } from './styles';

export default function BottomTabNavigator({ navigation, background, colorTitle, colorIcon }) {
    return (
        <Tab background={background}>
            <TabButton onPress={() => navigation.navigate("HomeScreen")}>
                {<FontAwesomeIcon icon={faHome} size={28} color={colorIcon} /> }
                {/* <Title style={{ color: colorTitle }}>Home</Title> */}
            </TabButton>
            <TabButton onPress={() => navigation.navigate("ScanWrapper")}>
                <FontAwesomeIcon icon={faBarcode} size={28} color={colorIcon} />
                {/* <Title style={{ color: colorTitle }}>Scan Barcode</Title> */}
            </TabButton>
            <TabButton onPress={() => navigation.navigate("TempScan")}>
                <FontAwesomeIcon icon={faCalendar} size={28} color={colorIcon} />
                {/* <Title style={{ color: colorTitle }}>Scan Expiry</Title> */}
            </TabButton>
            <TabButton onPress={() => navigation.navigate("Auth")}>
                <FontAwesomeIcon icon={faUser} size={28} color={colorIcon} />
                {/* <Title style={{ color: colorTitle }}>Account</Title> */}
            </TabButton>
        </Tab>
    )
}