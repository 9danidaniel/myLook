import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        backgroundColor: '#514F42',
        borderRadius: 5
       
    },
    savedNumText: {
        color: '#fff',
        fontSize: 15,
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
        width: 35,
        height: 35,
    },
    counterContainer: {
        flexDirection: 'row',
        backgroundColor: '#C7B98B',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        padding: 17,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default styles