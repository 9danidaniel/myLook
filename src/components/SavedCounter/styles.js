import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: '#2A2B2A',
        borderRadius: 10
       
    },
    savedNumText: {
        color: '#2A2B2A',
        fontSize: 17,
        color: '#fff',
        padding: 10,
        textAlign: 'center'
    },
    savedCountText: {
       color: '#2A2B2A',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 15
    },
    imgLogo: {
        width: 30,
        height: 30,
    },
    counterContainer: {
        flexDirection: 'row',
        backgroundColor: '#C7B98B',
        borderRadius: 5,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default styles