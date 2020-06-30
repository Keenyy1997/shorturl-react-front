
/**
 * @param {{ type: 'primary' | 'default' }} props Button Props
 */
export default function validateButton(props) {
  
  let styles = {
    padding: '0.75em 0.75em',
    width: '100%',
    fontSize: 20,
    outline: 0,
    border: 0,
    borderRadius: 10,
    fontFamily: 'Roboto',
  };

  switch(props.type) {
  
    case 'primary':
        
      styles = {
        ...styles,
        color: '#fff',
        backgroundColor: '#378FF8',
        fontWeight: 'bold',
      }

      break;

    default:

      break;
  }
  return styles;
}
