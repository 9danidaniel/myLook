import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        padding: 15,
        backgroundColor: '#F8F4E3',
        flex: 1,
    },
    btn: {
        flexDirection: 'row',
        marginTop: 10,
        padding: 25,
        opacity: 0.9,
        borderRadius: 5,
        backgroundColor: '#C7B98B',
        borderColor: '#2A2B2A'
    },
    btnIcon: {
        height: 40,
        width: 40
    },
    btnText: {
        marginLeft: 20,
        color: '#2A2B2A',
        fontSize: 25,
        fontWeight: 'bold',
    },
    txt: {
        color: '#C7B98B',
        fontSize: 25,
        marginTop: 50,
        textAlign: 'center',
    },
    nameInput: {
        fontSize: 30,
        color: '#2A2B2A',
    }

});

export default styles