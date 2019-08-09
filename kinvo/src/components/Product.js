import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Product extends Component {
    constructor(props) {
        super(props);
        productTypeId= this.props.productTypeId
         productName = this.props.productName
         financialInstitutionName = this.props.financialInstitutionName
          equity = this.props.equity
          profitability = this.props.profitability 
          color = this.colorProduct(productTypeId)


        this.state = { productName, financialInstitutionName, equity, profitability, color  }
    }


    colorProduct(productTypeId) {
        switch (productTypeId) {
            case 1:
              return '#008DCB'
              case 2:
              return '#D5A82C'
              case 3:
              return '#94E5D2'
              case 4:
              return '#86B2DE'
              case 5:
              return '#5AAAD5'
              case 6:
              return '#38BFA0'
              case 7:
              return '#3E71B9'
              case 8:
              return '#4C309B'
              case 9:
              return '#86B2DE'
              case 10:
              return '#B9B42C'
              case 11:
              return '#4141D5' 
              case 12:
              return '#9390E5'
            
                }
    }

    async componentDidMount() {
        // this.getGeoDataTable();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{fontWeight: 'bold', fontSize: 10, color: this.state.color}}> {this.state.financialInstitutionName} </Text>
                </View>

                <View style={styles.body}>
                    <Text style={styles.bodyTextStyle} >{this.state.productName}</Text>
                </View>

                <View style={styles.footer}>
                    <View style={{alignItems:'flex-start'}}>
                        <Text style={{fontSize:10,color:'#707B81'}}>SALDO ATUAL</Text>
                        <Text style={{fontSize:20,color: this.state.color}}>R${this.state.equity}</Text>
                    </View>

                    <View style={{alignItems:'flex-end'}}>
                        <Text style={{fontSize:10,color:'#707B81'}}>RENTABILIDADE</Text>
                        <Text style={{fontSize:20,color: this.state.color}}>{this.state.profitability}%</Text>
                    </View>

                </View>



            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 15,
        margin:1 

    },

    header: {

    },
    body: {

    },
    footer: {
        flexDirection:'row',
        justifyContent:'space-between'
    },
    headerTextStyle: {
        
    },
    bodyTextStyle: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#CCCFD1'
    }

})
