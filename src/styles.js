import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    /* Componentes Gerais*/
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: '#F5F8FA',
    },
    text:{
        color: "#707B81",
        fontSize: 16,
        fontWeight: "bold",
        padding: 4,
    },

    /*Header*/
    containersup:{
        justifyContent: 'space-around',
        flexDirection:'row',
        backgroundColor: 'white',
    },
    containertextprincipal:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F8FA',
        borderTopStartRadius: 13,
        borderTopEndRadius: 13,
    },
    containertext:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerimages:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 49,
        height: 49,
    },
    images:{
        width: 13,
        height: 13,
    },

    /* Componentes da barra de pesquisa*/
    textbox:{
        flexDirection: 'row',
        backgroundColor:'white',
        elevation: 5,
        paddingEnd: 50,
        borderRadius: 100,
        marginHorizontal: 20,
        marginVertical: 20,
    },
    imagesmagnifier:{
        marginTop: 10,
        marginStart: 10,
        justifyContent: 'flex-start',
        width: 18,
        height: 18,
    },

    /*Footer*/
    containerinf:{
        flex: 0,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection:'row',
        backgroundColor: 'white',
        borderTopWidth: 0.5,
        borderTopColor: '#CCCFD1',
    },
    containersymbols:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    textsymbols:{
        color: '#627179',
        fontSize: 10,
        fontWeight: 'bold',
    },
    symbols:{
        marginVertical: 5,
        width: 22,
        height: 22,
    },
    principalsymbol:{
        marginVertical: 10,
        width: 45,
        height: 45,
    },

    /*Lista*/
    containerlist:{
        backgroundColor: 'white',
    },
    textlist:{
        flexDirection: 'column',
        color: 'black',
    },
    textlistinf:{
        borderBottomWidth: 0.5,
        borderBottomColor:'#CCCFD1',
        flexDirection:'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingBottom: 10,
    },
    listletter:{
        paddingStart: 7.5,
        color: "#707B81",
        fontSize: 14,
        fontWeight: "bold",
    },
});

export default styles;