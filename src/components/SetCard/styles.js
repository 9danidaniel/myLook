import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        borderRadius: 5,
        backgroundColor: '#C7B98B',
    },
    shirtContainer: {
        padding: 15,
        flexDirection: 'row',
        backgroundColor:'#A09673'
    },
    pantsContainer: {
        padding: 15,
        flexDirection: 'row',
        backgroundColor:'#79725B'
    },
    shoesContainer: {
        padding: 15,
        flexDirection: 'row',
        backgroundColor:'#514F42',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    title: {
        marginHorizontal: 10,
        fontSize: 25,
        padding: 15,
        fontWeight: 'bold',
        color: '#2A2B2A'
    },
    item: {

        marginHorizontal: 10,
        color: '#fff',
       
    }
})

export default styles