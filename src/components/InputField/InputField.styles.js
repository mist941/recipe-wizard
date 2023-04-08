import {StyleSheet} from 'react-native';
import commonStyles from '../../common.styles';

export const InputFieldStyles = StyleSheet.create({
  fieldWrap: {
    width: '100%',
  },
  labelText: {
    fontWeight: '400',
    fontSize: 14,
    color: commonStyles.primaryTextColor,
    marginBottom: 10
  },
  errText: {
    color: commonStyles.errColor,
  },
  field: {
    borderRadius: 16,
    padding: 13,
    width: '100%',
    fontSize: 16,
    color: commonStyles.primaryTextColor,
    backgroundColor: commonStyles.primaryBackground,
    height: 56,
  },
  fieldErr: {
    borderColor: commonStyles.errColor,
  }
});