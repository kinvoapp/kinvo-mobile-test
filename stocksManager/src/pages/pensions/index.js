import React, { useState, useEffect } from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import PensionCard from '../../components/pensionCard.js'
import ApiError from '../../components/apiError';
import LoadingIndicator from '../../components/loadingIndicator';

//redux things
import {connect} from 'react-redux';
import * as pensionsActions from '../../actions/pensions';
import { bindActionCreators } from 'redux';
import styles from './styles.js';

const FILTERLIMITS = {noTaxFundsValue: 0, minimumFundsValue: 100, redemptionTermValue: 1}

const Pensions = (props) => {
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [pensions, setPension] = useState([]);
  const [shouldCallApi, setShouldCallApi] = useState(false);
  const [pensionsFilter, setPensionsFilter] = useState({noTax: false, min100: false, d1: false});

  useEffect(() => {
    if(pensions.length == 0){
      setLoading(true)
      props.getPensions()
          .then(() => {
            setPension(props.pensions)
            setFetchError(false)
            
            if(pensions.length == 0){
              setShouldCallApi(!shouldCallApi);
              setLoading(false)
            }

          })
          .catch(() => {
              setLoading(false)
              setFetchError(true)
          })
    }
  },[shouldCallApi]);

  useEffect(() => {
    let noTaxActive = pensionsFilter.noTax;
    let min100Active = pensionsFilter.min100;
    let d1Active = pensionsFilter.d1;
    
    let pensionsFiltered = props.pensions;
    
    if(noTaxActive)
      pensionsFiltered = pensionsFiltered.filter(e=> e.tax == FILTERLIMITS.noTaxFundsValue);

    if(min100Active)
      pensionsFiltered = pensionsFiltered.filter(e=> e.minimumValue == FILTERLIMITS.minimumFundsValue);

    if(d1Active)
      pensionsFiltered = pensionsFiltered.filter(e=> e.redemptionTerm == FILTERLIMITS.redemptionTermValue);
  
    setPension(pensionsFiltered);
    setPensionsFilter(pensionsFilter);

  }, [pensionsFilter]);

  const renderItems = ({item, index}) => {
    return (
        <PensionCard index={index} pension={item} />
        )
  }


  return (
    <View>
      {!fetchError &&
        <View>
          <View style={styles.pensionFilter}>
            <TouchableOpacity style={pensionsFilter.noTax ? styles.pensionFilterItemSelected : styles.pensionFilterItem} onPress={() => setPensionsFilter({...pensionsFilter, noTax: !pensionsFilter.noTax})}>
              <Text style={pensionsFilter.noTax ? styles.pensionFilterItemTextSelected : styles.pensionFilterItemText }>SEM TAXA</Text>
            </TouchableOpacity>
            <TouchableOpacity style={pensionsFilter.min100 ? styles.pensionFilterItemSelected : styles.pensionFilterItem} onPress={() => setPensionsFilter({...pensionsFilter, min100: !pensionsFilter.min100})}>
              <Text style={pensionsFilter.min100 ? styles.pensionFilterItemTextSelected : styles.pensionFilterItemText}>R$ 100,00</Text>
            </TouchableOpacity>
            <TouchableOpacity style={pensionsFilter.d1 ? styles.pensionFilterItemSelected : styles.pensionFilterItem} onPress={() => setPensionsFilter({...pensionsFilter, d1: !pensionsFilter.d1})}>
              <Text style={pensionsFilter.d1 ? styles.pensionFilterItemTextSelected : styles.pensionFilterItemText}>D+1</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.line}></View>
        </View>
      }
      {pensions.length == 0 && !loading && !fetchError &&
        <View style={styles.pensionFilter}>
          <Text style={styles.notFoundFilter}>Nenhum resultado foi encontrado para os filtros selecionados.</Text>
        </View>
      }

      {fetchError &&
        <ApiError callTryAgain={() => setShouldCallApi(!shouldCallApi)} />
      }

      {!fetchError && loading &&
        <LoadingIndicator/>
      }

      {!fetchError && !loading &&
        <FlatList 
          data={pensions}
          keyExtractor={(item, index) => index + ""}
          renderItem={renderItems}
          horizontal={false}
          style={{height: '85%'}}/>
      }   
    </View>
  );
}

const mapStateToProps = state => ({
  pensions: state.pensions,
})

const mapDispatchToProps = dispatch => 
bindActionCreators({...pensionsActions}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Pensions);